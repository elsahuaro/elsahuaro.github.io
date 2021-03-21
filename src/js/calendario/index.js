var cal_data = {};

var today;
var selected;

window.addEventListener("load", function(){
  today =  moment();
  selected = moment(today).startOf('month');
  buildCalendar(today.year(), today.month());
});

const prevMonth = () => {
  selected.add(-1, 'month');
  buildCalendar(selected.year(), selected.month());
}

const nextMonth = () => {
  selected.add(1, 'month');
  buildCalendar(selected.year(), selected.month());
}

const resetDate = () => {
  selected = moment(today).startOf('month');
  buildCalendar(selected.year(), selected.month());
}

const dows = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
                'Junio', 'Julio', 'Agosto', 'Septiembre',
                'Octubre', 'Noviembre', 'Diciembre' ];

const fullDayString = d => {
  return dows[d.day()] + ' ' + d.date();
}

const monthYearString = d => {
  return meses[d.month()] + ' ' + d.year();
}

const openPopup = (d) => {
  return () => {
    if (!window.matchMedia("all and (min-width:768px)").matches) {
      return;
    }
    let popupdate = document.getElementById('popupdate');
    let popupcontent = document.getElementById('popupcontent');
    popupcontent.innerHTML = '';
    popupdate.innerHTML = fullDayString(d) + ' de ' + monthYearString(moment({ year: d.year(), month: d.month() }));
    const entries = cal_data[d.year()][d.month()][d.date()];
    for (var entry of entries) {
      var newEntry = document.createElement('div');
      var newEntryTxt = document.createTextNode(entry['texto']);
      newEntry.classList.add('popupentry');
      newEntry.classList.add('ct-' + entry['tipo']);
      newEntry.appendChild(newEntryTxt);
      popupcontent.appendChild(newEntry);
    }
    let overlay = document.getElementById('calpopup');
    overlay.style.visibility = 'visible';
    overlay.style.opacity = 1;
  }
}

const closePopup = () => {
  let overlay = document.getElementById('calpopup');
  overlay.style.visibility = 'hidden';
  overlay.style.opacity = 0;
}

const buildCalendar = (year, month) => {
  const caldiv = document.getElementById('calendar');
  const monthyears = document.getElementsByClassName('monthyear');
  caldiv.innerHTML = '';
  for (let my of Array.from(monthyears)) {
    my.innerHTML = '';
  }
  const cal = calcCalendar(year, month);
  for (var d of cal) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('day');
    if (d.month() == month) {
      newDiv.classList.add('inmonth');
    } else {
      newDiv.classList.add('outmonth');
    }
    if (d.date() == today.date() && d.month() == today.month() && d.year() == today.year()) {
        newDiv.classList.add('today');
    }
    var newDayDiv = document.createElement('div');
    newDayDiv.classList.add('daylabel');
    var newDayTxt = document.createTextNode(d.date());
    newDayDiv.appendChild(newDayTxt);
    var newFullDayDiv = document.createElement('div');
    newFullDayDiv.classList.add('fulldaylabel');
    var newFullDayTxt = document.createTextNode(fullDayString(d));
    newFullDayDiv.appendChild(newFullDayTxt);
    newDiv.appendChild(newDayDiv);
    newDiv.appendChild(newFullDayDiv);
    if (d.year() in cal_data &&
        d.month() in cal_data[d.year()] &&
        d.date() in cal_data[d.year()][d.month()]) {
      const entries = cal_data[d.year()][d.month()][d.date()];
      let entry_types = [];
      for (var entry of entries) {
        var newEntry = document.createElement('div');
        var newEntryTxt = document.createTextNode(entry['texto']);
        newEntry.classList.add('entry');
        newEntry.classList.add('ct-' + entry['tipo']);
        if (entry_types.includes(entry['tipo'])) {
          newEntry.classList.add('ct-hide');
        } else {
          entry_types.push(entry['tipo']);
        }
        newEntry.appendChild(newEntryTxt);
        newDiv.appendChild(newEntry);
      }
      if (d.month() == month) {
        newDiv.onclick = openPopup(d);
      }
    } else {
      newDiv.classList.add('noentry');
    }
    caldiv.appendChild(newDiv);
  }
  const monthYearStr = monthYearString(moment({ year: year, month: month }));
  for (let my of Array.from(monthyears)) {
    my.appendChild(document.createTextNode(monthYearStr));
  }
}

const calcCalendar = (year, month) => {
  const startDate = moment({ year: year, month: month }).startOf('month');
  const endDay = moment(startDate).add(1, 'month').add(-1, 'day');

  const weeks = {};
  for (let day = moment(startDate); endDay.diff(day) >= 0; day.add(1, 'day')) {
    let key = day.isoWeekYear() + '_' + day.isoWeek();
    if (!(key in weeks)) {
      weeks[key] = { week: day.isoWeek(), year: day.isoWeekYear() }
    }
  }

  var calendar = [];
  for (const [index, week] of Object.entries(weeks)) {
    for (var d = 1; d <= 7; d++) {
      calendar.push(moment().isoWeekYear(week.year).isoWeek(week.week).isoWeekday(d));
    }
  }
  return calendar;
}

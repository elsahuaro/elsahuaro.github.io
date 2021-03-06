var galeria_data = [
  { src: '0000.jpg', distrito: 7, lugar: 'Alamos', fecha: '2021-02-22' },
  { src: '0001.jpg', distrito: 6, lugar: 'Ciudad Obregón', fecha: '2021-02-23' },
  { src: '0002.jpg', distrito: 3, lugar: 'Poblado Miguel Alemán', fecha: '2021-02-28' },
  { src: '0003.jpg', distrito: 6, lugar: 'Campo 30', fecha: '2021-02-28' },
  { src: '0004.jpg', distrito: 6, lugar: 'Campo 30', fecha: '2021-02-28' },
  { src: '0005.jpg', distrito: 6, lugar: 'Campo 30', fecha: '2021-02-28' },
  { src: '0006.jpg', distrito: 2, lugar: 'Nogales', fecha: '2021-02-28' },
  { src: '0007.jpg', distrito: 2, lugar: 'Nogales', fecha: '2021-02-28' },
  { src: '0008.jpg', distrito: 3, lugar: 'Poblado Miguel Alemán', fecha: '2021-02-28' },
  { src: '0009.jpg', distrito: 3, lugar: 'Poblado Miguel Alemán', fecha: '2021-02-28' },
  { src: '0010.jpg', distrito: 3, lugar: 'Poblado Miguel Alemán', fecha: '2021-02-28' },
  { src: '0011.jpg', distrito: 4, lugar: 'Capacitación Virtual', fecha: '2021-02-28' },
  { src: '0012.jpg', distrito: 1, lugar: 'Caborca', fecha: '2021-02-28' },
  { src: '0013.jpg', distrito: 1, lugar: 'Caborca', fecha: '2021-02-28' },
  { src: '0014.jpg', distrito: 1, lugar: 'Caborca', fecha: '2021-02-28' },
  { src: '0015.jpg', distrito: 7, lugar: 'Etchojoa', fecha: '2021-02-27' },
  { src: '0016.jpg', distrito: 7, lugar: 'Etchojoa', fecha: '2021-02-27' },
  { src: '0017.jpg', distrito: 7, lugar: 'Navojoa', fecha: '2021-02-26' },
  { src: '0018.jpg', distrito: 7, lugar: 'Navojoa', fecha: '2021-02-26' },
  { src: '0019.jpg', distrito: 7, lugar: 'Navojoa', fecha: '2021-02-19' },
  { src: '0020.jpg', distrito: 7, lugar: 'Navojoa', fecha: '2021-02-19' },
  { src: '0021.jpg', distrito: 4, lugar: 'Bacadehuachi', fecha: '2021-02-21' },
  { src: '0022.jpg', distrito: 4, lugar: 'Bacadehuachi', fecha: '2021-02-21' },
  { src: '0023.jpg', distrito: 4, lugar: 'Villa Hidalgo', fecha: '2021-02-20' },
  { src: '0024.jpg', distrito: 4, lugar: 'Granados - Huásabas', fecha: '2021-02-21' },
  { src: '0025.jpg', distrito: 1, lugar: 'San Luis Río Colorado', fecha: '2021-02-27' },
  { src: '0026.jpg', distrito: 1, lugar: 'San Luis Río Colorado', fecha: '2021-02-27' },
  { src: '0027.jpg', distrito: 4, lugar: 'Bavispe', fecha: '2021-02-21' },
  { src: '0028.jpg', distrito: 4, lugar: 'Bavispe', fecha: '2021-02-21' },
  { src: '0029.jpg', distrito: 4, lugar: 'Bavispe', fecha: '2021-02-21' },
  { src: '0030.jpg', distrito: 4, lugar: 'Bavispe', fecha: '2021-02-21' },
  { src: '0031.jpg', distrito: 1, lugar: 'Sonoyta', fecha: '2021-03-02' },
  { src: '0032.jpg', distrito: 1, lugar: 'Puerto Peñasco', fecha: '2021-03-02' },
  { src: '0033.jpg', distrito: 4, lugar: 'Sahuaripa', fecha: '2021-03-06' },
  { src: '0034.jpg', distrito: 4, lugar: 'Sahuaripa', fecha: '2021-03-06' },
  { src: '0035.jpg', distrito: 4, lugar: 'Sahuaripa', fecha: '2021-03-06' },
  // { src: '', distrito: , lugar: '', fecha: '' },
];

window.addEventListener("load", function() {
  const gal = document.getElementById('galeria');
  gal.innerHTML = '';
  for (var item of galeria_data) {
    var newItem = document.createElement('a');
    var newImage = document.createElement('img');
    var newDiv = document.createElement('div');
    newItem.classList.add('galeria__item');
    newItem.href = '/img/galeria/' + item['src'];
    newImage.classList.add('galeria__image');
    newImage.src = '/img/galeria/' + item['src'];
    newDiv.classList.add('galeria__descr');
    newDiv.innerHTML = item.fecha + ' Distrito ' + item.distrito + ' en ' + item.lugar;
    newItem.appendChild(newImage);
    newItem.appendChild(newDiv);
    gal.appendChild(newItem);
  }
});

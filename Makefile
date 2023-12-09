.ONESHELL:

HTML_SRC = $(shell find src/ -type f -name '*.html')
HTML_TGT = $(HTML_SRC:src/%.html=build/%.html)
JS_SRC = $(shell find src/js/ -type f -name '*.js')
JS_TGT = $(JS_SRC:src/%.js=build/%.js)
CSS_SRC = $(shell find src/css/ -type f -name '*.css')
CSS_TGT = $(CSS_SRC:src/%.css=build/%.css)
TTF_SRC = $(shell find src/fonts/ -type f -name '*.ttf')
TTF_TGT = $(TTF_SRC:src/%.ttf=build/%.ttf)
WOFF_SRC = $(shell find src/fonts/ -type f -name '*.woff2')
WOFF_TGT = $(WOFF_SRC:src/%.woff2=build/%.woff2)
JSON_SRC = $(shell find src/data/ -type f -name '*.json')
JSON_TGT = $(JSON_SRC:src/%.json=build/%.json)
PNG_SRC = $(shell find src/img/ -type f -name '*.png')
PNG_TGT = $(PNG_SRC:src/%.png=build/%.png)
JPG_SRC = $(shell find src/img/ -type f -name '*.jpg')
JPG_TGT = $(JPG_SRC:src/%.jpg=build/%.jpg)
SVG_SRC = $(shell find src/img/ -type f -name '*.svg')
SVG_TGT = $(SVG_SRC:src/%.svg=build/%.svg)


.PHONY: build docs

build: $(HTML_TGT) $(JS_TGT) $(CSS_TGT) $(TTF_TGT) $(WOFF_TGT) $(JSON_TGT) $(PNG_TGT) $(JPG_TGT) $(SVG_TGT) favicon libs docs
	cp README.md build/

build/%.html: src/%.html
	mkdir -p $(@D)
	cp $< $@

build/%.js: src/%.js
	mkdir -p $(@D)
	./node_modules/.bin/babel $< -o $@

build/%.css: src/%.css
	mkdir -p $(@D)
	./node_modules/.bin/postcss $< --use autoprefixer -o $@

build/%.ttf: src/%.ttf
	mkdir -p $(@D)
	cp $< $@

build/%.woff2: src/%.woff2
	mkdir -p $(@D)
	cp $< $@

build/%.json: src/%.json
	mkdir -p $(@D)
	cp $< $@

build/%.png: src/%.png
	mkdir -p $(@D)
	cp $< $@

build/%.jpg: src/%.jpg
	mogrify -strip -resize "1280x1280>" $<
	mkdir -p $(@D)
	cp $< $@

build/%.svg: src/%.svg
	mkdir -p $(@D)
	cp $< $@

favicon: src/img/favicon.ico
	mkdir -p build/img
	cp src/img/favicon.ico build/img/favicon.ico

libs:
	mkdir -p build/lib
	cp -r src/lib build/

docs:
	mkdir -p build/doc
	cp -r src/doc build/

serve:
	ros run -- --load server.lisp

deploy:
	git subtree push --prefix build origin gh-pages

clean:
	rm -r build

clean-js:
	rm $(JS_TGT)

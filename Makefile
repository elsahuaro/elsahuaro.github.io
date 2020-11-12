.ONESHELL:

HTML_SRC = $(shell find src/ -type f -name '*.html')
HTML_TGT = $(HTML_SRC:src/%.html=build/%.html)
JS_SRC = $(shell find src/js/ -type f -name '*.js')
JS_TGT = $(JS_SRC:src/%.js=build/%.js)
CSS_SRC = $(shell find src/css/ -type f -name '*.css')
CSS_TGT = $(CSS_SRC:src/%.css=build/%.css)
FONT_SRC = $(shell find src/fonts/ -type f -name '*.woff2')
FONT_TGT = $(FONT_SRC:src/%.woff2=build/%.woff2)
JSON_SRC = $(shell find src/data/ -type f -name '*.json')
JSON_TGT = $(JSON_SRC:src/%.json=build/%.json)
PNG_SRC = $(shell find src/img/ -type f -name '*.png')
PNG_TGT = $(PNG_SRC:src/%.png=build/%.png)


.PHONY: build docs

build: $(HTML_TGT) $(JS_TGT) $(CSS_TGT) $(FONT_TGT) $(JSON_TGT) $(PNG_TGT) favicon libs docs
	cp README.md build/

build/%.html: src/%.html
	mkdir -p $(@D)
	cp $< $@

build/%.js: src/%.js
	mkdir -p $(@D)
	./node_modules/.bin/babel $< -o $@

build/%.css: src/%.css
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
	sbcl --load server.lisp

deploy:
	git subtree push --prefix build origin gh-pages

clean:
	rm -r build

clean-js:
	rm $(JS_TGT)

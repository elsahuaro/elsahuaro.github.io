.ONESHELL:

JS_SRC = $(shell find pages/ -type f -name '*.js' -not -path "pages/lib/*")
JS_TGT = $(JS_SRC:pages/%.js=static/%.js)
CSS_SRC = $(shell find pages/ -type f -name '*.css')
CSS_TGT = $(CSS_SRC:pages/%.css=static/%.css)
PNG_SRC = $(shell find pages/ -type f -name '*.png' -not -path "pages/lib/*")
PNG_TGT = $(PNG_SRC:pages/%.png=static/%.png)
GIF_SRC = $(shell find pages/ -type f -name '*.gif' -not -path "pages/lib/*")
GIF_TGT = $(GIF_SRC:pages/%.gif=static/%.gif)

.PHONY: serve build build_html lib fonts deploy

serve:
	sbcl --load serve.lisp

build: build_html $(JS_TGT) $(CSS_TGT) $(PNG_TGT) $(GIF_TGT) lib fonts

build_html:
	source pyenv/bin/activate
	python gensite.py
	deactivate
	cp ./pages/favicon.ico ./static/favicon.ico

static/%.js: pages/%.js .babelrc
	mkdir -p $(@D)
	./node_modules/.bin/babel $< -o $@

static/%.css: pages/%.css
	mkdir -p $(@D)
	cp $< $@

static/%.png: pages/%.png
	mkdir -p $(@D)
	cp $< $@

static/%.gif: pages/%.gif
	mkdir -p $(@D)
	cp $< $@

fonts:
	mkdir -p static/fonts
	find ./pages/fonts -type f -name '*.otf' -exec sfnt2woff {} \;
	cp ./pages/fonts/*.woff ./static/fonts

lib:
	mkdir -p static/lib
	cp ./pages/lib/* ./static/lib

pyfreeze:
	source pyenv/bin/activate
	pip freeze > requirements.txt
	deactivate

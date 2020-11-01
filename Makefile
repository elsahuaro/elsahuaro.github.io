.ONESHELL:

JS_SRC = $(shell find pages/ -type f -name '*.js' -not -path "pages/lib/*")
JS_TGT = $(JS_SRC:pages/%.js=static/electoral/%.js)
JSON_SRC = $(shell find pages/ -type f -name '*.json' -not -path "pages/lib/*")
JSON_TGT = $(JSON_SRC:pages/%.json=static/electoral/%.json)
CSS_SRC = $(shell find pages/ -type f -name '*.css')
CSS_TGT = $(CSS_SRC:pages/%.css=static/electoral/%.css)
PNG_SRC = $(shell find pages/ -type f -name '*.png' -not -path "pages/lib/*")
PNG_TGT = $(PNG_SRC:pages/%.png=static/electoral/%.png)
JPG_SRC = $(shell find pages/ -type f -name '*.jpg' -not -path "pages/lib/*")
JPG_TGT = $(JPG_SRC:pages/%.jpg=static/electoral/%.jpg)
GIF_SRC = $(shell find pages/ -type f -name '*.gif' -not -path "pages/lib/*")
GIF_TGT = $(GIF_SRC:pages/%.gif=static/electoral/%.gif)

.PHONY: serve build build_html lib fonts deploy

serve:
	sbcl --load serve.lisp

build: build_html $(JS_TGT) $(JSON_TGT) $(CSS_TGT) $(PNG_TGT) $(JPG_TGT) $(GIF_TGT) lib fonts docs

build_html:
	source pyenv/bin/activate
	python gensite.py
	deactivate
	cp ./pages/favicon.ico ./static/electoral/favicon.ico

static/electoral/%.js: pages/%.js .babelrc
	mkdir -p $(@D)
	./node_modules/.bin/babel $< -o $@

static/electoral/%.json: pages/%.json
	mkdir -p $(@D)
	cp $< $@

static/electoral/%.css: pages/%.css
	mkdir -p $(@D)
	cp $< $@

static/electoral/%.png: pages/%.png
	mkdir -p $(@D)
	cp $< $@

static/electoral/%.jpg: pages/%.jpg
	mkdir -p $(@D)
	cp $< $@

static/electoral/%.gif: pages/%.gif
	mkdir -p $(@D)
	cp $< $@

fonts:
	mkdir -p static/electoral/fonts
	find ./pages/fonts -type f -name '*.otf' -exec sfnt2woff {} \;
	cp ./pages/fonts/*.woff ./static/electoral/fonts

lib:
	mkdir -p static/electoral/lib
	cp -r ./pages/lib/* ./static/electoral/lib

docs:
	mkdir -p static/electoral/
	cp -r ./pages/docs ./static/electoral/

pyfreeze:
	source pyenv/bin/activate
	pip freeze > requirements.txt
	deactivate

deploy:
	git subtree push --prefix static/electoral origin gh-pages

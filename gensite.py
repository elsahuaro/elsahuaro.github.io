from markdown import Markdown
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from markdown.inlinepatterns import InlineProcessor
from markdown.extensions import Extension
from markdown.blockprocessors import BlockProcessor
import xml.etree.ElementTree as etree
import re

class inlineMathProcessor( InlineProcessor ):
    def handleMatch( self, m, data ):
        # MathJAX handles all the math. Just set the uses_math flag, and
        # protect the contents from markdown expansion.
        self.md.uses_math = True
        return m.group(0), m.start(0), m.end(0)

class AsideBlockProcessor(BlockProcessor):
    RE_FENCE_START = r'^<-- *\n' # start line, e.g., `<<< `
    RE_FENCE_END = r'\n<--\s*$'  # last non-blank line, e.g, '<<<\n  \n\n'

    def test(self, parent, block):
        return re.match(self.RE_FENCE_START, block)

    def run(self, parent, blocks):
        original_block = blocks[0]
        blocks[0] = re.sub(self.RE_FENCE_START, '', blocks[0])

        # Find block with ending fence
        for block_num, block in enumerate(blocks):
            if re.search(self.RE_FENCE_END, block):
                # remove fence
                blocks[block_num] = re.sub(self.RE_FENCE_END, '', block)
                # render fenced area inside a new aside
                e = etree.SubElement(parent, 'aside')
                e.set("class", "left")
                self.parser.parseBlocks(e, blocks[0:block_num + 1])
                # remove used blocks
                for i in range(0, block_num + 1):
                    blocks.pop(0)
                return True  # or could have had no return statement
        # No closing marker!  Restore and do nothing
        blocks[0] = original_block
        return False  # equivalent to our test() routine returning False

class AsideRightBlockProcessor(BlockProcessor):
    RE_FENCE_START = r'^--> *\n' # start line, e.g., `>>> `
    RE_FENCE_END = r'\n-->\s*$'  # last non-blank line, e.g, '>>>\n  \n\n'

    def test(self, parent, block):
        return re.match(self.RE_FENCE_START, block)

    def run(self, parent, blocks):
        original_block = blocks[0]
        blocks[0] = re.sub(self.RE_FENCE_START, '', blocks[0])

        # Find block with ending fence
        for block_num, block in enumerate(blocks):
            if re.search(self.RE_FENCE_END, block):
                # remove fence
                blocks[block_num] = re.sub(self.RE_FENCE_END, '', block)
                # render fenced area inside a new aside
                e = etree.SubElement(parent, 'aside')
                e.set("class", "right")
                self.parser.parseBlocks(e, blocks[0:block_num + 1])
                # remove used blocks
                for i in range(0, block_num + 1):
                    blocks.pop(0)
                return True  # or could have had no return statement
        # No closing marker!  Restore and do nothing
        blocks[0] = original_block
        return False  # equivalent to our test() routine returning False

class AsideExtension(Extension):
    def extendMarkdown(self, md):
        md.parser.blockprocessors.register(AsideBlockProcessor(md.parser), 'aside-left', 175)

class AsideRightExtension(Extension):
    def extendMarkdown(self, md):
        md.parser.blockprocessors.register(AsideRightBlockProcessor(md.parser), 'aisde-right', 175)
        

class MathExtension(Extension):
    def __init__(self, *args, **kwargs):
        self.config = {
            'enable_dollar_delimiter':
                [False, 'Enable single-dollar delimiter'],
        }
        super(MathExtension, self).__init__(*args, **kwargs)

    def extendMarkdown(self, md):
        md.registerExtension(self)

        mathRegExps = [
            r'(?<!\\)\\\((.+?)\\\)',    # \( ... \)
            r'(?<!\\)\$\$.+?\$\$',      # $$ ... $$
            r'(?<!\\)\\\[.+?\\\]',      # \[ ... \]
            r'(?<!\\)\\begin{([a-z]+?\*?)}.+?\\end{\1}',
        ]
        if self.getConfig('enable_dollar_delimiter'):
            md.ESCAPED_CHARS.append('$')
            mathRegExps.append( r'(?<!\\|\$)\$.+?\$' ) # $ ... $
        for i, pattern in enumerate(mathRegExps):
            # we should have higher priority than 'escape' which has 180
            md.inlinePatterns.register(
                inlineMathProcessor( pattern, md ), f'math-inline-{i}', 185)

        md.uses_math = False
        self.md = md

    def reset(self):
        self.md.uses_math = False

def makeExtension(*args, **kwargs):
    return MathExtension(*args, **kwargs)

def build(src, tgt, tpl=None):
    print("Building %s into %s" % (src, tgt))
    if not src.exists():
        print("Source directory %s does not exist" % (src))
        return False
    if not tgt.exists():
        tgt.mkdir()
    if Path(src, "index.html").exists():
        tpl = Environment(loader=FileSystemLoader(searchpath=src)).get_template("index.html")
    md_paths = [f for f in src.iterdir() if f.is_file() and f.suffix == ".md"]
    dir_paths = [d for d in src.iterdir() if d.is_dir()]
    if not tpl:
        for path in md_paths:
            print("Missing template for %s" % (path))
    else:
        for path in md_paths:
            md_data = path.read_text(encoding="utf-8")
            md = Markdown(extensions=["meta", "extra", "codehilite", "markdown_checklist.extension",
                                      MathExtension(), AsideRightExtension(), AsideExtension()],
                          extension_configs={
                              "codehilite": {
                                  "guess_lang": False
                              }
                          },
                          output_format="html5")
            html = md.convert(md_data)
            meta = md.Meta
            data = {
                "pagetitle": meta.get("pagetitle", ["El Sahuaro"])[0],
                "title": meta.get("title", [None])[0],
                "subtitle": meta.get("subtitle", [None])[0],
                "section": html,
                "authors": meta.get("authors", []),
                "js_includes": meta.get("js_includes", []),
                "css_includes": meta.get("css_includes", [])
            }
            outname = meta.get("pagename", [path.name[:-len(path.suffix)]])[0]
            tpl.stream(data).dump(str(Path(tgt, outname+".html")))
    for next_src in dir_paths:
        next_tgt = Path(tgt, next_src.name)
        if not build(next_src, next_tgt, tpl):
            return False
    return True

if __name__ == "__main__":
    build(Path("pages"), Path("static"))

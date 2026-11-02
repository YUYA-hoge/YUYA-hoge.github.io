"""Bake CMS text into HTML so GitHub Pages also works without JavaScript."""
from pathlib import Path
import html
import json
import re

root = Path(__file__).resolve().parents[1]
content = json.loads((root / 'dist/content.json').read_text())
page = root / 'dist/index.html'
pattern = re.compile(r'(<([a-z][a-z0-9]*)\b[^>]*\bdata-content="([^"]+)"[^>]*>)(.*?)(</\2>)', re.S)

def render(match):
    key = match.group(3)
    value = content.get(key)
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f'CMS field {key} must contain text')
    return match.group(1) + html.escape(value) + match.group(5)

rendered, count = pattern.subn(render, page.read_text())
if not count:
    raise ValueError('No CMS fields found in HTML')
page.write_text(rendered)
print(f'Rendered {count} CMS fields')

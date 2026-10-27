#!/usr/bin/env python3
"""Envolve textos visíveis em t("...") nos arquivos de interface. Uso: i18n-envolver.py [--aplicar] arquivos..."""
import re, sys, os
APLICAR = "--aplicar" in sys.argv
arqs = [a for a in sys.argv[1:] if not a.startswith("--")]
LIT = re.compile(r'"((?:[^"\\\n]|\\.)*)"')
NAO_ANTES = re.compile(r'(class|classe|href|id|type|tipo|role|for|padrao|aba|icon|icone|cor|cenario|slug|chave|name|rel|accept|autocomplete|dataset|key|estilo|variante|motivo|inputmode|pattern|data-\w+|method|lang|target|loading|fill|stroke|viewBox|d|xmlns|preserveAspectRatio|transform|valor|value|status|evento|origem|tema|alinhar|align|unidade|formato|step|min|max)\s*:\s*$')
def visivel(s):
    if s in ('ArrowRight','ArrowLeft','Enter','MacIntel','Escape','Tab','T12:00:00') or s.startswith('input, '): return False
    if not re.search(r'[A-Za-zÀ-ÿ]', s): return False
    if "${" in s or re.match(r'^[MmLlHhVvCcQqAaZz]\s*[\d\-.]', s) or "sans-serif" in s or re.match(r"^(translate|rotate|scale|matrix|url)\(", s): return False
    if s.startswith(("./", "../", "#", "http", "var(", "data:", "/")) or "--" in s or "=>" in s: return False
    if re.fullmatch(r'[a-z0-9_\-\.:/ ]+', s): return False          # chaves, classes css, caminhos
    if re.fullmatch(r'[A-Z0-9_]+', s): return False                  # CONSTANTES
    if re.search(r'[À-ÿ…“”]', s): return True
    if re.match(r'[A-ZÀ-Ý]', s): return True
    if " " in s and len(re.findall(r'[a-zà-ÿ]{2,}', s)) >= 2: return True
    return False
total = 0
for arq in arqs:
    src = open(arq, encoding="utf-8").read()
    out, pos, n = [], 0, 0
    for linha in src.splitlines(keepends=True):
        if re.match(r'\s*(import|export \{|//|\*|/\*)', linha) or "console." in linha:
            out.append(linha); continue
        res, ult = [], 0
        for m in LIT.finditer(linha):
            antes = linha[:m.start()]
            s = m.group(1)
            if (re.search(r'(?<![\w.])(t|tr|tn)\($', antes.rstrip()) or NAO_ANTES.search(antes)
                or re.search(r'(?<![\w.])(querySelector\w*|getAttribute|setAttribute|addEventListener|removeEventListener|createElement\w*|import|classList\.\w+|matchMedia|getItem|setItem|removeItem|startsWith|endsWith|includes|split|join|replace|ir|router\.ir|icone|personagem|svgEl|s)\(\s*$', antes)
                or not visivel(s) or antes.count("`") % 2 == 1):
                continue
            # ignora chaves de objeto  "chave": valor
            depois = linha[m.end():]
            if re.match(r'\s*:', depois) and re.fullmatch(r'[\w\-]+', s): continue
            res.append(linha[ult:m.start()]); res.append(f'tr("{s}")'); ult = m.end(); n += 1
            if not APLICAR: print(f"{arq}: {s[:90]}")
        res.append(linha[ult:]); out.append("".join(res))
    novo = "".join(out)
    if n and APLICAR:
        if "from \"" in novo and "i18n/index.js" not in novo:
            prof = arq.count("/") - arq.index("js/") // 1 - 1 if False else os.path.relpath("js/i18n/index.js", os.path.dirname(arq))
            if not prof.startswith("."): prof = "./" + prof
            idx = novo.find("\nimport ")
            primeira = novo.find("import ")
            novo = novo[:primeira] + f'import {{ tr }} from "{prof}";\n' + novo[primeira:]
        open(arq, "w", encoding="utf-8").write(novo)
    total += n
print("TOTAL", total, file=sys.stderr)

#!/usr/bin/env sh

# aborta en caso de errores
set -e

# construye
npm run build

# navega a la carpeta de compilación
cd dist

git init
git add -A
git commit -m 'deploy'

# si está usando https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/https-github-com-JLlanten8/rick-and-morty/public.git master:gh-pages

# si está usando https://<USERNAME>.github.io/<REPO>
cd -
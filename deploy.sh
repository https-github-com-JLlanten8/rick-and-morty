#!/usr/bin/env sh
echo "Deploy..."

# aborta en caso de errores
set -e

# construye
npm run build

# navega a la carpeta de compilación
cd dist

git add -A
git commit -m 'deploy'

# si está usando https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/https-github-com-JLlanten8/rick-and-morty.git master:gh-pages

#imprime el mensaje de finalización y dame el url de github pages
echo "Deploy completado en https://https-github-com-jllanten8.github.io/rick-and-morty/public/"

# si está usando https://<USERNAME>.github.io/<REPO>
cd -
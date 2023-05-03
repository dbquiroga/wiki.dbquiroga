---
sidebar_position: 0
title: Git Básico
---
## Para crear una nueva rama:

```
git branch <nombre_nueva_rama>
```

:::note
Esta nueva rama se creara en base a donde estemos parados.
:::

## Para movernos a esa rama:

**`git checkout** <nombre_nueva_rama>`

## Para crear y moverme a esa nueva rama

**`git checkout -b** <nombre_nueva_rama>`

## Nomenclatura para nombrar una rama

`git checkout -b <tipo>/<numero historia>-descripcion-corta-de-la-rama`

`tipos: feature, bugfix, fix, hotfix, chore
 sintaxis numero historia: tt--`

## Para listar las ramas existentes tanto local como remoto

`git branch -a`

## Stash.
Entiendo que es como dejar guardado nuestro trabajo en una carpeta. Con este comando guardamos en una carpeta temporal los cambios que hayamos realizado

`git stash`

Puedes volver a aplicar los cambios de un stash mediante el comando. Al hacer *pop* del stash, se eliminan los cambios de este y se vuelven a aplicar en el código en el que estás trabajando

 `git stash pop`

Otra opción es volver a aplicar los cambios en el código en el que estás trabajando *y* conservarlos en tu stash mediante el comando. Esto resulta útil si quieres aplicar los mismos cambios de un stash en varias ramas.

 `git stash apply`

## para mergear de una rama a otra. abrir la rama donde quiero que se mergee otra 

`git merge %nombre rama que quiero mergear a mi rama actual%`

## Para mergear commits entre ramas

`git cherry-pick hash-del-commit`

## Para tener la rama up to date (para que se pare en el ultimo commit de la rama)

`git rebase
****`

## Para actualizar mi rama a otra rama

`git pull origin <nombre_rama>` 

`ej: git pull origin develop`

## Borrar todo y empezar de cero

git restore --staged .
git restore .
git checkout develop
git pull

## Ver los commits

`git log`

## ver los commits, en los logs, en una linea
```
git log --oneline
```
Ejemplo:
```
log --oneline
e56ba1f (HEAD -> master) Revert "Just a regular update, definitely no accidents here..."
52418f7 Just a regular update, definitely no accidents here...
9a9add8 (origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
836e5bf (origin/update-readme, update-readme) Updated readme for GitHub Branches
daf4f7c (origin/html-skeleton, html-skeleton) Updated index.html with basic meta
facaeae (gh-page/master) Merge branch 'master' of https://github.com/w3schools-test/hello-world
e7de78f Updated index.html. Resized image
5a04b6f Updated README.md with a line about focus
d29d69f Updated README.md with a line about GitHub
e0b6038 merged with hello-world-images after fixing conflicts
1f1584e added new image
dfa79db updated index.html with emergency fix
0312c55 Added image to Hello World
09f4acd Updated index.html with a new line
221ec6e First release of Hello World!
```

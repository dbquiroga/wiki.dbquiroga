---
sidebar_position: 1
title: Como subir un proyecto Git con SSH
---

Teniendo en cuenta que ya tengas SSH configuado. Para subir un proyecto a Git con SSH, puedes seguir los siguientes pasos:

### 1. Inicializa un repositorio Git en tu proyecto local:

```
git init
```

### 2. Agrega los archivos que deseas subir al repositorio:
```
git add .
```
### 3. Crea un commit con los cambios realizados:
```
git commit -m "Mi commit"
```
### 4. Agrega la URL del repositorio remoto usando SSH:
```
git remote add origin git@github.com:nombre-usuario/repo.git
```

### 5. Verifica que la URL del repositorio remoto fue agregada correctamente:
```
git remote -v
```

### 6. Sube los cambios al repositorio remoto en la rama principal (main o master):
```
git push --set-upstream origin master
```

:::note
Asegúrate de reemplazar nombre-usuario y repo con la información de tu repositorio. Además, verifica que tengas permisos para subir al repositorio y que hayas agregado tu clave SSH a tu cuenta de Git.
:::
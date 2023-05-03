---
sidebar_position: 2
title: Crear ontraseña SSH
---

### Abrir termina
Asegurate de tener el comando "ssh-keygen" disponible. Si no lo tienes, puedes instalarlo con el siguiente comando:
```
sudo apt-get install ssh-keygen
```

### Crea una nueva clave SSH
con el siguiente comando, reemplazando <correo-electrónico> con tu dirección de correo electrónico de GitHub:
```
ssh-keygen -t ed25519 -C "<correo-electrónico>"
```
Presiona Enter para aceptar la ubicación predeterminada del archivo de clave, o proporciona una ubicación personalizada.

Se te pedirá que ingreses una frase de contraseña. Si lo deseas, puedes agregar una contraseña para proteger tu clave SSH.

:::info
NO recomiendo hacer esto porque despues te pide esa clave
:::

### Agrega tu clave SSH a ssh-agent
Es un programa que maneja tus claves SSH. Inicia el agente SSH con el siguiente comando:
``` title= "bash"
eval "$(ssh-agent -s)"
```
Agrega tu clave privada a ssh-agent con el siguiente comando, reemplazando <ruta-a-la-clave-ssh> con la ubicación de tu clave SSH:
``` title= "csharp"
ssh-add <ruta-a-la-clave-ssh>
```

Ahora, copia la clave SSH pública al portapapeles con el siguiente comando:
``` title= "javascript"
xclip -sel clip < ~/.ssh/id_ed25519.pub
```

### Inicia sesión en tu cuenta de GitHub
Haz clic en tu avatar en la esquina superior derecha y luego haz clic en "Settings".

- En la barra lateral izquierda, haz clic en "SSH and GPG keys".

- Haz clic en "New SSH key" o "Add SSH key".

- Proporciona un título descriptivo para la clave en el campo "Title".

- Pega tu clave SSH pública en el campo "Key" y haz clic en "Add SSH key".

¡Listo! Ahora puedes usar tu clave SSH para autenticar con GitHub en lugar de tu nombre de usuario y contraseña.
---
sidebar_position: 0
title: Github Actions
---

## CI/CD
Servicio de integracion continua y entrega continua, para automatizar flujos de trabajos personalizados que se ejecutan automaticamente cuando se crean eventos especificos, ej hacer un pull.

:::info
Es necesario trabajar con yaml
:::

### Eventos
Acciones que activan la ejecucion de un flujo de trabajo. Pueden ser:
- Push
- Pull
- PR

### Workflow
Procesos automatizados que se definen en archivos yaml, estas compuestos por uno o más trabajos o Jobs.

### Jobs
Los trabajos son un conjunto de pasos que se ejecutan en un mismo entorno, como una maquina virtual o un contenedor docker. 

### Steps
Tareas individuales que se ejecutan en un trabajo como ejecutar un script o instalar una dependencia. 

## ¿Cómo se crea una Github action?
1. Ir a la pestaña Actions en tu repositorio.
2. Elegir de la lista de workflows preconfigurados segun lo que se quiera hacer. 
3. O elegir configuracion segun repositorio sugerido


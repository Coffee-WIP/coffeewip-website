# CoffeeWIP Website

La página web esta desarrollada en NextJS y el gestor de paquetes utilizados es NPM.

Para la definición de componentes, servicios, etc., se emplea functional programming evitando la creación de clases.

## Getting Started

En primer lugar es necesario instalar las dependencias del proyecto.

```bash
npm install
```

Y después lanzar el servidor local, que por defecto será accesible desde la url: [http://localhost:3000](http://localhost:3000). Para ello es necesario lanzar el siguiente commando:

```bash
npm run dev
```

## Docker version

Podemos montar una version de la web en un docker para tests.  
Para ello usaremos una imagen node:alpine.  
Pasos:  
* Instala **docker** en tu maquina. Esto se ha probado en un MacBook Pro corriendo macOS Catalina :wink: 
* Crea un directorio de proyecto (aqui se llama **coffee-mac**) y clona este repositorio 

```bash
 ~/Dockers/coffee-mac $ > git clone https://github.com/Coffee-WIP/coffeewip-website.git 
```
* El contenido de la web esta en **coffeewip-website**. Lanzamos el docker de manera que vea ese directorio

```bash
 ~/Dockers/coffee-mac $ > docker run --name coffee --hostname=coffee \
-d -p 3300:3000 \
-v `pwd`/coffeewip-website/:/usr/app \
-t node:alpine
```
* El docker se llama coffee :grin:. Vamos dentro de **coffee** y lanzamos la web

```bash
~/Dockers/coffee-mac $ > docker exec -it coffee /bin/sh
/ # 
/ # cd /usr/app/
/usr/app # npm install
/usr/app # yarn add --dev typescript @types/node
/usr/app # npm run dev
```
* Cuando todo haya acabado de compilar, apunta el explorador a la URL http://0.0.0.0:3300/. 
* Edita los archivos en **coffeewip-website** que los cambios se deberian ver en la URL de arriba :smiley:



# GrupoMax__PruebaTecnica
Prueba técnica para la empresa grupoMax realizado con react.js, node.js y MySQL.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_Para este proyecto se utilizo docker para lo cual los comandos necesarios son:_

```
docker pull mysql
docker run --name mymysql -e MYSQL_ROOT_PASSWORD=grupomax -e MYSQL_DATABASE=tasksdb -p 3305:3306 -d mysql
docker exec -it mymysql bash
mysql -u root --password
```

_La contraseña del usuario root es: grupomax_


_Finalizando para obtener datos del sistema o usarlos para una pequeña demo, con el siguiente comando se obtiene la lista completa de clientes_

```
http://localhost:4000/clients
```

## Imagen del Frontend 🎨

![CRM-grupomax-login](https://user-images.githubusercontent.com/59952134/183322797-a45211bb-1482-4b66-a440-6566c24bebb0.png)
![CRM-grupomax](https://user-images.githubusercontent.com/59952134/182994562-39016829-f6a4-4328-8e60-cda5c5f334a9.png)

![CRM-grupomax2](https://user-images.githubusercontent.com/59952134/183322830-416aa49c-88f1-46d2-a51f-741516a3a96f.png)

![CRM-grupomax3](https://user-images.githubusercontent.com/59952134/183322835-5def5f17-7c47-4fb5-a029-a58da1c9e427.png)


## Construido con 🛠️

_Las herramientas utilizadas fueron_

* [React.js](https://es.reactjs.org/docs/getting-started.html) - El framework web usado.
* [MySQL](https://dev.mysql.com/doc/) - La base de datos.
* [TailwindCSS](https://tailwindcss.com/docs/installation) - Para el diseño.

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Maximiliano Fallauto** - *Proyect Manager* - [Perfil Linkedin](https://www.linkedin.com/in/maximiliano-fallauto/)

# Evaluación final modulo 7

# Repositorio
https://github.com/AngelesCahill/sequelize-ev-final-modulo7

### Datos pg-user y pg-password

PG_USER='node_user' 

PG_PASSWORD='node_password'

## Crear usuario me y asignarle un rol
CREATE ROLE node_user WITH LOGIN PASSWORD 'node_password';

ALTER ROLE node_user CREATEDB;
## se crea la base de datos con el usuario me
\q

psql -d postgres -U me

CREATE DATABASE db_bootcamp

## Se crean las tablas
$ node ./scripts/createTables.js

## Se insertan datos en tabla bootcamp y user con bulkCreate

$ node ./scripts/insertBootcamps.js

Executing (default): INSERT INTO "bootcamp" ("id","title","cue","
description","created_at","updated_at") VALUES (DEFAULT,'Introduc
iendo El Bootcamp De React','10','React es la librería más usada 
en JavaScript para el desarrollo de interfaces','2023-08-08 13:28
:46.836 +00:00','2023-08-08 13:28:46.836 +00:00'),(DEFAULT,'Bootc
amp Desarrollo Web Full Stack','12','Crearás aplicaciones web uti
lizando las tecnologías y lenguajes más actuales y populares, com
o: JavaScript, nodeJS, Angular, MongoDB, ExpressJS','2023-08-08 1
3:28:46.836 +00:00','2023-08-08 13:28:46.836 +00:00'),(DEFAULT,'B
ootcamp Big Data, Inteligencia Artificial & Machine Learning','18
','Domina Data Science, y todo el ecosistema de lenguajes y herra
mientas de Big Data, e intégralos con modelos avanzados','2023-08
-08 13:28:46.836 +00:00','2023-08-08 13:28:46.836 +00:00') RETURN
ING "id","title","cue","description","created_at","updated_at"; 

$ node ./scripts/insertUsers.js

Executing (default): INSERT INTO "user" ("id","firstname","lastname","email","creaeated_at","updated_at") VALUES (DEFAULT,'Mateo','Díaz','mateo.diaz@correo.com','232023-08-08 13:34:33.148 +00:00','2023-08-08 13:34:33.148 +00:00'),(DEFAULT,'Sant',iago','Mejías','santiago.mejias@correo.com','2023-08-08 13:34:33.148 +00:00','200823-08-08 13:34:33.148 +00:00'),(DEFAULT,'Lucas','Rojas','lucas.rojas@correo.com'8-,'2023-08-08 13:34:33.148 +00:00','2023-08-08 13:34:33.148 +00:00'),(DEFAULT,'Farncundo','Fernandez','facundo.fernandez@correo.com','2023-08-08 13:34:33.148 +00:0080','2023-08-08 13:34:33.148 +00:00') RETURNING "id","firstname","lastname","emai",l","created_at","updated_at";

## RUTAS USER

### Mostrar todos los usuarios con sus bootcamps

http://localhost:3000/user

### Buscar un usuario por su id con su(s) bootcamp(s)

http://localhost:3000/user/findById/1

### Crear un usuario

http://localhost:3000/user/create/Angeles/Cahill/angeles.cahill@gmail.com

### Actualizar un usuario

http://localhost:3000/update/id/5/nombre/Maria de los angeles/apellido/Cahill/email/angeles.cahill@khipu.com

### Borrar un usuario

http://localhost:3000/deleteUserById/4

### Listar todos los bootcamps con sus respectivos usuarios

http://localhost:3000/bootcamps

### Crear un Bootcamp nuevo

http://localhost:3000/bootcamp/create/Front End VueJs/10/Realización de proyecto front end

### Agregar un Usuario a un Bootcamp

http://localhost:3000/addUserToBootcamp/idBootcamp/1/idUser/3

### Buscar un Bootcamp por id con su(s) usuario(s)

http://localhost:3000/bootcamp/findUserBootcampById/1


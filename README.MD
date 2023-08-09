## Evaluación final modulo 7

PG_USER='me' 
PG_PASSWORD='password'

## Crear usuario me y asignarle un rol
CREATE ROLE me WITH LOGIN PASSWORD 'password';
ALTER ROLE me CREATEDB;
## se crea la base de datos con el usuario me
\q
psql -d postgres -U me
CREATE DATABASE db_bootcamp

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


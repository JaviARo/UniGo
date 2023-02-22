# UniGo
## An application to makes clothes designs

![logo3](https://user-images.githubusercontent.com/95490801/220699520-ce9eb168-f8cd-4577-b904-bc0c6f263513.png)


This is a mobile application to makes designs usign a logo image that you upload to the app and a garment of a selection

## Index
- [Where does the need come from?](#Where-does-the-need-come-from)
- [What company is this app developed for?](#What-company-is-this-app-developed-for)
- [Principal idea](#Principal-idea)
- [Data model](#Data-model)
- [Use cases](#Use-cases)
- [User requeriments](#User-requeriments)
- [First design](#First-design)
- [Usability](#Usability)
- [Installation Manual](#Installation-Manual)
- [User Manual](#User-Manual)
- [Technology stack](#Technology-stack)
- [Technologies comparison](#Technologies-comparison)
- [Planning](#Planning)
- [Conclusions](#Conclusions)
- [References](#References)

## Where does the need come from?
Some customers that want to buy clothes, takes the decision of go shoping at clothing stores or maybe they navigate through internet searching designs on clothes of their choise, without success in finding what they were looking for.
This app can be the solution for their problem. Inside this, they can personalize their clothes, making a design that they will never find in any store, furthermore, this is also a big deal for institutions that want an easy way to design uniforms, have a collection of them, and their logos.

## What company is this app developed for?
The company that request me to develop this application is Central Uniformes. This is a part of a bigger app worked on group, that includes work types and orders. However, this app focused on the design part.

## Principal idea
The idea of this app is to make designs usign a garment, and a logo that you upload. You can move and set a size to the logo on the design, and choose a name to your new design.

## Data model
Our data model defines the structure of the database. It is dedicated to storing layout management for uniforms, and comprises four entities: users, images, designs and clothes.

We will describe the entities, the relationships between them and the attributes, as well as show the following graphs:

### Entity/Relationship diagram
![er](https://user-images.githubusercontent.com/95490801/220699966-919a8b4e-8d61-4f3a-87de-996222625813.png)

### UML Entity/Relationship diagram
![eruml](https://user-images.githubusercontent.com/95490801/220700094-52c3ec45-3de2-4173-b075-005df5af8fe2.png)

### Relational model
![modelor](https://user-images.githubusercontent.com/95490801/220700363-ab53a83c-a378-4721-a7a9-5dc218fdd340.png)

### Entities
User: The person who accesses the application.
User attributes:
- id: The unique autonumenic identifier of the user.
- dni: The identifier document number of the user.
- name: The real name of the user.
- username: The nickname the user have in the application.
- password: The secret key the user needs to enter on the app.
- email: The email account of the user.
- type: A key that identifies the user as customer or administrator.


Image: The logo that is going to be over the garment.
Image attributes:
- id: The unique autonumenic identifier of the image.
- name: The name of the image the user upload to the app.
- img: The image file of the logo.


Clothes: The base garment needed to make a design.
Clothes attributes:
- id: The unique autonumenic identifier of the garment.
- name: The name the administrator gaves to the garment.
- img: The image file of the garment.


Design: The properties that the image have over the garment.
Design attributes:
- id: The unique autonumenic identifier of the design.
- name: The name the customer gaves to the design.
- size: The height of the logo on the design.
- position: The coordinates the logo have in the design.
- favourite: A field that indicates if the design is favourite for the user.

### Relationships
User-Image(1-n): A user can store some images and an image is stored just for one user.
User-Design(1-n): A user make some desing and an design is made just for one user.
Image-Design(1-n): An image can be used to make multiple design, but a design have just one logo image.
Clothes-Design(1-n): A garment is needed to make as many design the users want, but a design have just one garment.

### Restrictions
Every single foreing key of the different tables aren't nullnable, since all relationships are 1 mandatory to many optionals. User doesn't need to have images or designs, but images and designs are always associated with a user. Clothes and images can be used or not to make designs, nonetheless, a design can be created just if it has a logo image an a garment.

### Database system
The database management system consists of a MySQL database, which we can access with our Laravel application through the Eloquent ORM. This not only allows us to obtain, introduce, modify and delete data thanks to the controllers, but we can also create the tables with their entities and foreign keys through migrations.

### ERS Description
The software requirements specification of our program includes a series of possible actions that can be carried out by two types of user: client and administrator.
Both users can log in, log out and register. The client can create, delete and modify designs, which are based on images that the client adds (and can delete) and clothing items that the administrator adds, modifies and deletes.

## User requeriments
- R1: The user app is for smartphones and the administrator app is for desktop.
- R2: User must sing in with a username and password to access both apps.
- R3: The information on the app is displayed in different interfaces.
  - R3.1: The customers have access to their personal information, their design, their logo images and all clothes. 
    - R3.1.1: They can update their personal information at user screen.
    - R3.1.2: They can create a design after select a logo and a garment.
    - R3.1.3: When they are going to delete a design, the app display an advice.
  - R3.2: The administrator can look at every record.
    - R3.2.1: They can add and delete clothes, and delete other users.

- R4: For every record the user want to delete, an advice ask to delete it.
- R5: If the user tries to log in or register with invalid fields they will be noticed.
- R6: The user must repeat his/her password to register.

## Use cases
Every user can log in, log out and register on the app. The cursomer can create designs and add images. The administrator can create and delete clothes.

![usecase](https://user-images.githubusercontent.com/95490801/220703106-1e44e674-b7f2-43f5-aa1d-1f1a84adccf7.png)

## First design
You can encounter the prototype of this app into this link: https://www.figma.com/file/d1z7dtQTMbHmqv1NsdMZlh/Uniforms?node-id=8%3A27&t=MfgU0m7E0Nk2Vsva-1

## Usability
- It is an elegant application in its design, homogeneous in the elements that are presented in each interface and with soft and visible colors as can be seen in the following images:

![2](https://user-images.githubusercontent.com/95490801/220703330-f8359eae-43ec-437e-8a68-bc351a4e011f.png)
![5](https://user-images.githubusercontent.com/95490801/220703267-b9ad14a4-8768-4353-865c-0aef6eca614f.png)
![14](https://user-images.githubusercontent.com/95490801/220703302-5b8f4452-c19c-41d9-ba91-97487e647a99.png)


- You can also look at the icons for the different options on the app, these are intended to avoid element overload. These buttons being present and visible at all times within the application, being easy to the user to access the different screens.

![11](https://user-images.githubusercontent.com/95490801/220703404-edbee3bd-7be0-4952-ac58-43adb504a272.png)

- It is a usable application due to the fact that it has validations in the login and registration fields.

![validationregister](https://user-images.githubusercontent.com/95490801/220704337-0b594b67-8cd3-43ef-bab6-6937f08b225a.png)

- It contains feedback items. An example of this would be that when we want to delete a design, a warning appears to confirm if we really want to delete it.

![12](https://user-images.githubusercontent.com/95490801/220704390-f4d7c50c-fa8d-4351-b9f5-dcf1e5f5745b.png)

- The chosen color palette tries to be elegant and user-friendly, as well as to unify a brand identity. The distribution of the colors has been made in such a way that there is a contrast between the interactive elements and with the texts for their legibility, as well as gradients, trying to give a more natural experience.

![paleta de colores](https://user-images.githubusercontent.com/95490801/220704539-91219593-156c-44c8-87ce-334b6b480fc5.png)

- Two different text fonts have been selected for the application: Raleway and Josefin Sans. The first one is used for most text in the application, being a legible font with sufficient width and size and without much decoration, being a fairly clean font. The second one is used mainly for the UniGo name, despite also being a fairly legible font, I think it's a bit more striking and suitable for titles.

![21](https://user-images.githubusercontent.com/95490801/220704851-0a7ed9a9-ef2b-4896-b2b3-a8461645c898.png)

- There are always three icons present in every interface, being the app logo to go to designs screen, gears for the configuration screen, and an alert icon for the help system. These icons are on the header and footer of the app, trying not to be intrusive (on home, register, and sign in screens there is just the logo icon to return to home screen). Furthermore, the items of designs screen have also two icons: a heart that indicates if the design is favourite and the trash icon to delete the design.

![20](https://user-images.githubusercontent.com/95490801/220704911-467eefeb-d7c8-49ea-9671-a7bf52de8647.png)
![22](https://user-images.githubusercontent.com/95490801/220704982-697c324a-ec15-4748-99f3-fc3ef7584861.png)

- The elements on the screen are displayed symmetrically, with enough space between them and respecting the space of the header and footer.

![6](https://user-images.githubusercontent.com/95490801/220705044-eeae34bb-8e5e-409d-ada6-ab4f199fc05f.png)

- There are no long texts in the application, most of the texts are found in buttons, which briefly indicate what they do.

![10](https://user-images.githubusercontent.com/95490801/220705139-d96429c1-c68d-4947-80de-e5e9eacdfc43.png)
![13](https://user-images.githubusercontent.com/95490801/220705154-f6af7ebc-a9da-4cab-b10d-4c1b600d40ec.png)

- For security, the user's information can only be obtained if the user is logged in and for this purpose a personal access token is used, which is stored in the browser's local storage and is removed when the session is closed.

![token1](https://user-images.githubusercontent.com/95490801/220705586-7a0a1f84-a458-478e-a089-87238d17e8be.png)
![token2](https://user-images.githubusercontent.com/95490801/220705598-c684a185-2ba4-4aa9-a7f9-ad038094f01f.png)
![token3](https://user-images.githubusercontent.com/95490801/220705613-b3af843d-4299-4eb5-9c20-d050ce275385.png)

- The app's media elements focus on images for clothing items, logos and design, as well as the home screen background image.

![6](https://user-images.githubusercontent.com/95490801/220705728-84b4ed1c-df4b-4731-a7c5-5bf451c803c6.png)
![9](https://user-images.githubusercontent.com/95490801/220705739-0835edf7-21e2-4f97-a8dd-a54691e7bab8.png)
![10](https://user-images.githubusercontent.com/95490801/220705768-b392cd48-36ca-42be-b4c1-e9d0ab36a264.png)
![2](https://user-images.githubusercontent.com/95490801/220705777-6b7f1069-8697-4239-92c2-5c0d70f70239.png)

## Installation Manual
First of all you may have the following items to run the application.

### Prerequisites
- A computer with an operative system
- Node.js
- XAMPP, WAMP or Laragon (I highly recommend XAMPP). These programs contains PHP, and apache server, the phpmyadmin service with a MySQL database management system.
- Composer
- Visual Studio Code (recomended to look at the code)
- Git bash is highly recommended
When you install XAMPP, WAMP or Laragon you must edit the system environment variable called Path to add the route of PHP of the technology package you will use. When this step is done, restart the computer.

![var1](https://user-images.githubusercontent.com/95490801/220707905-a44cb673-8974-455c-9e2a-015f881e2d20.png)

![var2](https://user-images.githubusercontent.com/95490801/220707918-444c80e7-3c29-4290-b534-cf0629960eed.png)
![var3](https://user-images.githubusercontent.com/95490801/220707922-efe855a1-ab37-4e86-8bfd-9cf7c482d908.png)
![var4](https://user-images.githubusercontent.com/95490801/220707928-2de3b7d7-d176-4638-8cf2-a4df0520728d.png)


### To install the aplication
Open a terminal and clone this project on a folder of your choice with this command:
```
git clone https://github.com/JaviARo/UniGo
```
Now change the folder to backend and install composer on the project
```
cd backend
composer install
```

Then clone the .env.example file
```
cp .env.example .env
```
You can change its properties like the port you use for MySQL, the database name, the database username, and your password.

And run the migrations
```
php artisan migrate
```

*You can refresh or delete the migrations with the following commands

```
php artisan migrate:refresh
php artisan migrate:rollback
```

Now change the folder to frontend and install the node modules:
```
cd ../frontend
npm install
```

And then to launch the app you need to inicialize the servers and two command palettes to work simultaneously one of them in the backend folder, and the other one in the frontend folder.

In XAMPP/WAMP/Laragon:
Start Apache and MySQL servers

![xamppimg](https://user-images.githubusercontent.com/95490801/220706856-2884250b-6752-4a52-87dc-bfdd132343c9.png)

In backend:
```
php artisan serve
```

In frontend:
```
npm start
```

For the frontend_admin the steps are the same as the ones for frontend.

## User Manual
### Index
- [How to use UniGo?](#How-to-use-UniGo)
- [Control menu](#Control-menu)
- [How can I make a design?](#How-can-I-make-a-design)
- [How did I change my profile data?](#How-did-I-change-my-profile-data)
- [How can I get more help?](#How-can-I-get-more-help)

### How to use UniGo?
To use this application you must register on it. So, first of all, enter the application, and press the text "Registrarse". Then you should fill the fields with your data, and the press again the text "Registrarse".

![1](https://user-images.githubusercontent.com/95490801/220697558-2aac7c1f-246b-46b8-9e10-5ccfb9f6781a.png)
![2](https://user-images.githubusercontent.com/95490801/220697599-06dca80a-655e-41dd-8271-4acef553e905.png)
![3](https://user-images.githubusercontent.com/95490801/220697631-16aa7ac3-2652-4c8d-9c2e-4a12d2035e9b.png)

Then you can access with your username and password in "Iniciar sesión"

![4](https://user-images.githubusercontent.com/95490801/220697653-1915b0ae-cd21-4024-93db-e49dca87d73d.png)


### Control menu
In every screen inside the app you have three buttons, the top left button is to access the help system, the top right to access the configuration, and the bottom button is for return to designs page.

![20](https://user-images.githubusercontent.com/95490801/220698279-bea3e2ac-c08d-4669-885b-46c063ef0493.png)


### How can I make a design?
Make a design is very easy, first you have to press the button "Crear diseño" and select a garment. Then you have to press the button "Seleccionar archivo". 

![5](https://user-images.githubusercontent.com/95490801/220698496-d21d9ad1-50bb-4c5b-b449-7ec48f4b4f68.png)
![6](https://user-images.githubusercontent.com/95490801/220698512-4b07f892-e96e-488f-b9c0-7594efab49e8.png)
![7](https://user-images.githubusercontent.com/95490801/220698521-e4d94918-16b8-4dbd-b08a-b534ed10351b.png)

Once here you might add a logo pressing "Subir foto", and then select it.

![8](https://user-images.githubusercontent.com/95490801/220698539-475585e3-5aa7-4620-821b-b9b8c9758bca.png)
![9](https://user-images.githubusercontent.com/95490801/220698550-4d8e6eb6-a564-4053-89b5-acf1cf3cfaa5.png)

To store the design you have to fill the design name, select the size and position, then press "Guardar Cambios".

![10](https://user-images.githubusercontent.com/95490801/220698594-923a59d0-3389-4a54-ad60-2abdc305f802.png)
![11](https://user-images.githubusercontent.com/95490801/220698623-dde50400-f75f-42bd-9a80-05d53cc0455e.png)


### How did I change my profile data?
For changing your personal data you have to press the gears at the top of the screen, then press "Ver datos de usuario".

![13](https://user-images.githubusercontent.com/95490801/220698766-93aacc54-1a81-4a45-acdf-7d94766ead02.png)

Once there you have to touch the "Editar perfil" button, press the fields you want to change, type the values and touch the "Confirmar cambios" button.

![14](https://user-images.githubusercontent.com/95490801/220698804-8f26a966-9eab-4eb4-ade8-1edfed1a5a95.png)
![15](https://user-images.githubusercontent.com/95490801/220698823-8d36005e-75fd-4c2c-afc2-3d6e4bca9a15.png)
![19](https://user-images.githubusercontent.com/95490801/220698834-ef5ecd62-81d3-4b5a-95d9-f9d83c5edb75.png)

### How can I get more help?
To get more help you can access to the help system clicking the top left button as was mentioned before.

## User help inside the application
To access the user help system in the app you should press the top left button when you log in. And then you have access to help, with index, context and a search bar

![20](https://user-images.githubusercontent.com/95490801/220709176-49551788-6ef0-4e10-ae4b-30de4a20fe7e.png)
![16](https://user-images.githubusercontent.com/95490801/220709196-770f2763-5feb-40d1-9a54-727df604064a.png)
![17](https://user-images.githubusercontent.com/95490801/220709200-4b7dfef3-db4d-4d99-b3fe-e4cd65c3ec22.png)
![18](https://user-images.githubusercontent.com/95490801/220709244-b419abf0-ea58-49a0-9dc8-57ece28e36a4.png)

## Technology stack
The stack I used for this proyect is 
- Javascript with the ReactJS framework to make the frontend pages
- PHP with Laravel framework, and Eloquent ORM to make the API that connect the front page to database
- MySQL as the database

## Technologies comparison
### Frontend
We can compare the ReactJS framework with another popular framework like Angular
- React is simpler and more composable than Angular
- The development is faster
- Allows us to use 3rd party libraries instead of Angular
- The React code isn't that clean
- React uses JavaScript, that is less efficient than TypeScript, used by Angular
- React have less scalability

### Backend
Let's compare Laravel framework with Symfony
- Laravel already comes with a standardized set of APIs that works to cache views, whereas symfony caches views and source code by default
- Laravel uses Eloquent while Symfony uses Doctrine for its data processing. In the first, it is not necessary to declare fields when migrating a database. In Symfony, the database transfer is automatic, but the developer has to identify the particular fields in the code.
- Laravel has a worse maintenance than Symphony

### Database
For the database I'm going to compare MySQL with PostgreSQL
- MySQL isn’t as fully SQL-compliant as PostgreSQL, which does support all of the sub-queries, meanwhile MySQL does not support several sub-queries like “LIMIT” or “ALL"
- MySQL support less languages than PostgreSQL
- MySQL is generally known to be faster with read-only commands at the cost of concurrency, while PostgreSQL works better with read-write operations, massive datasets, and complicated queries
- MySQL is a purely relational database, whereas PostgreSQL is an object-relational database

## Planning
For my personal organization in this project I slightly used the app Trello.

https://trello.com/b/5iwR27nM/

## Conclusions
From my point of view, this project was extensive, I have several difficulties trying to put in practise the ideas I had, for time issues I had to cut a lot of things, and didn't put in practice some others. The harder thing for me was planning for this proyect. Although, I notice that now I am much more capable coding than before. Moreover, I have taken a liking to it more, especially in the design part and despite the adversities I am proud of the result of the application.

## References

https://laravel.com/docs/9.x
A lot of https://stackoverflow.com/ posts

### Videos
https://www.youtube.com/watch?v=dyQLsQm1EtI
https://www.youtube.com/watch?v=JRUOeMkwkIo
https://www.youtube.com/watch?v=rLoWMU4L_qE
https://www.youtube.com/watch?v=_aj_adg1jeI
https://www.youtube.com/watch?v=2pppMAtIlro
https://www.youtube.com/watch?v=YRh7sYrxxM8
https://www.youtube.com/watch?v=E5ANuFo-Wno
https://www.youtube.com/watch?v=Vb9BPPlgfPU
https://www.youtube.com/watch?v=tFr0Vg1q9Eg
https://www.youtube.com/watch?v=xBQhGg_jmPY
https://www.youtube.com/watch?v=ZInJ40iyi7E
https://www.youtube.com/watch?v=Qp-fC9zXyJ4
https://www.youtube.com/watch?v=amwXrsHxoIg
https://www.youtube.com/watch?v=IgcyC30_6zE
https://www.youtube.com/watch?v=e9mZYHMVGlk
https://www.youtube.com/watch?v=C4vQ-nSNAgA
https://www.youtube.com/watch?v=0TTa5Ulmgds

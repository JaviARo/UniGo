UniGo
An application to makes clothes designs

This is a mobile application to makes designs usign a logo image that you upload to the app and a garment of a selection

Where does the need come from?
Some customers that want to buy clothes, takes the decision of go shoping at clothing stores or maybe they navigate through internet searching designs on clothes of their choise, without success in finding what they were looking for.
This app can be the solution for their problem. Inside this, they can personalize their clothes, making a design that they will never find in any store, furthermore, this is also a big deal for institutions that want an easy way to design uniforms, have a collection of them, and their logos.

What company is this app developed for?
The company that request me to develop this application is Central Uniformes. This is a part of a bigger app worked on group, that includes work types and orders. However, this app focused on the design part.

Principal idea
The idea of this app is to make designs usign a garment, and a logo that you upload. You can move and set a size to the logo on the design, and choose a name to your new design.

Data model
Our data model defines the structure of the database. It is dedicated to storing layout management for uniforms, and comprises four entities: users, images, designs and clothes.


We will describe the entities, the relationships between them and the attributes, as well as show the following graphs:

Entity/Relationship diagram

Entities:
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
- id: The unique autonumenic identifier of the design.
- name: The name the customer gaves to the design.
- size: The height of the logo on the design.
- position: The coordinates the logo have in the design.
- favourite: A field that indicates if the design is favourite for the user.

Relationships:
User-Image(1-n): A user can store some images and an image is stored just for one user.
User-Design(1-n): A user make some desing and an design is made just for one user.
Image-Design(1-n): An image can be used to make multiple design, but a design have just one logo image.
Clothes-Design(1-n): A garment is needed to make as many design the users want, but a design have just one garment.

Restritions:
Every single foreing key of the different tables aren't nullnable, since all relationships are 1 mandatory to many optionals. User doesn't need to have images or designs, but images and designs are always associated with a user. Clothes and images can be used or not to make designs, nonetheless, a design can be created just if it has a logo image an a garment.

The database management system consists of a MySQL database, which we can access with our Laravel application through the Eloquent ORM. This not only allows us to obtain, introduce, modify and delete data thanks to the controllers, but we can also create the tables with their entities and foreign keys through migrations.

The software requirements specification of our program includes a series of possible actions that can be carried out by two types of user: client and administrator.
Both users can log in, log out and register. The client can create, delete and modify designs, which are based on images that the client adds (and can delete) and clothing items that the administrator adds, modifies and deletes.

User requeriments

Use cases
Every user can log in, log out and register on the app. The cursomer can create designs and add images. The administrator can create and delete clothes.

First design
You can encounter the prototype of this app into this link: https://www.figma.com/file/d1z7dtQTMbHmqv1NsdMZlh/Uniforms?node-id=8%3A27&t=MfgU0m7E0Nk2Vsva-1

Usability
It is an elegant application in its design, homogeneous in the elements that are presented in each interface and with soft and visible colors as can be seen in the following images:

You can also look at the icons for the different options on the app, these are intended to avoid element overload. These buttons being present and visible at all times within the application, being easy to the user to access the different screens.

It is a usable application due to the fact that it has verifications in the login and registration fields.

It contains feedback items. An example of this would be that when we want to delete a design, a warning appears to confirm if we really want to delete it.

The chosen color palette tries to be elegant and user-friendly, as well as to unify a brand identity. The distribution of the colors has been made in such a way that there is a contrast between the interactive elements and with the texts for their legibility, as well as gradients, trying to give a more natural experience.

Two different text fonts have been selected for the application: Raleway and Josefin Sans. The first one is used for most text in the application, being a legible font with sufficient width and size and without much decoration, being a fairly clean font. The second one is used mainly for the UniGo name, despite also being a fairly legible font, I think it's a bit more striking and suitable for titles.

There are always three icons present in every interface, being the app logo to go to designs screen, gears for the configuration screen, and an alert icon for the help system. These icons are on the header and footer of the app, trying not to be intrusive (on home, register, and sign in screens there is just the logo icon to return to home screen). Furthermore, the items of designs screen have also two icons: a heart that indicates if the design is favourite and the trash icon to delete the design.

The elements on the screen are displayed symmetrically, with enough space between them and respecting the space of the header and footer.


There are no long texts in the application, most of the texts are found in buttons, which briefly indicate what they do.

For security, the user's information can only be obtained if the user is logged in and for this purpose a personal access token is used, which is stored in the browser's local storage and is removed when the session is closed.

The app's media elements focus on images for clothing items, logos and design, as well as the home screen background image.

Installation Manual
First of all you may have the following items to run the application.
Prerequisites:
- A computer with an operative system
- Node.js
- XAMPP, WAMP or Laragon (I highly recommend XAMPP). These programs contains PHP, and apache server, the phpmyadmin service with a MySQL database management system.
- Composer
- Visual Studio Code (recomended to look at the code)
- Git bash is highly recommended
When you install XAMPP, WAMP or Laragon you must edit the system environment variable called Path to add the route of PHP of the technology package you will use. When this step is done, restart the computer.

To install the aplication:
Open a terminal and clone this project on a folder of your choice with this command:
git clone https://github.com/JaviARo/UniGo
Now change the folder to backend and install composer on the project
cd backend
composer install

Then clone the .env.example file
cp .env.example .env
You can change its properties like the port you use for MySQL, the database name, the database username, and your password.

And run the migrations
php artisan migrate

*You can refresh or delete the migrations with the following commands

php artisan migrate:refresh
php artisan migrate:rollback

Now change the folder to frontend and install the node modules:
cd ../frontend
npm install

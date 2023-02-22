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

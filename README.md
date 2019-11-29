# Jeddah Malls
![GitHub Logo](https://i.ibb.co/C1FX5tW/Screenshot-from-2019-11-28-08-25-14.png)
## Description
The Idea is a Website which a user can use to navigate all Malls in Jeddah and can arrange to book a stylist to help him around on Shooping
### Technical Used
The website is connected to our online Database on MongoDb which all user data is stored and booking data as well, an Admin can add malls with store and edit a pleased.
Full Stack MERN website
- MongoDB, Mongoose
- Express
- REACT
- Node.js
### Wireframes
![Wireframe](https://i.ibb.co/TY8LKG7/Screenshot-from-2019-11-28-08-50-25.png)
Booking a Stylist by User
![Wireframe](https://i.ibb.co/tLnZ2NZ/Screenshot-from-2019-11-28-08-34-57.png)
### User Stories
Our Website is Deticated for Travels and Locals to navigate all Malls in Jeddah based on Persona "Lamya"
![Persona](https://i.ibb.co/47qJpsg/Screenshot-from-2019-11-28-08-28-52.png)
![problem](https://i.ibb.co/Y87X8Y2/Screenshot-from-2019-11-28-08-29-22.png)
### Planning and Development Process
At first we divided work depending on skills and team members choice. At BackEnd Hisham and Midhat planned the Database and CRUD system with routing, Wejdan did most of  the  Front End for the Website and Styling with Functionality based on the BackEnd, Abeer did styling , Israa did Login and Signup pages design and store details page and functionality, Hisham did integration between backend and front End codes, and as Team Lead for Project.
## Team Roles
- FrontEnd: Wejdan,
- FrontEnd: Israa,
- FrontEnd: Abeer,
- BackEnd: Midhat,
- BackEnd: Hisham.
### Unsolved problems
## 3D Map inside Mall, Money Transcations Between User and Stylist
## Acknowledgments
Thanks to UX/UI Team 4 for creating the project and researching the benefits of the project to travelers.
Thanks to our Lead Instructor at GA Mr. Ebere and IAs "Atheer, Yasir, Ahmed" for all their help!
## Packages Used
- Mongoose
- BCrypt
- JsonWebToken
- Axios
- cookie-parser
- semantic-ui-react
- react-bootstrap
- react-datepicker
- react-datetime-picker
- react-bootstrap
- react-admin
## File structure
#### `client` - Holds the client application
- #### `src`
  - #### `components` - This folder holds all of the different components that will make up our views
  - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
  - #### `App.js` - This is what renders all of our browser routes and different views
  - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
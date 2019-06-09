# Task-Manager-API

This is simple API that enables a logged in user to manage list of tasks via HTTP Requests. The API provides functionalities like
* Create a Task
* Read a Task
* Update a Task
* Delete a Task
* Get a list of all tasks sorted by
* Creation Time (ascending or descending)
* Complete or Incomplete
* Upload Avatar Picture
* Update account details
* Delete Account  

**To run the API directly from server, use [Postman](https://www.getpostman.com/downloads/) and simply use the follwoing url with various routes as listed below**
https://rish-task-manager-api.herokuapp.com/{route}

## Prerequisites
* [NodeJS](https://nodejs.org/) required  
* [SendGrid](https://sendgrid.com/) Key
## Installation
Install all the dependencies by running the following command from the root directory  

`npm install`
## Setup
1. Create a folder `config`  
1. Create a file `dev.env` inside `config`  
1. Paste the following code inside it  
`PORT=3000`  
`SENDGRID_API_KEY=`_YOUR KEY_  
`JWT_SECRET=`_YOUR SECRET_  
`MONGODB_URI=mongodb://127.0.0.1:27017/task-manager-api`

1. Create a file `test.env` inside `config`  
1. Paste the following code inside it 
`PORT=3000`  
`SENDGRID_API_KEY=`_YOUR KEY_  
`JWT_SECRET=`_YOUR SECRET_  
`MONGODB_URI=mongodb://127.0.0.1:27017/task-manager-api-test` 
## Start Project
`npm dev`
## Test Project 
`npm test`
## Routes
### Routes for users
* **Signup User**  
**`/users`** => POST route. Provide `name` required, `email` required, `password` required in body.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Login User**  
**`/users/login`** => POST route. Provide `email` and `password` in body.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

For all the following routes, set **Headers**  
KEY: `Authorization`  
VALUE: `Bearer token`  
Replace `token` with the token value obtained after Login or Signup request

* **Logout User**  
**`/users/logout`** => POST route. Log out from currently logged in session (from current device)

* **Logout from All**  
**`/users/logoutAll`** => POST route. Log out from all logged in sessions (from all device)

* **Read Profile**  
**`/users/me`** => GET route.

* **Update User**  
**`/users/me`** => PATCH route. Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`  

  Provide any or all of the following in the body
    * name
    * email
    * password
    * age  



* **Upload Avatar**  
**`/users/me/avatar`** => POST route. In Postman, set **Body** to _from-data_ with KEY: `avatar` type File and VLAUE: select a image file of size less than 1 MB
* **Delete Avatar**  
**`/users/me/avatar`** => DELETE route. Deletes avatar picture from the user's account

* **Delete User Account**  
**`/users/me`** => DELETE route. Delete the users account and all the tasks associated with it

### Routes for tasks
* **Create Task**  
**`/tasks`** => POST route. Provide _String_ `description` (required) and _Boolean_ `completed` (optional).  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Read a Task**  
**`/tasks/:id`** => GET route. `id` of a task is obtained while creating or updating a task  

* **Read all Tasks**  
**`/tasks`** => GET route. Simply fetch all task.  

  **Query Parameters**
  * `completed` optional   
   Provide _Boolean_ value to get list of all task that match the completion criteria
  * `sortBy` optional  
   Provide `createdAt:asc` to get list of tasks in ascending order of their creation time or `createdAt:desc` to get list 
   of tasks in descending order of their creation time  
  * `limit` optional  
   Provide _Integer_ value. Set `limit` to get a given number of tasks out of total number of tasks
  * `skip` optional  
   Provide _Integer_ value. Set `skip` to skip a given number of tasks from the top

* **Update Task**  
**`/tasks/:id`** => PATCH route.  `id` of a task is obtained while creating or updating a task. Provide either or both of the parameters _String_ `description` or _Boolean_ `completed`.  
Set **Headers**  
KEY: `Content-Type`  
VALUE: `application/json`

* **Delete Task**  
**`/tasks/:id`** => DELETE route. `id` of a task is obtained while creating or updating a task.
## Dependencies
* [@sendgrid/mail](https://sendgrid.com/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongodb](https://www.npmjs.com/package/mongodb)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [multer](https://www.npmjs.com/package/multer)
* [sharp](https://www.npmjs.com/package/sharp)
* [validator](https://www.npmjs.com/package/validator)

## Development Dependencies
* [env-cmd](https://www.npmjs.com/package/env-cmd)
* [jest](https://www.npmjs.com/package/jest)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [supertest](https://www.npmjs.com/package/supertest)









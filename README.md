<h1 align="center">Joia</h1>

![Badge](https://img.shields.io/badge/GitHub-Pro%20%20%20-orange) &nbsp; <b><i>Joia</i></b> © 2021 All Rights Reserved.  ![Badge](https://img.shields.io/badge/License-APACHE%202.0-blue) All material must be cited or credited, when using material.

## Table of Contents
* [Description](#Repository-Description)
* [Usage Information](#Usage-Information)
* [Authors](#Authors)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Installation Instructions](#Installation-Instructions)
* [Development Instructions](#Development-Instructions)
* [Application Layout](#Application-Layout)
* [License](#License)


## Description
Joia, pronounced as "Joy-ah," means gem or jewel, is a platform that connects art enthusiasts directly to artists. The application allows the artists to create an account and post their artworks to potential buyers and allows buyers to contact artists directly through email.

The application was built with React, NodeJS, and other npm packages such as JWT, Bcrypt, Multer, and Mongoose. The user data and artworks stores on MongoDB.

## Usage Information
This project can be used for projects, non-profit organizations, academic clubs; and much more!  Not for commercial use, unless granted by the authors.

## Authors
<p align="center">
  <a href="https://github.com/con0fav"><img src="./client/public/media/Connor.jpeg" height="120" width="120"/></a>&nbsp;&nbsp;<a href="https://github.com/rattanakleng"><img src="https://ca.slack-edge.com/T01ASRJ804E-U01B4P3B4ET-4001d229d6c3-512" height="120" width="120"/></a>&nbsp;&nbsp;<a href="https://github.com/YouFarted"><img src="https://ca.slack-edge.com/T01ASRJ804E-U01BCQDU2EA-0800093131a2-512" height="120" width="120"/></a>&nbsp;&nbsp;<a href="https://github.com/supercodingninja"><img src="./client/public/media/FT.jpeg" height="120" width="120"></a>
</p>

<p align="left">
  Select images above to visit the author's GitHub Profile. The names following images left to right are: Connor Favero, Rattanak Leng, Andrew Olson, and Frederick Thomas.
</p>


## Contribution Guidelines
I hope you enjoy this repository, and the application's link, given above and below (I love developing new projects).  Please read and follow license instructions.  Thank you for viewing!

## Installation Instructions
1.  Ensure that your application includes the require dependencies, by typing the command in your integrated terminal
    -   npm install inquirer
    -   sass source/stylesheets/index.scss build/stylesheets/index.css
    -   npm install -g sass
    -   brew install sass/sass/sass
    -   TBD on "Require"...
    -   Install R Markdown for Visual Studio Code [IDE chosen](https://docs.microsoft.com/en-us/visualstudio/rtvs/rmarkdown-with-r-in-visual-studio?view=vs-2017)
        1. Close Visual Studio.
        2. (One time only) Install pandoc from pandoc.org.
            - brew install pandoc
        3. Restart Visual Studio, which should pick up the [pandoc](https://pandoc.org/installing.html) installation.
        4. Install the knitr and rmarkdown packages, which you can do from the interactive window:
            -   install.packages("knitr")
            -   install.packages("rmarkdown")
2.  Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.
3.  Run “node [fileName].js”

## Development Instructions
1. After cloning the repository to your local machine, run the command "npm install" in the root folder and the client folder (install NodeJS if you do not have it installed yet). 
2. In the root folder, create a file named ".env" then assign a value to "JWT_SCRET" with a single line of code "JWT_SECRET=<any-string-vlaue>", for example "JWT_SECRET=secret".
3. Setup database: Add this line of code" MONGODB_URI=mongod+svr://myatlasusername:myatlaspassword@cluster0.va5bm.mongodb.net/myFirstDatabase" into ".env file". (Replace the username and password with your MongoDB username and password).
5. Run application: 
- Use the command "npm run start" to launch both front-end/client-side and back-end/server-side.
- Use "npm run client" to launch both front-end/client-side only.
- Use the command "npm run dev" to launch back-end/server-side only.
  
5. Setup for production: use the command "npm run build"

## Application Layout

![Screenshot 2021-04-07 170443](https://user-images.githubusercontent.com/29310963/113949237-a2c26d80-97c3-11eb-9faa-334f36c32e7f.jpg)

## License

<a href="/LICENSE" alt="LICENSE." title="APACHE 2.0 Information" target="_blank"><img align="center" src="https://img.shields.io/badge/License-Click to View APACHE 2.0-informational.svg" alt="GPL3.0 Information" height="auto" width="auto"/></a>

<i>Joia</i> <b>©</b> 2021 [Connor Favero](https://github.com/con0fav), [Rattanak Leng](https://github.com/rattanakleng), [Andrew Olson](https://github.com/YouFarted), and Frederick Thomas, [Super Coding Ninja™](https://github.com/supercodingninja).

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

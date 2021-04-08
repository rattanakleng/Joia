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
You live in a busy world; and thriving businesses are busier.  You don't have time .  Don't worry, WE got this: We're <span style="color:red">*Joia*</span>, "HELLO, WORLD!"  Joia, pronounced as "Joy-ah," means gem or jewel.  Joia is your jewel eCommerce website for local art, where you can find your gem for your Jewel or Jim!

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
from under the Joia directory:
1.  Create a file named ".env" in the project root directory (probably "Joia")
    adding the single line "JWT_SECRET=<any-string>" where <any-string> is,
    well, ANY STRING,  I have "JWT_SECRET=123456789".  It doesn't really 
    matter what the string is set to so long as it is set.
1.  Ensure that you have all the node modules installed by typing
    - npm i
2.  Launch your editor
    - code .
3.  Launch the projects to run locally in development mode:
    - npm run start
BONUS: under the server directory, run tests.  Particularly if you've made any server changes:
    - cd server
    - npm test

Things will rebuild and relaunch automatically as you edit the code
to ensure the running code reflects the code changes as you make them.

The above development setup will be suitable for most or all development.
You may stop reading now if you just want to do some light development.
The above is the convienent and recommended way or doing development.
That said, there are some minor variations on this that may be interesting
to know about for the bored or adventurous.  One variation on the above is
included for use in "production" (on Heroku, as we're using it).  The
following steps mirror how Heroku deployment works:

from under the Joia directory:
1.  Ensure that you have all the node modules installed by typing
    - npm i
2.  Build the project
    - npm run build
3.  Launch the node server
    - npm run start
4.  Launch a browser and navigate to http://localhost:3001/

The differences you'll observe will be that there will be a /build/
directory under Joia after step 2 and also step 3 will launch node to
run under this /build/ directory.  The server will be running at
http://localhost:3001/ and you'll need to launch a browser and go there
since one won't launch automatically in the third step.  Hence the fourth.

Another variation that reflects how it is run on Heroku is to specify the
MONGODB_URI, the connection string used by mongoose to figure out how to 
connect to the database.  If it is not deliberately set to be otherwise,
the string used will be "mongodb://localhost/populate" which specifies to
use your local install of mongo in a database named "populate".  And this
is perfectly fine for development purposes.  But Heroku will not have a
mongo instance.  We set it to use an ATLAS instance when running there.
How so?  This is set in an environment variable on Heroku, for which Heroku
has a "dashboard" that allows for configuration.  We may mimic this process
locally if we choose.  We *could* set environment variables on our machine
but this can get messy.  So instead, we use a node package, dotEnv, that
allows for effective environment settings to be specified by creating a 
file named ".env" and settings values in there.  I have one such .env
sitting in my Joia directory with one line

MONGODB_URI=mongod+svr://myatlasusername:myatlaspassword@cluster0.va5bm.mongodb.net/myFirstDatabase

A final variation that reflects the Heroku environment is replacing the
command at step 1 with:
npm install --only=prod

Heroku minimizes the number of node_modules installed by avoiding downloading
the devDependencies

Doing this or even knowing about it is *unnecessary* for local development
and is only probably worth knowing in case connectivity problems come up
which you're trying to diagnose.

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

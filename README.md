# Container Management System
<!-- ABOUT THE PROJECT -->
## About The Project
![alt text](https://github.com/PotnuruKumarSunil/container_management_system/homeScreen.png)

New for docker containerization ??
No worries, your management system is here.. <br />
Here's why:
* Many containers are to be launched while testing a web application for which a GUI can be more user friendly.
* Newbies in devops always feel nervous towards containers, which helps them chill.

This Web app helps you run customized docker containers from your browser.<br />
Container management system is a three tier web app where it has a backend server, frontend for the user interface and docker services.<br />


### Built With
* docker
* node
* html,css
* javascript

## Prerequisites
* Make sure you have docker installed in your server.<br />
To install docker in RHEL/CentOS

```bash
$ yum install docker-ce
```
* Also make sure you have express installed.
```bash
$ yum install express
```
* Start your docker services
```bash
$ sudo systemctl start docker
$ sudo systemctl enable docker
```
* Also, Make sure you have node is installed in your server.<br />
To install node js in RHEL/CentOS

```bash
$ yum install node
```
* To check the version of node installed.
```bash
$ node --version
```
_You can even documentation for node installation in RHEL/CentOS._
## Installation and Usage

1. Clone the repo
   ```sh
   $ git clone https://github.com/PotnuruKumarSunil/container_management_system.git
   ```
2. _Type IP address of system in which docker and backend will be running in rundocker file._
   ```js
    ip = 1.2.3.4 //in rundocker.html file
   ```
  
3. Start the backend server.<br />
  _Make sure your docker daeman in running already._
   ```js
   $ nodemon server.js
   ```
4. Jump on to browser for webapp
   ```js
    http://localhost:3000/rundocker.html
   ```

## Future Scope
_Whole setup can also be launched in the cloud resources, which would be one of the best infrastructure manager for the testing as well as launching containers for real lif servers.<br />
As cloud itself is kinda virtualization, running containers in cloud would always be the best way in my view._<br />
The same technology can also be used for k8's. That would help developers and testers with much better options for backups, storages and maintainance.

## Contact
Potnuru Kumar Sunil - sunilkumar26666@gmail.com

Project Link: [https://github.com/PotnuruKumarSunil/container_management_system](https://github.com/PotnuruKumarSunil/container_management_system.git)



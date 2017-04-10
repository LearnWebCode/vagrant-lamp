# Brad's Vagrant LAMP Dev Environment

Before moving ahead with this starter environment you'll need to have a few things installed on your computer:

* [VirtualBox](https://www.virtualbox.org/) - Free tool that allows you to run virtual machines on your computer.
* [Vagrant](https://www.vagrantup.com/) - Free tool that automates the creation of development environments within a virtual machine.

Once you've instalaled VirtualBox and Vagrant on your computer you're ready to continue:
1. Open a command-line (Terminal on Mac, PowerShell or Git Bash on Windows)
2. cd into this project's root folder
3. Run `vagrant up`
4. Go grab a coffee, it will take a few minutes
5. Once it completes you'll need to edit your computer's `hosts` file to point **fictional-university.dev** to our virtual machine. On Windows your host file lives in C/Windows/System32/Drivers/etc on Mac your hosts file lives in /etc
6. Add this line at the bottom of your hosts file: `192.168.56.101 fictional-university.dev`
7. Now you can visit **fictional-university.dev** in any browser. The root of this project is `/fictional-university/app`

## Database Info
An initial database is automatically created for you.
Database name: **dbname**
Database user: **dbuser**
User Password: **123**
Database hostname: **localhost**

## Automated Workflow (PostCSS, webpack, BrowserSync, etc...)
That's technically all you need to get your LAMP development environment up and running. However, my setup also leverages a few workflow tools. If you'd like to take full advantage of my setup you'll also want to install:

* [Node & NPM](https://nodejs.org/en/) - Node is a free tool that can run JavaScript outside the context of a web browser.
* [webpack](https://webpack.github.io/) - Free tool that bundles up multiple files.
* [Gulp](http://gulpjs.com/) - Free task-runner tool. No longer the cool kid on the block (webpack owns that title now) but I still prefer Gulp for generic task running and non-bundle'ish tasks.

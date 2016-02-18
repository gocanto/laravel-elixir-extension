# gocanto-gulp


This is just an example to compile fontawesome from bower components folder. 


## Bower 

The first step is to setup Bower. Create a new local directory and “cd” into it. Next run bower init and following the instructions.

After that process finishes, we have to install the required bower packages:

```
bower install fontawesome --save
```

## NPM

Now we need to setup our gulp dependencies, which pull from NPM. Create a new package.json file and just add an empty object, {} and save it.

Go back to the terminal and install our NPM dependencies:

```
npm install gulp gulp-notify gulp-bower --save-dev
```

This will install all the needed dependencies in a node_modules folder and also automatically update our package.json file with these dependencies.

```package.json``` shows the versions of dependencies used

## Gulp

Finally, we need to setup the ```gulpfile.js```. Create this file and we will step throughout all the settings.

If you had looked at gulp files before then you might know they all start by including the dependencies by using the node require function. 

```gulpfile.js``` shows this process





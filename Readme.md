Using .gitkeep(this it added to keep track if the folder is empty beacause git donot watch empty file) , .gitignore.
The things which will generally be included inside .gitignore can we generated them online and we pasted all that to .gitignore .
Changed -> "type":"module"
Installed nodemon what cotiniously watch over the changes made we not need to close and restart the server every time any change is made it updates it autimatically. It is to installed as dev dependencies(that thing which is used only at the time of development do not go to production) so we install it as dev dependency by running -> npm install --save-dev nodemon also ad to the "scripts" ,"dev":"nodemon src/index.js"
Installing Prettier -> npm i -D prettier (as dev dependencies) during development it keeps the format of coding consistent
Now in .prettierrc file we define the type of formatting we want 
Now in .prettierignore we add those file on which we don't want to apply prettier(this also can be coppied online for general files)
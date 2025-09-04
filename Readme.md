Using .gitkeep(this it added to keep track if the folder is empty beacause git donot watch empty file) , .gitignore.
The things which will generally be included inside .gitignore can we generated them online and we pasted all that to .gitignore .
Changed -> "type":"module" by this in your package.json, you’re telling Node.js to treat all .js files in that package as ES modules (ESM) instead of the older CommonJS (CJS) format.
Installed nodemon what cotiniously watch over the changes made we not need to close and restart the server every time any change is made it updates it autimatically. It is to installed as dev dependencies(that thing which is used only at the time of development do not go to production) so we install it as dev dependency by running -> npm install --save-dev nodemon also ad to the "scripts" ,"dev":"nodemon src/index.js"
Installing Prettier -> npm i -D prettier (as dev dependencies) during development it keeps the format of coding consistent
Now in .prettierrc file we define the type of formatting we want 
Now in .prettierignore we add those file on which we don't want to apply prettier(this also can be coppied online for general files)
install mongoose
install express
install dotenv

connected with mongodb in db->index.js

installed crocs and cockie-parser and in the app.js what ever is written is default settins to be done

in utils->asyncHandler.js we cerated a tamplete function of production grade

Using Error class(we get it readymade) we created ApiError function in utils->ApiError.js
This function handels the Errors is written it is also like tamplate

Similar of that created ApiResponse.js

#User and video model with hooks and JWT
installed bcrypt,jsonwebtoken,mongoose-aggregate-paginate-v2 and seted up user vedio model
added a middleware to userSchema using userSchema.pre() an inbuilt function we get

then added isPasswordCorrect,generateAccessToken,generateRefreshToken methodes to userSchema
using userSchema.methods

videoSchema.plugin(mongooseAggregatePaginate) ->this thing is for pipeline thing i still don't know about it.

##How to upload file in backend | Multer
  npm i cloudinary
  npm i multer
  doing inside D:\AAA\CompleateWeb\JSBackEnd\Project\src\middlewares\multer.middleware.js
  D:\AAA\CompleateWeb\JSBackEnd\Project\src\utils\cloudinary.js
  ->User uploads something to then 
  i-> we first keep it our local storage using multer
  ii-> then from local storage we upload it to cloudinary
  iii-> We can directly take it from user using multer and without storing it in the local storage we acn upload it to the cloudinary but it standard practice we keep it in local storage in case of faliure
  iv-> as soon as upload is finished we deleat the file from local storage using 
  fs.unlinkSync()  , fs is inbuit module in js used for this type of file handaling
  v-> now we ste up the cloudinary.js
  vi->now we ste up the multer.middleware.js

## Now What Is This HTTP or HTTPS
  ## We will know about HTTP (HTTP and HTTPS are bassicaly same HTTPS just adds an additional layer of security)


## Now we create user.controller.js
   -> in user.controller.js create a function named registerUser usnig asyncHandler
   -> in app.js => import userRouter from './routes/user.routes.js'
   -> in app.js => app.use("/api/v1/users", userRouter)
     so when we send request to localHost:8000/api/v1/users it gives the controll to the userRouter 
     Taking the controll what after /api/v1/users like /api/v1/users/register or 
     /api/v1/users/login the it redirects to the respective section for userRouter  

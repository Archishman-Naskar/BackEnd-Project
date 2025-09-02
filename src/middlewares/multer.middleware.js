import multer from "multer";
//this is middle ware whenever user uploads somthing that will go through it
//here we have written in way that the middleware gives the the path of storage location and
//and the name with what it will be save
//at the end it returns the whole address of the file in the storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })

//this is the middleware function we are exporting and will be used everywhere

export const upload = multer({ storage })

//this is one way of writing this we can do it other way refer multer documentation github
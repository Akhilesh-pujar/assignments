const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers[username]
    const password = req.headers[password]
    Admin.create({
        username:username,
        password:password
    })
    res.json({msg:"Admin user Created"})
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
   const title = req.body.title
   const description = req.body.description
   const image = req.body.image
   const price  = req.body.price

   Course.create({
    title:title,
    description:description,
    image:image,
    price:price
   })
     res.json({msg:"course created"})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const course = await Course.find({})
      res.json({
        courses:course
      })
});

module.exports = router;
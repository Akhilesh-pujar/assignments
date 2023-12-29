const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password
    User.create({
        username:username,
        password:password
    })
    res.json({msg:"user created"})

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
   const course = await Course.find({})
   res.json({
    yourcourses:course
   })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.headers.username
    const courseid = req.params.courseId

    User.updateOne({
        username:username,
    },{
        "$push":{
            purchasedCourses : courseid
        }
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
   const user = User.findOne({
    username : req.headers.username
   })

    const purches = await Course.findOne({
        _id:{
            "$in":purchasedCourses
        }
    })
    res.json({courses : purches})
});

module.exports = router
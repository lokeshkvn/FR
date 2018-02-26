const express = require('express');
const router = express.Router();

router.get('/add', (req, res, next)=>{
    res.send('signing up...');
})
router.route('/')
    .get((req, res, next)=>{
        res.status(200).json({
            msg: "Index page"
        });
    });


module.exports = router;
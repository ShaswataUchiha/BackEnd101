const express = require('express');
const router = express.Router();

//  Import the controllers for handelling user requests
const {showUser} = require('../controller/ceateUser.controller')
const {createUser} = require('../controller/ceateUser.controller')
const {createComment}= require('../controller/createComment.controller')
const {likeComment} = require('../controller/like.controller')

// Define the routes
router.get('/showUser', showUser);
router.post('/createUser', createUser)
router.post('/createComment', createComment)
router.post('/like', likeComment)



module.exports = router    
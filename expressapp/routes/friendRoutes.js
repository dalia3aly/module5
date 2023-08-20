const express = require("express");
const friendsController = require('../controllers/friendController');
const router = express.Router();

// default endpoint, gets all friends
router.get('/', (req, res) => {
    friendsController.getAllFriends(res);
})

// filter endpoint, gets friends matching the gender and starting letter from query parameters
router.get('/filter', (req, res) => {
    friendsController.filterFriends(req, res);
})

// gets information about this request from the headers (user-agent, content-type, accept)
router.get('/info', (req, res) => {
    friendsController.getHeaderInfo(req, res);
})

// dynamic request param endpoint - get the friend matching the specific ID
router.get('/:id', (req, res) => {
    friendsController.getSingleFriend(req, res);
})

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    friendsController.addNewFriend(req, res);
})

// a PUT request to update data for an existing friend
router.put('/:id', (req, res) => {
    friendsController.updateFriend(req, res);
})

module.exports = router;

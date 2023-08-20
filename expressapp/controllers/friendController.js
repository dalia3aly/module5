const friends = require('../models/friendModel');

const getAllFriends = (res) => {
    res.json(friends);
};


const filterFriends = (req, res) => {       
    let filterGender = req.query.gender;
    let startLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    if (startLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toUpperCase().startsWith(startLetter.toUpperCase()));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({error: "No friends matching gender " + filterGender + ' and letter ' + startLetter});
    }
};


// get information about this from the headers
const getHeaderInfo = (req, res) => {
    const goodHeaders = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        accept: req.headers.accept
    };
    res.json(goodHeaders);
};


// get a single friend by id
const getSingleFriend = (req, res) => {
    let friendId = parseInt(req.params.id);
    let matchedFriend = friends.find(friend => friend.id == friendId);

    if (matchedFriend) {
        res.status(200).json(matchedFriend);
    } else {
        res.status(404).json({error: 'Friend with id ' + friendId + ' does not exist'});
    }
};


// add a new friend
const addNewFriend = (req, res) => {
    let newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1;
    }

    friends.push(newFriend);
    res.status(200).json(newFriend);
};


// update an existing friend
const updateFriend = (req, res) => {
    let friendId = parseInt(req.params.id);
    let updatedFriend = req.body;
    let oldFriend = friends.find(friend => friend.id == friendId);

    if (oldFriend) {
        let oldIndex = friends.indexOf(oldFriend);

        let newFriend = {...oldFriend, ...updatedFriend};
        friends.splice(oldIndex, 1, newFriend);

        res.status(200).json(newFriend);
    }
    else {
        res.status(500).json({error: 'Friend with id ' + friendId + ' not found'});
    }
};


// export all the functions
module.exports = {
    getAllFriends, filterFriends, getHeaderInfo, getSingleFriend, addNewFriend, updateFriend
};

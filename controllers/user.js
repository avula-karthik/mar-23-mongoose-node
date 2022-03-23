const User = require('../models/user');
function getUsers(req, res) {
    User.find((err, users_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(users_list);
        }
    });
}
function addUser(req, res) {
    userOb = new User(req.body);
    userOb.save((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('user added');
        }
    });
}
function updateUser(req, res) {
    const updatedUser = req.body;
    User.findByIdAndUpdate(req.params._id, updatedUser, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('User details updated');
        }
    });
}
function deleteUserById(req, res) {
    User.findByIdAndDelete(req.params._id).exec((err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('User Deleted');
        }
    });
}
function getUserById(req, res) {
    User.findById(req.params._id).exec((err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}
function getUserByName(req, res) {
    User.find({ name: req.params.name }).exec((err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}
function getUserByUsername(req, res) {
    User.find({ username: req.params.username }).exec((err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}
function getUserByDOB(req, res) {
    User.find({ dob: req.params.dob }).exec((err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}
function getUserByPassword(req, res) {
    User.find({ password: req.params.password }).exec((err, user) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}
module.exports = {
    getUsers,
    addUser,
    updateUser,
    getUserById,
    deleteUserById,
    getUserByName,
    getUserByUsername,
    getUserByDOB,
    getUserByPassword,
};

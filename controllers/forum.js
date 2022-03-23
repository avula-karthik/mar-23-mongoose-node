const { body, validationResult } = require('express-validator');
const Forum = require('../models/forum');
function getForums(req, res) {
    Forum.find((err, forums_list) => {
        if (err) {
            res.json(err);
        } else {
            res.json(forums_list);
        }
    });
}
const addForum = [
    body('author').trim().isAlphanumeric().withMessage('No Special chars'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ status: 0, debug_data: errors });
        } else {
            let { title, doc, forumbody, author } = req.body;
            let forumObj = new Forum({ title, doc, forumbody, author });
            forumObj.save((error) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json('Added forum');
                }
            });
        }
    },
];
function deleteForum(req, res) {
    Forum.findByIdAndDelete(req.params._id, function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json(`Forum with id : ${req.params._id} deleted`);
        }
    });
}
const updateForum = [
    body('author').isAlphanumeric().withMessage('Author only alpha numeric'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ status: 0, debug_data: errors });
        } else {
            let { title, doc, forumbody, author } = req.body;
            let forumObj = {
                title,
                doc,
                forumbody,
                author,
            };
            Forum.findByIdAndUpdate(
                { _id: req.params._id },
                forumObj,
                function (err) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(
                            `Forum with id : ${req.params._id} updated successfully`
                        );
                    }
                }
            );
        }
    },
];
module.exports = { getForums, addForum, deleteForum, updateForum };

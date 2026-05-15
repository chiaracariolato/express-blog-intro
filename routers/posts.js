const express = require("express");
const router = express.Router();

const postsList = require('../postsList');

router.get('/', function (req, res) {
    res.json(postsList)
});

router.get('/:id', function (req, res) {
    const postId = parseInt(req.params.id);
    const showPost = postsList.find(post => post.id === postId);
    res.json(showPost);
});

router.post('/', function (req, res) {
    res.send('Creazione nuovo post')
});

router.put('/:id', function (req, res) {
    res.send('Modifica del post ' + req.params.id)
});

router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id)
});

router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id)
});

module.exports = router;
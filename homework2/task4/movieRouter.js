const express = require('express');
const router = express.Router();
const movies = {
    "1": {
            "title" : "Forest Gump"
        },
    "2": {
        "title": "Green mile"
        },
    "3": {
        "title": "Amelie"
        },
    "4": {
        "title": "Love Actually"
        }
};

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (!movies[id]) {
        res.status(404).end('Movie not found');
    } else {
        res.json(movies[id]);
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;

    if (!movies[id]) {
        res.status(404).end();
    } else {
        movies[id] = req.body;
        res.end();
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    delete movies[id];
    res.end();
});

router.post('/:id', (req, res) => {
    const { id } = req.params;

    movies[id] = req.body;
    res.end();
});

module.exports = router;
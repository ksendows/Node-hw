const express = require('express');
const router = express.Router();
const pizza = {
  "1": {
    "name": "Margarita"
  },
  "2": {
    "name": "Quadro Formaggi"
  }
};

router.get('/', (req, res) => {
    res.json(pizza);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!pizza[id]) {
    res.status(404).end(`We don't have such kind of pizza`);
  } else {
    res.json(pizza[id]);
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;

  if (!pizza[id]) {
    res.status(404).end();
  } else {
    pizza[id] = req.body;
    res.end();
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  delete pizza[id];
  res.end();
});

router.post('/:id', (req, res) => {
  const { id } = req.params;

  pizza[id] = req.body;
  res.end();
});

module.exports = router;
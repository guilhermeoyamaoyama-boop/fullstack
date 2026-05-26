// routes/pages.js
const express = require('express');
const router  = express.Router();

// '/' redireciona para /projects
router.get('/', (req, res) => res.redirect('/projects'));

router.get('/projects', (req, res) => res.render('projects'));

module.exports = router;

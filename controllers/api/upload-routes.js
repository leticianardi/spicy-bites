const router = require('express').router();
const multer = require('multer');
const multerConfig = require('../../config/multer').Router();

router.post('/', multer(multerConfig).single('file'), (req, res) => {
    return res.json({hello: "test"});

});

module.exports = router;
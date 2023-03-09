const {Router} = require('express');
const router = Router();
const booksCtrl = require("../controller/books.controller")



// Books

router.get('/', booksCtrl.getStart);

router.get("/books", booksCtrl.getBooks);

router.post('/books', booksCtrl.postBook);

router.put('/books', booksCtrl.putBook);

router.delete('/books', booksCtrl.delBook);

module.exports = router;
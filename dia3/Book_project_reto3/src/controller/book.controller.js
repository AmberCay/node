const Book = require('../models/book');

let book =  null;
// new Book(1,1,'Candide', 'Soft Cover', 'Voltaire', 13, 'ger');

function getStart(req, res) {
    let answer = {error: true, code:200, message: 'Starting point'};
    res.send(answer);
}

function getBook(req, res) {
    let answer;
    if (book != null) {
        answer = {error: false, code: 200, data: book};
    }
    else {
        answer = {error: true, code: 200, message: 'The book does not exist'};
    }
    res.send(answer);
}

function postBook(req, res) {
    let answer;
    console.log(req.body)
    if (book === null) {
        book = new Book(req.body.id_book, req.body.id_user, req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo)

        answer = {error: false, code: 200, message: 'Book was created', data: book};
    }
    else {
        answer = {error: true, code: 200, message: 'Book already exists'}
    }
    res.send(answer)
}

function putBook(req, res) {
    let answer
    if (book != null) {
        book.id_book = req.body.id_book
        book.id_user = req.body.id_user
        book.title = req.body.title
        book.type = req.body.type
        book.author = req.body.author
        book.price = req.body.price
        book.photo = req.body.photo
        answer = {error: false, code: 200, message: 'Book edited', data: book}
    }
    else {
        answer = {error: true, code: 200, message: 'The book does not exist', data: book};
    }
    res.send(answer);
}

function delBook(req, res) {
    let answer
    if (book != null) {
        book = null;
        answer = {error: false, code: 200, message: 'Book deleted', data: book};
    }
    else {
        answer = {error: true, code: 200, message: 'The book does not exist', data: book};
    }
    res.send(answer);
}

module.exports = {getStart, getBook, postBook, putBook, delBook}
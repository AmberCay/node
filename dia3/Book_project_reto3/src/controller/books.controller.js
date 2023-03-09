const Book = require('../models/book');

let books =  [];
// new Book(1,1,'Candide', 'Soft Cover', 'Voltaire', 13, 'ger');

function getStart(req, res) {
    let answer = {error: true, code:200, message: 'Starting point'};
    res.send(answer);
}

function getBooks(req, res) {

    let id = req.query.id
    let foundBook = books.find(book => book.id_book == id)
    let answer;
    if (books.length != 0 && (!id || foundBook != undefined )) {
        if (foundBook != undefined) {
            answer = {error: false, code: 200, data: foundBook};
        }
        else {
            answer = {error: false, code: 200, data: books};
        }
    }
    else {
        answer = {error: true, code: 200, message: 'No books exist'};
    }
    res.send(answer);
}

function postBook(req, res) {
    let id = req.query.id
    let foundbook = books.find(book => book.id_book == id)
    let answer;

    if (books.length = 0) {
        answer = {error: true, code: 200, message: 'There are no books'}
    }
    else if (foundbook === undefined) {
        books.push(new Book(req.body.id_book, req.body.id_user, req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo)) 

        answer = {error: false, code: 200, message: 'Book was added to list', data: books};
    }
    else {
        answer = {error: true, code: 200, message: 'Book already exists in the list'}
    }
    res.send(answer)
}

function putBook(req, res) {
    let answer
    let index = books.findIndex(book => book.id_book == req.body.id_book);
    if (index != -1) {
        books[index].id_user = req.body.id_user
        books[index].title = req.body.title
        books[index].type = req.body.type
        books[index].author = req.body.author
        books[index].price = req.body.price
        books[index].photo = req.body.photo
        answer = {error: false, code: 200, message: 'Book edited', data: books[index]}
    }
    else if (index =-1) {
        answer = {error: true, code: 200, message: 'The book does not exist', data: books};
    }
    else {
        answer = {error: true, code: 200, message: 'There are no books'}
    }
    res.send(answer);
}

function delBook(req, res) {
    let answer
    let index = books.findIndex(book => book.id_book == req.body.id_book);
    if (index != -1) {
        books.splice(index, 1)
        answer = {error: false, code: 200, message: 'Book deleted', data: books};
    }
    else {
        answer = {error: true, code: 200, message: 'The book you want to delete does not exist', data: books};
    }
    res.send(answer);
}

module.exports = {getStart, getBooks, postBook, putBook, delBook}
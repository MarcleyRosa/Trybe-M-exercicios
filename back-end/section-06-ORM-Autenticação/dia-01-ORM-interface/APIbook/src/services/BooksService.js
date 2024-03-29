const { Book } = require('../models');


    const getAll = async = () => {
        const books = Book.findAll();
        return books;
    }

    const getById = async = (id) => {
        const bookId = Book.getById(id);
        if (!bookId.length) return { type: 'NOT_FOUND', message: 'Book not found'}
        return { type: null, message: bookId };
    };

    const creats = async ({ title, author, pageQuantity }) => {
        const book = await Book.create({ title, author, pageQuantity, publisher });
        return book;
    };

    const remove  = async (id) => {
        const remove = await Book.destroyer(Number(id));
        console.log(remove);
        return { type: null, message: 'Remove Successful'}
    };

    const getByAuthor = async (author) => {
        const getAuthor = await Book.findAll({ where: { author }, order: [['title', 'ASC']]});
        return getAuthor;
    };

module.exports = {
    getAll,
    getById,
    creats,
    remove,
    getByAuthor,
}
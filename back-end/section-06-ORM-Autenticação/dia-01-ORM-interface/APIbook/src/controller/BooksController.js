const booksService = require('../services/BooksService');

const getAll = async (req, res) => {
    const books = await booksService.getAll();
    res.status(200).json(books);
};

const getFindById = async (req, res) => {
    const { id } = req.params
    const findId = await booksService.getById(Number(id));
    if (findId.type) return res.status(404).json({ message: 'Book not found'})
    return res.status(200).json({ message: 'Successful'})
}

const createTableController = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await booksService.creats({ title, author, pageQuantity });
    return res.status(200).json(book)
};

module.exports = {
    getAll,
    getFindById,
    createTableController,
}
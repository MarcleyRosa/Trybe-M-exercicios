const booksService = require('../services/BooksService');

const getAll = async (req, res) => {
    const { author } = req.query;
  
    let books;
  
    if (author) {
      books = await booksService.getByAuthor(author);
    } else {
      books = await booksService.getAll();
    }
  
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

const removeById = async (req, res) => {
    const { id } = req.params;
    const remove = await booksService.remove(id);
    return res.status(200).end()
};

const getByNameAuthor = async (req, res) => {
    const { author } = req.body;
    const getAuthor = await booksService.getByAuthor(author);
    return res.status(200).json(getAuthor)
};

module.exports = {
    getAll,
    getFindById,
    createTableController,
    removeById,
    getByNameAuthor,
}
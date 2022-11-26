

const BookList = (sequelize, DataTypes) => {
    const book = sequelize.define('books', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        publisher: DataTypes.STRING,
    })

    return book;

}

module.exports = BookList;
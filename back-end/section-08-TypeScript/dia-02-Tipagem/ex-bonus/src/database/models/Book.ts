import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Author from './Author'


class Book extends Model {
    declare id: number;
    declare title: string;
    declare authorId: number;
    declare genreId: number;
};

Book.init({
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }, 
    title: {
        type: STRING(255),
        allowNull: false,
    },
    authorId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'authors',
          key: 'id',
        },
    },
    genreId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id',
        },
    }
 }, {
    underscored: true,
    sequelize: db,
    modelName: 'books',
    timestamps: false,
})

Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'id' });

export default Book;
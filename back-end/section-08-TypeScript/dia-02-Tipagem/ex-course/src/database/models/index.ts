import { Sequelize } from 'sequelize';
import * as config from '../config/database';
import Comments from './CommentModel';
import Books from './BookModel'


(async () => {

    const books = await Books.findAll({ raw: true });
    console.table(books);
  
  const comments = await Comments.findAll({ raw: true });
  console.table(comments);
  
  const booksWithComments = await Books.findAll({ raw: true, include: ['comments'] });
  console.table(booksWithComments);
  process.exit(0);
  
  })();

export default new Sequelize(config);
import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
    ],
    group: 'authors.name',
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();
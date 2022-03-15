import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BooksController extends Controller {
  @service router;
  @service store;

  @action
  async createBook(headLine, numberOfPages, authorURI) {
    console.log(authorURI);
    let author = authorURI
      ? await this.store.peekInstance('author', authorURI.slice(1, -1))
      : undefined;
    console.log(author);

    this.store.create('book', {
      headLine: headLine,
      numberOfPages: numberOfPages,
      author: author,
    });

    await this.store.persist();

    this.router.refresh();
  }

  @action
  async deleteBook(book) {
    book.destroy();
    await this.store.persist();

    this.router.refresh();
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
  @service solidAuth;
  @service store;

  async model() {
    await this.solidAuth.ensureLogin();
    await this.store.fetchGraphForType('book');
    await this.store.fetchGraphForType('author');
    return {
      books: this.store.all('book'),
      authors: this.store.all('author'),
    };
  }
}

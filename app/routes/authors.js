import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorsRoute extends Route {
  @service solidAuth;
  @service store;

  async model() {
    await this.solidAuth.ensureLogin();
    await this.store.fetchGraphForType('author');
    await this.store.fetchGraphForType('book');
    return this.store.all('author');
  }
}

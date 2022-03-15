import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import rdflib from 'ember-rdflib';
import env from '../../config/environment';

const { Fetcher, namedNode } = rdflib;

export default class SolidCardInfoComponent extends Component {
  @service('solid-auth') auth;
  @service store;

  constructor() {
    super(...arguments);
    this.fetchVcard();
  }

  @tracked
  me = null;

  @action
  async fetchVcard() {
    await this.auth.ensureLogin();
    await this.auth.ensureTypeIndex();

    await this.store.fetchGraphForType('person');
    await this.store.all('person');

    this.me = await this.store.peekInstance('person', this.auth.webId);
  }

  @action
  async saveUser(event) {
    event.preventDefault();
    await this.store.persist();
  }
}

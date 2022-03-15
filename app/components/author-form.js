import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorFormComponent extends Component {
  @tracked
  givenName;

  @tracked
  familyName;

  @action
  onCreateAuthor(event) {
    event.preventDefault();
    this.args.onSubmit(this.givenName, this.familyName);
    this.givenName = '';
    this.familyName = '';
  }
}

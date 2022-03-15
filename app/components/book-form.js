import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookFormComponent extends Component {
  @tracked
  headLine;

  @tracked
  numberOfPages;

  @tracked
  authorURI;

  @action
  onCreateBook(event) {
    event.preventDefault();
    this.args.onSubmit(this.headLine, this.numberOfPages, this.authorURI);
    this.headLine = '';
    this.numberOfPages = '';
  }

  @action
  setAuthor(event) {
    event.preventDefault();
    this.authorURI = event.target.value;
  }
}

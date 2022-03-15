import SemanticModel, {
  solid,
  string,
  integer,
  hasMany,
  belongsTo,
} from 'ember-solid-store/models/semantic-model';

@solid({
  defaultStorageLocation: '/private/tests/my-authors.ttl', // default location in solid pod
  private: true, // is this private info for the user?
  type: 'http://schema.org/Person', // optional, defining NS is good enough if this is derived from the namespace.
  ns: 'http://schema.org/', // define a namespace for properties.  http://schema.org/ is a good starting point for finding definitions.  No clue? use 'ext'.
})
export default class Author extends SemanticModel {
  @string()
  givenName;

  @string()
  familyName;

  @hasMany({
    model: 'book',
    inverse: true,
    predicate: 'schema:author',
  })
  books;
}

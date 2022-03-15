import {
  VCARD,
  FOAF,
  LDP,
  SP,
  SOLID,
} from 'ember-solid-store/utils/namespaces';
import SemanticModel, {
  property,
  string,
  integer,
  term,
  solid,
  rdfType,
} from 'ember-solid-store/models/semantic-model';

@solid({
  defaultStorageLocation: '/card',
  private: false,
  type: FOAF('Person'),
  ns: FOAF,
})
export default class SolidPersonModel extends SemanticModel {
  @string({ ns: FOAF })
  name = '';

  @string({ predicate: VCARD('fn') })
  formattedName = '';

  @string({ predicate: VCARD('organization-name') })
  organizationName = '';

  @term({ ns: LDP })
  inbox = null;

  @term({ ns: SP })
  storage = null;

  @term({ ns: SOLID })
  account = null;

  @term({ ns: SOLID })
  privateTypeIndex = null;

  @term({ ns: SOLID })
  publicTypeIndex = null;
}

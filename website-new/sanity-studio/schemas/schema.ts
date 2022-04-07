// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';
import settings from './settings';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([settings]),
});

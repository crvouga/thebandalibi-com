// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
import hero from './hero';
import settings from './settings';
import video from './video';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([settings, video, hero]),
});

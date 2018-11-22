import some from './some';
import { createRule } from '../../index';

export default createRule('Value in not included', (variants, msg, value) =>
  some(variants, value) ? createRule.success : msg,
);

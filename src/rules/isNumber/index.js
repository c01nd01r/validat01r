import isNumber from 'is-number';

import { createRule } from '../../index';
export default createRule(
  'Value in not a Number',
  (_, msg, value) => isNumber(value) ? createRule.success : msg,
);
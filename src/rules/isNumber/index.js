import isNumber from './isNumber';
import { createRule } from '../../index';

export default createRule('Value in not a Number', (msg, value) =>
  isNumber(value) ? createRule.success : msg,
);
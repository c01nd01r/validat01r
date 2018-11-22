import minNumber from './minNumber';
import { createRule } from '../../index';

export default createRule('The number is less than the minimum possible', (min, msg, value) =>
  minNumber(min, value) ? createRule.success : msg,
);

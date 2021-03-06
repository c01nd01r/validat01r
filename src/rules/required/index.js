import { createRule } from '../../index';
import required from './required';

export default createRule('This field is required', (msg, value) =>
  required(value) ? createRule.success : msg,
);

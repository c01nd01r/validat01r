import { validator, createRule } from './index';

const max = createRule('Число больше, чем должно быть', (max, msg, value) =>
  max < value ? msg : createRule.success
);


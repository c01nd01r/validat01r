import { makeValidator } from 'mandle';
import { validator, createRule } from './index';

const max = createRule('Число больше, чем должно быть', (max, msg, value) =>
  max < value ? msg : createRule.success
);

const f = err => {
  console.log(err);
};
const s = () => {
  console.log('success');
};

validator(result)
  .Fail(f)
  .Success(s);

import { makeValidator } from 'mandle';
import { validator, createRule } from './index';

const min = createRule('Число меньше, чем должно быть', (min, msg, value) =>
  min > value ? msg : createRule.success
);

const personValidator = makeValidator({
  age: [
    min(18)('Minimum age - 18 years')
  ]
})

const f = err => {
  console.log(err);
};
const s = () => {
  console.log('success');
};

validator(result)
  .Fail(f)
  .Success(s);

// DEMO
import { makeValidator } from 'mandle';
import { validate, createRule } from './src/index';

// validation rule (default err msg, validation fn)
const min = createRule(
  'The number is less than it should be',
  (min, msg, value) => min > value ? msg : createRule.success,
);

// validation schema
const personValidator = makeValidator({
  age: [
    min(18)('Minimum age - 18 years'),
  ],
});
// data
const data = {
  age: 16,
};

// fail callback
const f = err => {
  console.log(err);
};
// success callback
const s = () => {
  console.log('success');
};

validate(personValidator(data))
  .Fail(f)
  .Success(s);
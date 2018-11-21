class Validator {
  constructor(validatorFn, data) {
    this.result = null;
    this.validatorFn = validatorFn;
    this.data = data;
    this.hasErrors = false;
  }

  _runValidator() {
    if (this.data) {
      this.result = this.validatorFn(this.data);
    } else {
      this.result = this.validatorFn;
    }
    this.hasErrors = Object.keys(this.result).length !== 0;
  }

  Success(fn) {
    if (this.hasErrors) return this;
    this._runValidator();
    if (this.hasErrors) return this;

    fn();
    return this;
  }

  Fail(fn) {
    if (this.hasErrors) {
      fn(this.result);
      return this;
    }

    this._runValidator();

    if (this.hasErrors) {
      fn(this.result);
      return this;
    }

    return this;
  }

  getResult() {
    this._runValidator();
    return this.result;
  }
}

const createRule = (defaultMsg, fn) => (...args) => msg => value => {
  return fn.apply(null, args.concat(msg || defaultMsg, value));
};

createRule.success = undefined;

const validator = (validatorFn, data) =>
  data ? new Validator(validatorFn, data) : new Validator(validatorFn);
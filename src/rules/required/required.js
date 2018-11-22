export default function required(val) {
  if (typeof val === 'string') {
    return val.trim().length > 0;
  }
  return !(val === undefined || val === null);
}

const thisNumber = 13;
const thisScring = '27';
const thisBollean = true;
const thisNull = null;
const thisUndefined = undefined;
const thisObject = {
    data_types: 8,
    null_is_object: true
 };
 const thisbigint = 154n;
 const id = Symbol('id');

  console.log(Number(thisNumber), Boolean(thisNumber), String(thisNumber));
  console.log(Number(thisScring), Boolean(thisScring), String(thisScring));
  console.log(Number(thisBollean), Boolean(thisBollean), String(thisBollean));
  console.log(Number(thisNull), Boolean(thisNull), String(thisNull));
  console.log(Number(thisUndefined), Boolean(thisUndefined), String(thisUndefined));
  console.log(Number(thisObject), Boolean(thisObject), String(thisObject));
  console.log(Number(thisbigint), Boolean(thisbigint), String(thisbigint));
  console.log(Boolean(id), String(id));
let sen = `The movie is not that bad, I like it`
let arr = sen.split('')
//array
let not = arr.indexOf('not');
let bad = arr.indexOf('bad');
arr.splice(not,bad-not+3,'good');
console.log(arr.join(''));

//string
let is = sen.indexOf('not');
let that = send.indexOf ('bad');
let sen1 = sen.substring (0, is);
let sen2 = sen.substring (that+4, sen.length);
console.log(sen1 + "good" + sen2);

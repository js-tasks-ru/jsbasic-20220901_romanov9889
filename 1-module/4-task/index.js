const SPAM1 = '1xbet';
const SPAM2 = 'xxx'

function checkSpam(str) {
  return str.toLowerCase().indexOf(SPAM1) >= 0 || str.toLowerCase().indexOf(SPAM2) >= 0;
}

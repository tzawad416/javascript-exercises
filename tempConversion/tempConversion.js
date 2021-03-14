const ftoc = function(ftemp) {
  let ctemp = (ftemp - 32)*(5 / 9);
  return Math.round( ctemp * 1e1 ) / 1e1;
}

const ctof = function(ctemp) {
  let ftemp = (ctemp* (9 / 5)) + 32;
  return Math.round( ftemp * 1e1 ) / 1e1;
}

module.exports = {
  ftoc,
  ctof
}

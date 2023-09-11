const UNITS = {
  dollar: "$",
  euro: "€",
};
function getOppositeUnit(unit) {
  return unit === UNITS.dollar ? UNITS.euro : UNITS.dollar;
}
function convertMoneyTo(money, unit) {
  if (unit === UNITS.dollar) {
    return money / 0.93;
  } else if (unit === UNITS.euro) {
    return money * 0.93;
  }
}
export { UNITS, convertMoneyTo, getOppositeUnit };

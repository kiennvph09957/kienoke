/*eslint-disable */
export function isRequired(str = '') {
  if (str !== null) {
    return !(str.trim().length === 0);
  }
  return false;
}

export function isEmail(str = '') {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str,
  );
}

export function isNumeric(num: any) {
  return !isNaN(parseInt(num, 10)) && isFinite(num);
}

export function isZipCode(value = '') {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
}

export function isPhoneNum(num: any) {
  const bFlag = true;
  if (bFlag) return true;
  return num.length === 12; // Temp Check
}

export function isJson(str: any) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

function isAcceptedCard(cardno: any) {
  let regex = null;

  // American Express :- Starting with 34 or 37, length 15 digits.
  regex = /^(?:3[47][0-9]{13})$/;
  if (cardno.match(regex)) return true;

  // Visa :- Starting with 4, length 13 or 16 digits.
  regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (cardno.match(regex)) return true;

  // MasterCard :- Starting with 51 through 55, length 16 digits.
  regex = /^(?:5[1-5][0-9]{14})$/;
  if (cardno.match(regex)) return true;

  // Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
  regex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  if (cardno.match(regex)) return true;
}

export function isCreditCard(cardno: any) {
  return !!cardno && isAcceptedCard(cardno);
}

export function isPassword(str: any, text: any) {
  if (str.length < 6) return false;
  return true;
}
export function isPasswordCase(str: any, text: any) {
  return str == str.toLowerCase() && str != str.toUpperCase();
}

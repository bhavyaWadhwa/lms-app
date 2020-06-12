// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$String = require("bs-platform/lib/js/string.js");

var regularExpression = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;

function isInvalid(allowBlank, email) {
  if ($$String.trim(email).length !== 0) {
    return !regularExpression.test(email);
  } else {
    return !allowBlank;
  }
}

exports.regularExpression = regularExpression;
exports.isInvalid = isInvalid;
/* No side effect */

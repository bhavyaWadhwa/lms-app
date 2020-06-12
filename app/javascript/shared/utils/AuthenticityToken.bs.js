// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var CSRFTokenMissing = Caml_exceptions.create("AuthenticityToken.CSRFTokenMissing");

var CSRFTokenEmpty = Caml_exceptions.create("AuthenticityToken.CSRFTokenEmpty");

function fromHead(param) {
  var metaTag = document.querySelector("meta[name='csrf-token']");
  if (metaTag == null) {
    throw CSRFTokenMissing;
  } else {
    var match = metaTag.getAttribute("content");
    if (match == null) {
      throw CSRFTokenEmpty;
    } else {
      return match;
    }
  }
}

exports.CSRFTokenMissing = CSRFTokenMissing;
exports.CSRFTokenEmpty = CSRFTokenEmpty;
exports.fromHead = fromHead;
/* No side effect */

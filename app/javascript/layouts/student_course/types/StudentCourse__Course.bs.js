// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function decode(json) {
  return {
          id: Json_decode.field("id", Json_decode.string, json),
          name: Json_decode.field("name", Json_decode.string, json)
        };
}

function id(t) {
  return t.id;
}

function name(t) {
  return t.name;
}

exports.decode = decode;
exports.id = id;
exports.name = name;
/* No side effect */

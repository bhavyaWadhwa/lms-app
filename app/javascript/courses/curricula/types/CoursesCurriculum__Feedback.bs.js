// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function id(t) {
  return t.id;
}

function coachId(t) {
  return t.coachId;
}

function submissionId(t) {
  return t.submissionId;
}

function feedback(t) {
  return t.feedback;
}

function decode(json) {
  return {
          id: Json_decode.field("id", Json_decode.string, json),
          coachId: Json_decode.field("coachId", Json_decode.string, json),
          submissionId: Json_decode.field("submissionId", Json_decode.string, json),
          feedback: Json_decode.field("feedback", Json_decode.string, json)
        };
}

exports.id = id;
exports.coachId = coachId;
exports.submissionId = submissionId;
exports.feedback = feedback;
exports.decode = decode;
/* No side effect */

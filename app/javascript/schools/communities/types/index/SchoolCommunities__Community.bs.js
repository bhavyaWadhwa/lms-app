// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function decode(json) {
  return {
          id: Json_decode.field("id", Json_decode.string, json),
          name: Json_decode.field("name", Json_decode.string, json),
          targetLinkable: Json_decode.field("targetLinkable", Json_decode.bool, json)
        };
}

function id(t) {
  return t.id;
}

function name(t) {
  return t.name;
}

function targetLinkable(t) {
  return t.targetLinkable;
}

function create(id, name, targetLinkable) {
  return {
          id: id,
          name: name,
          targetLinkable: targetLinkable
        };
}

function updateList(community, communities) {
  return List.map((function (c) {
                if (c.id === community.id) {
                  return community;
                } else {
                  return c;
                }
              }), communities);
}

exports.decode = decode;
exports.id = id;
exports.name = name;
exports.targetLinkable = targetLinkable;
exports.create = create;
exports.updateList = updateList;
/* No side effect */

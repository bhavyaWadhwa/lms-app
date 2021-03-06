// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var InvalidVisibilityValue = Caml_exceptions.create("CurriculumEditor__Target.InvalidVisibilityValue");

function id(t) {
  return t.id;
}

function title(t) {
  return t.title;
}

function targetGroupId(t) {
  return t.targetGroupId;
}

function sortIndex(t) {
  return t.sortIndex;
}

function visibility(t) {
  return t.visibility;
}

function decodeVisbility(visibilityString) {
  switch (visibilityString) {
    case "archived" :
        return /* Archived */2;
    case "draft" :
        return /* Draft */0;
    case "live" :
        return /* Live */1;
    default:
      throw [
            InvalidVisibilityValue,
            "Unknown Value"
          ];
  }
}

function decode(json) {
  return {
          id: Json_decode.field("id", Json_decode.string, json),
          targetGroupId: Json_decode.field("targetGroupId", Json_decode.string, json),
          title: Json_decode.field("title", Json_decode.string, json),
          sortIndex: Json_decode.field("sortIndex", Json_decode.$$int, json),
          visibility: decodeVisbility(Json_decode.field("visibility", Json_decode.string, json))
        };
}

function updateList(targets, target) {
  var oldTargets = List.filter((function (t) {
            return t.id !== target.id;
          }))(targets);
  return List.rev(List.append(/* :: */[
                  target,
                  /* [] */0
                ], List.rev(oldTargets)));
}

function create(id, targetGroupId, title, sortIndex, visibility) {
  return {
          id: id,
          targetGroupId: targetGroupId,
          title: title,
          sortIndex: sortIndex,
          visibility: visibility
        };
}

function sort(targets) {
  return List.sort((function (x, y) {
                return x.sortIndex - y.sortIndex | 0;
              }), targets);
}

function archive(t) {
  return {
          id: t.id,
          targetGroupId: t.targetGroupId,
          title: t.title,
          sortIndex: t.sortIndex,
          visibility: /* Archived */2
        };
}

function archived(t) {
  var match = t.visibility;
  return match >= 2;
}

function removeTarget(target, targets) {
  return List.filter((function (t) {
                  return t.id !== target.id;
                }))(targets);
}

function targetIdsInTargetGroup(id, targets) {
  return List.map((function (t) {
                return t.id;
              }), List.filter((function (t) {
                      return t.targetGroupId === id;
                    }))(targets));
}

function updateSortIndex(sortedTargets) {
  return List.mapi((function (sortIndex, t) {
                return create(t.id, t.targetGroupId, t.title, sortIndex, t.visibility);
              }), sortedTargets);
}

function template(id, targetGroupId, title) {
  return create(id, targetGroupId, title, 999, /* Draft */0);
}

exports.InvalidVisibilityValue = InvalidVisibilityValue;
exports.id = id;
exports.title = title;
exports.targetGroupId = targetGroupId;
exports.sortIndex = sortIndex;
exports.visibility = visibility;
exports.decodeVisbility = decodeVisbility;
exports.decode = decode;
exports.updateList = updateList;
exports.create = create;
exports.sort = sort;
exports.archive = archive;
exports.archived = archived;
exports.removeTarget = removeTarget;
exports.targetIdsInTargetGroup = targetIdsInTargetGroup;
exports.updateSortIndex = updateSortIndex;
exports.template = template;
/* No side effect */

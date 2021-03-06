// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var CoursesApply__Root = require("../courses/apply/CoursesApply__Root.bs.js");

function decodeProps(json) {
  return {
          courseName: Json_decode.field("courseName", Json_decode.string, json),
          courseId: Json_decode.field("courseId", Json_decode.string, json),
          thumbnailUrl: Json_decode.field("thumbnailUrl", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          email: Json_decode.field("email", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          name: Json_decode.field("name", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          privacyPolicy: Json_decode.field("privacyPolicy", Json_decode.bool, json),
          termsOfUse: Json_decode.field("termsOfUse", Json_decode.bool, json)
        };
}

var props = decodeProps(DomUtils.parseJSONTag(undefined, /* () */0));

ReactDOMRe.renderToElementWithId(React.createElement(CoursesApply__Root.make, {
          courseName: props.courseName,
          courseId: props.courseId,
          thumbnailUrl: props.thumbnailUrl,
          email: props.email,
          name: props.name,
          privacyPolicy: props.privacyPolicy,
          termsOfUse: props.termsOfUse
        }), "react-root");

exports.decodeProps = decodeProps;
exports.props = props;
/* props Not a pure module */

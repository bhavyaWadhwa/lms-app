// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var CourseExports__Tag = require("../schools/courses/types/course_exports/CourseExports__Tag.bs.js");
var CourseExports__Root = require("../schools/courses/components/CourseExports__Root.bs.js");
var CourseExports__Course = require("../schools/courses/types/course_exports/CourseExports__Course.bs.js");
var CourseExports__CourseExport = require("../schools/courses/types/course_exports/CourseExports__CourseExport.bs.js");

function decodeProps(json) {
  return /* tuple */[
          Json_decode.field("course", CourseExports__Course.decode, json),
          Json_decode.field("exports", (function (param) {
                  return Json_decode.array(CourseExports__CourseExport.decode, param);
                }), json),
          Json_decode.field("tags", (function (param) {
                  return Json_decode.array(CourseExports__Tag.decode, param);
                }), json)
        ];
}

var match = decodeProps(DomUtils.parseJSONTag("schools-courses-exports__props", /* () */0));

var tags = match[2];

var $$exports = match[1];

var course = match[0];

ReactDOMRe.renderToElementWithId(React.createElement(CourseExports__Root.make, {
          course: course,
          exports: $$exports,
          tags: tags
        }), "schools-courses-exports__root");

exports.decodeProps = decodeProps;
exports.course = course;
exports.$$exports = $$exports;
exports.tags = tags;
/* match Not a pure module */

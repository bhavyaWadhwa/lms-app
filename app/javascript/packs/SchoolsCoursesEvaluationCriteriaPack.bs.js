// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var EvaluationCriterion = require("../shared/types/EvaluationCriterion.bs.js");
var EvaluationCriteria__Index = require("../schools/courses/components/EvaluationCriteria__Index.bs.js");

function decodeProps(json) {
  return {
          courseId: Json_decode.field("courseId", Json_decode.string, json),
          evaluationCriteria: Json_decode.field("evaluationCriteria", (function (param) {
                  return Json_decode.array(EvaluationCriterion.decode, param);
                }), json)
        };
}

var props = decodeProps(DomUtils.parseJSONTag("schools-courses-evaluation-criteria__props", /* () */0));

ReactDOMRe.renderToElementWithId(React.createElement(EvaluationCriteria__Index.make, {
          courseId: props.courseId,
          evaluationCriteria: props.evaluationCriteria
        }), "schools-courses-evaluation-criteria__root");

exports.decodeProps = decodeProps;
exports.props = props;
/* props Not a pure module */

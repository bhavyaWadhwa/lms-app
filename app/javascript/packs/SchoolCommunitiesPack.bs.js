// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var SchoolCommunities__Index = require("../schools/communities/SchoolCommunities__Index.bs.js");
var SchoolCommunities__Course = require("../schools/communities/types/index/SchoolCommunities__Course.bs.js");
var SchoolCommunities__Community = require("../schools/communities/types/index/SchoolCommunities__Community.bs.js");
var SchoolCommunities__Connection = require("../schools/communities/types/index/SchoolCommunities__Connection.bs.js");

function decodeProps(json) {
  return {
          communities: Json_decode.field("communities", (function (param) {
                  return Json_decode.list(SchoolCommunities__Community.decode, param);
                }), json),
          courses: Json_decode.field("courses", (function (param) {
                  return Json_decode.list(SchoolCommunities__Course.decode, param);
                }), json),
          connections: Json_decode.field("connections", (function (param) {
                  return Json_decode.list(SchoolCommunities__Connection.decode, param);
                }), json)
        };
}

var props = decodeProps(DomUtils.parseJSONAttribute("school-communities", "data-json-props", /* () */0));

ReactDOMRe.renderToElementWithId(React.createElement(SchoolCommunities__Index.make, {
          communities: props.communities,
          courses: props.courses,
          connections: props.connections
        }), "school-communities");

exports.decodeProps = decodeProps;
exports.props = props;
/* props Not a pure module */

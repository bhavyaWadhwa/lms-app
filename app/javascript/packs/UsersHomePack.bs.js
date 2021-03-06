// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var UsersHome__Root = require("../users/home/components/UsersHome__Root.bs.js");
var UsersHome__Course = require("../users/home/types/UsersHome__Course.bs.js");
var UsersHome__Community = require("../users/home/types/UsersHome__Community.bs.js");
var UsersHome__IssuedCertificate = require("../users/home/types/UsersHome__IssuedCertificate.bs.js");

function decodeProps(json) {
  return /* tuple */[
          Json_decode.field("currentSchoolAdmin", Json_decode.bool, json),
          Json_decode.field("courses", (function (param) {
                  return Json_decode.array(UsersHome__Course.decode, param);
                }), json),
          Json_decode.field("communities", (function (param) {
                  return Json_decode.array(UsersHome__Community.decode, param);
                }), json),
          Json_decode.field("showUserEdit", Json_decode.bool, json),
          Json_decode.field("userName", Json_decode.string, json),
          Json_decode.field("userTitle", Json_decode.string, json),
          Json_decode.optional((function (param) {
                  return Json_decode.field("avatarUrl", Json_decode.string, param);
                }), json),
          Json_decode.field("issuedCertificates", (function (param) {
                  return Json_decode.array(UsersHome__IssuedCertificate.decode, param);
                }), json)
        ];
}

var match = decodeProps(DomUtils.parseJSONTag("users-home-data", /* () */0));

var issuedCertificates = match[7];

var avatarUrl = match[6];

var userTitle = match[5];

var userName = match[4];

var showUserEdit = match[3];

var communities = match[2];

var courses = match[1];

var currentSchoolAdmin = match[0];

ReactDOMRe.renderToElementWithId(React.createElement(UsersHome__Root.make, {
          currentSchoolAdmin: currentSchoolAdmin,
          courses: courses,
          communities: communities,
          showUserEdit: showUserEdit,
          userName: userName,
          userTitle: userTitle,
          avatarUrl: avatarUrl,
          issuedCertificates: issuedCertificates
        }), "users-home");

exports.decodeProps = decodeProps;
exports.currentSchoolAdmin = currentSchoolAdmin;
exports.courses = courses;
exports.communities = communities;
exports.showUserEdit = showUserEdit;
exports.userName = userName;
exports.userTitle = userTitle;
exports.avatarUrl = avatarUrl;
exports.issuedCertificates = issuedCertificates;
/* match Not a pure module */

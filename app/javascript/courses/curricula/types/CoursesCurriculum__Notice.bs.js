// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var LevelUpSvg = require("../images/level-up.svg");
var AccessEndedSvg = require("../images/access-ended.svg");
var CourseEndedSvg = require("../images/course-ended.svg");
var PreviewModeSvg = require("../images/preview-mode.svg");
var CourseCompleteSvg = require("../images/course-complete.svg");
var LevelUpBlockedSvg = require("../images/level-up-blocked.svg");

var courseEndedImage = CourseEndedSvg.default;

var courseCompleteImage = CourseCompleteSvg.default;

var accessEndedImage = AccessEndedSvg.default;

var levelUpImage = LevelUpSvg.default;

var previewModeImage = PreviewModeSvg.default;

var levelUpBlockedImage = LevelUpBlockedSvg.default;

function icon(t) {
  if (typeof t === "number") {
    switch (t) {
      case /* Preview */0 :
          return previewModeImage;
      case /* CourseEnded */1 :
          return courseEndedImage;
      case /* CourseComplete */2 :
          return courseCompleteImage;
      case /* AccessEnded */3 :
          return accessEndedImage;
      case /* LevelUp */4 :
          return levelUpImage;
      case /* Nothing */5 :
          return "";
      
    }
  } else {
    return levelUpBlockedImage;
  }
}

exports.courseEndedImage = courseEndedImage;
exports.courseCompleteImage = courseCompleteImage;
exports.accessEndedImage = accessEndedImage;
exports.levelUpImage = levelUpImage;
exports.previewModeImage = previewModeImage;
exports.levelUpBlockedImage = levelUpBlockedImage;
exports.icon = icon;
/* courseEndedImage Not a pure module */

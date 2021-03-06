// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Dropdown = require("../../../shared/components/Dropdown.bs.js");
var ListUtils = require("../../../shared/utils/ListUtils.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var StudentCourse__Course = require("../types/StudentCourse__Course.bs.js");

function str(prim) {
  return prim;
}

((require("./StudentCourse__Header.css")));

((require("courses/shared/background_patterns.css")));

function courseOptions(courses) {
  return $$Array.of_list(List.map((function (course) {
                    var courseId = StudentCourse__Course.id(course);
                    return React.createElement("a", {
                                key: "course-" + courseId,
                                className: "cursor-pointer block p-3 text-xs font-semibold text-gray-900 border-b border-gray-200 bg-white hover:text-primary-500 hover:bg-gray-200 whitespace-no-wrap",
                                href: "/courses/" + (courseId + "/curriculum")
                              }, React.createElement("span", undefined, StudentCourse__Course.name(course)));
                  }), courses));
}

function courseDropdown(currentCourse, otherCourses) {
  var tmp;
  if (otherCourses) {
    var selected = React.createElement("button", {
          className: "dropdown__btn max-w-xs md:max-w-lg mx-auto text-white appearance-none flex items-center relative justify-between focus:outline-none font-semibold w-full text-lg md:text-2xl leading-tight"
        }, React.createElement("span", {
              className: "sm:truncate w-full text-left"
            }, StudentCourse__Course.name(currentCourse)), React.createElement("div", {
              className: "student-course__dropdown-btn ml-3 hover:bg-primary-100 hover:text-primary-500 flex items-center justify-between px-3 py-2 rounded"
            }, React.createElement("i", {
                  className: "fas fa-chevron-down text-xs font-semibold"
                })));
    tmp = React.createElement(Dropdown.make, {
          selected: selected,
          contents: courseOptions(otherCourses),
          className: "student-course__dropdown relative mx-auto"
        });
  } else {
    tmp = React.createElement("div", {
          className: "flex max-w-xs md:max-w-xl mx-auto items-center relative justify-between font-semibold relative rounded w-full text-lg md:text-2xl leading-tight text-white"
        }, React.createElement("span", {
              className: "sm:truncate w-full text-left"
            }, StudentCourse__Course.name(currentCourse)));
  }
  return React.createElement("div", undefined, tmp);
}

function courseNameContainerClasses(additionalLinks) {
  return "student-course__name-container w-full absolute bottom-0 " + (
          ListUtils.isEmpty(additionalLinks) ? "pt-2 pb-3 md:pt-4 md:pb-6" : "pt-2 pb-3 md:pt-4 md:pb-12"
        );
}

function renderCourseSelector(currentCourseId, courses, coverImage, additionalLinks) {
  var currentCourse = ListUtils.unsafeFind((function (c) {
          return StudentCourse__Course.id(c) === currentCourseId;
        }), "Could not find current course with ID " + (currentCourseId + " in StudentCourse__Header"), courses);
  var otherCourses = List.filter((function (c) {
            return StudentCourse__Course.id(c) !== currentCourseId;
          }))(courses);
  return React.createElement("div", {
              className: "relative bg-primary-900"
            }, React.createElement("div", {
                  className: "relative pb-1/2 md:pb-1/5 2xl:pb-1/6"
                }, coverImage !== undefined ? React.createElement("img", {
                        className: "absolute h-full w-full object-cover",
                        src: coverImage
                      }) : React.createElement("div", {
                        className: "student-course__cover-default absolute h-full w-full svg-bg-pattern-1"
                      })), React.createElement("div", {
                  className: courseNameContainerClasses(additionalLinks)
                }, React.createElement("div", {
                      className: "student-course__name relative px-4 lg:px-0 flex h-full mx-auto lg:max-w-3xl"
                    }, courseDropdown(currentCourse, otherCourses))));
}

function tabClasses(url, linkTitle) {
  var defaultClasses = "student-course__nav-tab py-4 px-2 text-center flex-1 font-semibold text-sm ";
  var match = url.path;
  if (match && match[0] === "courses") {
    var match$1 = match[1];
    if (match$1) {
      var match$2 = match$1[1];
      if (match$2 && match$2[0] === linkTitle) {
        return "student-course__nav-tab py-4 px-2 text-center flex-1 font-semibold text-sm student-course__nav-tab--active";
      } else {
        return defaultClasses;
      }
    } else {
      return defaultClasses;
    }
  } else {
    return defaultClasses;
  }
}

function StudentCourse__Header(Props) {
  var currentCourseId = Props.currentCourseId;
  var courses = Props.courses;
  var additionalLinks = Props.additionalLinks;
  var coverImage = Props.coverImage;
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  return React.createElement("div", undefined, renderCourseSelector(currentCourseId, courses, coverImage, additionalLinks), additionalLinks ? React.createElement("div", {
                    className: "md:px-3"
                  }, React.createElement("div", {
                        className: "bg-white border-transparent flex justify-between overflow-x-auto md:overflow-hidden lg:max-w-3xl mx-auto shadow md:rounded-lg mt-0 md:-mt-7 z-10 relative"
                      }, $$Array.of_list(List.map((function (l) {
                                  var match;
                                  switch (l) {
                                    case "calendar" :
                                        match = /* tuple */[
                                          "Calendar",
                                          "calendar"
                                        ];
                                        break;
                                    case "curriculum" :
                                        match = /* tuple */[
                                          "Curriculum",
                                          "curriculum"
                                        ];
                                        break;
                                    case "leaderboard" :
                                        match = /* tuple */[
                                          "Leaderboard",
                                          "leaderboard"
                                        ];
                                        break;
                                    case "report" :
                                        match = /* tuple */[
                                          "Report",
                                          "report"
                                        ];
                                        break;
                                    case "review" :
                                        match = /* tuple */[
                                          "Review",
                                          "review"
                                        ];
                                        break;
                                    case "students" :
                                        match = /* tuple */[
                                          "Students",
                                          "students"
                                        ];
                                        break;
                                    default:
                                      match = /* tuple */[
                                        "Unknown",
                                        ""
                                      ];
                                  }
                                  var suffix = match[1];
                                  var title = match[0];
                                  return React.createElement("a", {
                                              key: title,
                                              className: tabClasses(url, suffix),
                                              href: "/courses/" + (currentCourseId + ("/" + suffix))
                                            }, title);
                                }), List.append(/* :: */[
                                    "curriculum",
                                    /* [] */0
                                  ], additionalLinks))))) : null);
}

var Course = /* alias */0;

var make = StudentCourse__Header;

exports.str = str;
exports.Course = Course;
exports.courseOptions = courseOptions;
exports.courseDropdown = courseDropdown;
exports.courseNameContainerClasses = courseNameContainerClasses;
exports.renderCourseSelector = renderCourseSelector;
exports.tabClasses = tabClasses;
exports.make = make;
/*  Not a pure module */

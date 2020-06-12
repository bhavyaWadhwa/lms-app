// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Dropdown = require("../../../shared/components/Dropdown.bs.js");
var ListUtils = require("../../../shared/utils/ListUtils.bs.js");
var SchoolAdminNavbar__Course = require("../types/SchoolAdminNavbar__Course.bs.js");

function str(prim) {
  return prim;
}

function selected(currentCourse) {
  return React.createElement("button", {
              className: "border-b border-gray-400 rounded w-full appearance-none flex items-center justify-between hover:bg-primary-100 hover:text-primary-500 focus:outline-none focus:bg-white focus:text-primary-500 font-semibold relative px-2 py-2 rounded w-full",
              title: SchoolAdminNavbar__Course.name(currentCourse)
            }, React.createElement("span", {
                  className: "w-5/6 flex items-center"
                }, React.createElement("i", {
                      className: "fas fa-book"
                    }), React.createElement("span", {
                      className: "truncate ml-2 text-left"
                    }, SchoolAdminNavbar__Course.name(currentCourse))), React.createElement("span", {
                  className: "w-1/6 text-right"
                }, React.createElement("i", {
                      className: "fas fa-chevron-down text-sm"
                    })));
}

function contents(courses, currentCourse) {
  return $$Array.of_list(List.map((function (course) {
                    return React.createElement("a", {
                                key: SchoolAdminNavbar__Course.id(course),
                                className: "block px-4 py-3 text-xs font-semibold text-gray-900 border-b border-gray-200 bg-white hover:text-primary-500 hover:bg-gray-200 w-40 truncate",
                                href: "/school/courses/" + (SchoolAdminNavbar__Course.id(course) + "/curriculum")
                              }, SchoolAdminNavbar__Course.name(course));
                  }), List.filter((function (course) {
                          return SchoolAdminNavbar__Course.id(course) !== SchoolAdminNavbar__Course.id(currentCourse);
                        }))(SchoolAdminNavbar__Course.sort(courses))));
}

function SchoolAdminNavbar__CourseDropdown(Props) {
  var courses = Props.courses;
  var currentCourseId = Props.currentCourseId;
  var currentCourse = ListUtils.unsafeFind((function (course) {
          return SchoolAdminNavbar__Course.id(course) === currentCourseId;
        }), "Could not find currentCourse with ID " + currentCourseId, courses);
  return React.createElement(Dropdown.make, {
              selected: selected(currentCourse),
              contents: contents(courses, currentCourse),
              className: "w-full md:text-base"
            });
}

var make = SchoolAdminNavbar__CourseDropdown;

exports.str = str;
exports.selected = selected;
exports.contents = contents;
exports.make = make;
/* react Not a pure module */

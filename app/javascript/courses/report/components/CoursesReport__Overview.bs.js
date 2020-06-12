// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Avatar = require("../../../shared/Avatar.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var ArrayUtils = require("../../../shared/utils/ArrayUtils.bs.js");
var SkeletonLoading = require("../../../shared/components/SkeletonLoading.bs.js");
var CoursesReport__Coach = require("../types/CoursesReport__Coach.bs.js");
var CoursesReport__Level = require("../types/CoursesReport__Level.bs.js");
var CoursesStudents__TeamCoaches = require("../../students/components/CoursesStudents__TeamCoaches.bs.js");
var CoursesReport__StudentOverview = require("../types/CoursesReport__StudentOverview.bs.js");
var CoursesReport__EvaluationCriterion = require("../types/CoursesReport__EvaluationCriterion.bs.js");

((require("./CoursesReport__Overview.css")));

function str(prim) {
  return prim;
}

function avatar(avatarUrl, name) {
  var avatarClasses = "w-8 h-8 md:w-10 md:h-10 text-xs border border-gray-400 rounded-full overflow-hidden flex-shrink-0 object-cover";
  if (avatarUrl !== undefined) {
    return React.createElement("img", {
                className: avatarClasses,
                src: avatarUrl
              });
  } else {
    return React.createElement(Avatar.make, {
                name: name,
                className: avatarClasses
              });
  }
}

function userInfo(key, avatarUrl, name, title) {
  return React.createElement("div", {
              key: key,
              className: "w-full md:w-1/2 shadow rounded-lg p-4 flex items-center mt-2 bg-white"
            }, CoursesStudents__TeamCoaches.avatar(undefined, avatarUrl, name), React.createElement("div", {
                  className: "ml-2 md:ml-3"
                }, React.createElement("div", {
                      className: "text-sm font-semibold"
                    }, name), React.createElement("div", {
                      className: "text-xs"
                    }, title)));
}

function coachInfo(coaches) {
  if (ArrayUtils.isNotEmpty(coaches)) {
    return React.createElement("div", {
                className: "mb-8"
              }, React.createElement("h6", {
                    className: "font-semibold"
                  }, "Personal Coaches"), $$Array.mapi((function (index, coach) {
                      return userInfo(String(index), CoursesReport__Coach.avatarUrl(coach), CoursesReport__Coach.name(coach), CoursesReport__Coach.title(coach));
                    }), coaches));
  } else {
    return null;
  }
}

function doughnutChart(color, percentage) {
  return React.createElement("svg", {
              className: "courses-report-overview__doughnut-chart " + color,
              viewBox: "0 0 36 36"
            }, React.createElement("path", {
                  className: "courses-report-overview__doughnut-chart-bg",
                  d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                }), React.createElement("path", {
                  className: "courses-report-overview__doughnut-chart-stroke",
                  d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
                  strokeDasharray: percentage + ", 100"
                }), React.createElement("text", {
                  className: "courses-report-overview__doughnut-chart-text font-semibold",
                  x: "50%",
                  y: "58%"
                }, percentage + "%"));
}

function targetsCompletionStatus(targetsCompleted, totalTargets) {
  var targetCompletionPercent = String(targetsCompleted / totalTargets * 100.0 | 0);
  return React.createElement("div", {
              "aria-label": "target-completion-status",
              className: "w-full lg:w-1/2 px-2"
            }, React.createElement("div", {
                  className: "courses-report-overview__doughnut-chart-container bg-white"
                }, React.createElement("div", undefined, doughnutChart("purple", targetCompletionPercent)), React.createElement("div", {
                      className: "ml-4"
                    }, React.createElement("p", {
                          className: "text-sm font-semibold mt-3"
                        }, "Total Targets Completed"), React.createElement("p", {
                          className: "text-sm text-gray-700 font-semibold mt-1"
                        }, String(targetsCompleted | 0) + ("/" + (String(totalTargets | 0) + " Targets"))))));
}

function quizPerformanceChart(averageQuizScore, quizzesAttempted) {
  if (averageQuizScore !== undefined) {
    return React.createElement("div", {
                "aria-label": "quiz-performance-chart",
                className: "w-full lg:w-1/2 px-2 mt-2 lg:mt-0"
              }, React.createElement("div", {
                    className: "courses-report-overview__doughnut-chart-container bg-white"
                  }, React.createElement("div", undefined, doughnutChart("pink", String(averageQuizScore | 0))), React.createElement("div", {
                        className: "ml-4"
                      }, React.createElement("p", {
                            className: "text-sm font-semibold mt-3"
                          }, "Average Quiz Score"), React.createElement("p", {
                            className: "text-sm text-gray-700 font-semibold leading-tight mt-1"
                          }, quizzesAttempted + " Quizzes Attempted"))));
  } else {
    return null;
  }
}

function averageGradeCharts(evaluationCriteria, averageGrades) {
  return $$Array.map((function (grade) {
                var criterion = CoursesReport__StudentOverview.evaluationCriterionForGrade(grade, evaluationCriteria);
                var passGrade = CoursesReport__EvaluationCriterion.passGrade(criterion);
                var averageGrade = CoursesReport__StudentOverview.gradeValue(grade);
                return React.createElement("div", {
                            key: CoursesReport__EvaluationCriterion.id(criterion),
                            "aria-label": "average-grade-for-criterion-" + CoursesReport__EvaluationCriterion.id(criterion),
                            className: "flex w-full lg:w-1/3 px-2 mt-2"
                          }, React.createElement("div", {
                                className: "courses-report-overview__pie-chart-container"
                              }, React.createElement("div", {
                                    className: "flex px-5 pt-4 text-center items-center"
                                  }, React.createElement("svg", {
                                        className: "courses-report-overview__pie-chart " + (
                                          averageGrade < passGrade ? "courses-report-overview__pie-chart--fail" : "courses-report-overview__pie-chart--pass"
                                        ),
                                        viewBox: "0 0 32 32"
                                      }, React.createElement("circle", {
                                            className: "courses-report-overview__pie-chart-circle " + (
                                              averageGrade < passGrade ? "courses-report-overview__pie-chart-circle--fail" : "courses-report-overview__pie-chart-circle--pass"
                                            ),
                                            cx: "16",
                                            cy: "16",
                                            r: "16",
                                            strokeDasharray: CoursesReport__StudentOverview.gradeAsPercentage(grade, criterion) + ", 100"
                                          })), React.createElement("span", {
                                        className: "ml-3 text-lg font-semibold"
                                      }, grade.grade.toString() + ("/" + String(criterion.maxGrade)))), React.createElement("p", {
                                    className: "text-sm font-semibold px-5 pt-3 pb-4"
                                  }, CoursesReport__EvaluationCriterion.name(criterion))));
              }), averageGrades);
}

function studentLevelClasses(levelNumber, levelCompleted, currentLevelNumber) {
  var reached = Caml_obj.caml_lessequal(levelNumber, currentLevelNumber) ? "courses-report-overview__student-level--reached" : "";
  var current = Caml_obj.caml_equal(levelNumber, currentLevelNumber) ? " courses-report-overview__student-level--current" : "";
  var completed = levelCompleted ? " courses-report-overview__student-level--completed" : "";
  return reached + (current + completed);
}

function levelProgressBar(levelId, levels, levelsCompleted) {
  var applicableLevels = levels.filter((function (level) {
          return CoursesReport__Level.number(level) !== 0;
        }));
  var courseCompleted = $$Array.for_all((function (level) {
          return $$Array.mem(CoursesReport__Level.id(level), levelsCompleted);
        }), applicableLevels);
  var currentLevelNumber = CoursesReport__Level.number(ArrayUtils.unsafeFind((function (level) {
              return CoursesReport__Level.id(level) === levelId;
            }), "Unable to find level with id" + (levelId + "in CoursesReport__Overview"), applicableLevels));
  return React.createElement("div", {
              className: "mb-8"
            }, React.createElement("div", {
                  className: "flex justify-between items-end"
                }, React.createElement("h6", {
                      className: "text-sm font-semibold"
                    }, "Level Progress"), courseCompleted ? React.createElement("p", {
                        className: "text-green-600 font-semibold"
                      }, "🎉", React.createElement("span", {
                            className: "text-xs ml-px"
                          }, "Course Completed!")) : null), React.createElement("div", {
                  className: "h-14 flex items-center shadow bg-white rounded-lg px-4 py-2 mt-1"
                }, React.createElement("ul", {
                      className: "courses-report-overview__student-level-progress flex w-full " + (
                        courseCompleted ? "courses-report-overview__student-level-progress--completed" : ""
                      )
                    }, $$Array.map((function (level) {
                            var levelNumber = CoursesReport__Level.number(level);
                            var levelCompleted = $$Array.mem(CoursesReport__Level.id(level), levelsCompleted);
                            return React.createElement("li", {
                                        key: CoursesReport__Level.id(level),
                                        className: "flex-1 courses-report-overview__student-level " + studentLevelClasses(levelNumber, levelCompleted, currentLevelNumber)
                                      }, React.createElement("span", {
                                            className: "courses-report-overview__student-level-count"
                                          }, String(levelNumber)));
                          }), CoursesReport__Level.sort(applicableLevels)))));
}

function CoursesReport__Overview(Props) {
  var overviewData = Props.overviewData;
  var levels = Props.levels;
  var coaches = Props.coaches;
  var tmp;
  if (overviewData) {
    var overview = overviewData[0];
    tmp = React.createElement("div", {
          className: "flex flex-col"
        }, React.createElement("div", {
              className: "w-full"
            }, levelProgressBar(CoursesReport__StudentOverview.levelId(overview), levels, CoursesReport__StudentOverview.completedLevelIds(overview)), React.createElement("div", {
                  className: "mb-8"
                }, React.createElement("h6", {
                      className: "font-semibold"
                    }, "Targets Overview"), React.createElement("div", {
                      className: "flex -mx-2 flex-wrap mt-2"
                    }, targetsCompletionStatus(CoursesReport__StudentOverview.targetsCompleted(overview), CoursesReport__StudentOverview.totalTargets(overview)), quizPerformanceChart(CoursesReport__StudentOverview.averageQuizScore(overview), CoursesReport__StudentOverview.quizzesAttempted(overview)))), ArrayUtils.isNotEmpty(CoursesReport__StudentOverview.averageGrades(overview)) ? React.createElement("div", {
                    className: "mb-8"
                  }, React.createElement("h6", {
                        className: "font-semibold"
                      }, "Average Grades"), React.createElement("div", {
                        className: "flex -mx-2 flex-wrap"
                      }, averageGradeCharts(CoursesReport__StudentOverview.evaluationCriteria(overview), CoursesReport__StudentOverview.averageGrades(overview)))) : null, coachInfo(coaches)));
  } else {
    tmp = React.createElement("div", {
          className: "flex flex-col"
        }, React.createElement("div", {
              className: "w-full bg-white p-8"
            }, SkeletonLoading.heading(/* () */0), SkeletonLoading.multiple(2, SkeletonLoading.paragraph(/* () */0)), SkeletonLoading.multiple(2, SkeletonLoading.profileCard(/* () */0))));
  }
  return React.createElement("div", {
              className: "max-w-3xl mx-auto"
            }, tmp);
}

var make = CoursesReport__Overview;

exports.str = str;
exports.avatar = avatar;
exports.userInfo = userInfo;
exports.coachInfo = coachInfo;
exports.doughnutChart = doughnutChart;
exports.targetsCompletionStatus = targetsCompletionStatus;
exports.quizPerformanceChart = quizPerformanceChart;
exports.averageGradeCharts = averageGradeCharts;
exports.studentLevelClasses = studentLevelClasses;
exports.levelProgressBar = levelProgressBar;
exports.make = make;
/*  Not a pure module */

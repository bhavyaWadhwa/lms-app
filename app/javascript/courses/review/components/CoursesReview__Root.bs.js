// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Sorter = require("../../../shared/components/Sorter.bs.js");
var UserProxy = require("../../../shared/types/UserProxy.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var MultiselectDropdown = require("../../../packages/multiselect-dropdown/src/components/MultiselectDropdown.bs.js");
var CoursesReview__Level = require("../types/CoursesReview__Level.bs.js");
var CoursesReview__Submissions = require("../types/CoursesReview__Submissions.bs.js");
var CoursesReview__SubmissionsTab = require("./CoursesReview__SubmissionsTab.bs.js");
var CoursesReview__IndexSubmission = require("../types/CoursesReview__IndexSubmission.bs.js");
var CoursesReview__OverlaySubmission = require("../types/CoursesReview__OverlaySubmission.bs.js");
var CoursesReview__SubmissionOverlay = require("./CoursesReview__SubmissionOverlay.bs.js");

((require("./CoursesReview__Root.css")));

function str(prim) {
  return prim;
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* DeselectLevel */0 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: undefined,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* ReloadSubmissions */1 :
          return {
                  pendingSubmissions: /* Unloaded */0,
                  reviewedSubmissions: /* Unloaded */0,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: new Date()
                };
      case /* SelectPendingTab */2 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: /* Pending */-113393609,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* SelectReviewedTab */3 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: /* Reviewed */544019991,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* DeselectCoach */4 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: undefined,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      
    }
  } else {
    switch (action.tag | 0) {
      case /* SelectLevel */0 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: action[0],
                  selectedCoach: state.selectedCoach,
                  filterString: "",
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* SetSubmissions */1 :
          var totalCount = action[4];
          var endCursor = action[3];
          var submissions = action[0];
          var filter = CoursesReview__Submissions.makeFilter(state.selectedLevel, state.selectedCoach);
          var updatedSubmissions;
          var exit = 0;
          if (action[2] && endCursor !== undefined) {
            updatedSubmissions = CoursesReview__Submissions.partiallyLoaded(submissions, filter, state.sortDirection, totalCount, endCursor);
          } else {
            exit = 1;
          }
          if (exit === 1) {
            updatedSubmissions = CoursesReview__Submissions.fullyLoaded(submissions, filter, state.sortDirection, totalCount);
          }
          if (action[1] >= 544019991) {
            return {
                    pendingSubmissions: state.pendingSubmissions,
                    reviewedSubmissions: updatedSubmissions,
                    selectedTab: state.selectedTab,
                    selectedLevel: state.selectedLevel,
                    selectedCoach: state.selectedCoach,
                    filterString: state.filterString,
                    sortBy: state.sortBy,
                    sortDirection: state.sortDirection,
                    reloadAt: state.reloadAt
                  };
          } else {
            return {
                    pendingSubmissions: updatedSubmissions,
                    reviewedSubmissions: state.reviewedSubmissions,
                    selectedTab: state.selectedTab,
                    selectedLevel: state.selectedLevel,
                    selectedCoach: state.selectedCoach,
                    filterString: state.filterString,
                    sortBy: state.sortBy,
                    sortDirection: state.sortDirection,
                    reloadAt: state.reloadAt
                  };
          }
      case /* UpdateReviewedSubmission */2 :
          var submission = action[0];
          var filter$1 = CoursesReview__Submissions.makeFilter(state.selectedLevel, state.selectedCoach);
          var match = state.reviewedSubmissions;
          var tmp;
          if (typeof match === "number") {
            tmp = /* Unloaded */0;
          } else if (match.tag) {
            var match$1 = match[0];
            tmp = CoursesReview__Submissions.fullyLoaded(CoursesReview__IndexSubmission.replace(submission, match$1.submissions), filter$1, state.sortDirection, match$1.totalCount);
          } else {
            var match$2 = match[0];
            tmp = CoursesReview__Submissions.partiallyLoaded(CoursesReview__IndexSubmission.replace(submission, match$2.submissions), filter$1, state.sortDirection, match$2.totalCount, match[1]);
          }
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: tmp,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* SelectCoach */3 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: action[0],
                  filterString: "",
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* UpdateFilterString */4 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: action[0],
                  sortBy: state.sortBy,
                  sortDirection: state.sortDirection,
                  reloadAt: state.reloadAt
                };
      case /* UpdateSortDirection */5 :
          return {
                  pendingSubmissions: state.pendingSubmissions,
                  reviewedSubmissions: state.reviewedSubmissions,
                  selectedTab: state.selectedTab,
                  selectedLevel: state.selectedLevel,
                  selectedCoach: state.selectedCoach,
                  filterString: state.filterString,
                  sortBy: state.sortBy,
                  sortDirection: action[0],
                  reloadAt: state.reloadAt
                };
      case /* SyncSubmissionStatus */6 :
          var overlaySubmission = action[0];
          var skipReload = OptionUtils.mapWithDefault((function (indexSubmission) {
                  return CoursesReview__IndexSubmission.statusEq(overlaySubmission, indexSubmission);
                }), true, Caml_option.undefined_to_opt($$Array.append(CoursesReview__Submissions.toArray(state.reviewedSubmissions), CoursesReview__Submissions.toArray(state.pendingSubmissions)).find((function (indexSubmission) {
                          return CoursesReview__IndexSubmission.id(indexSubmission) === CoursesReview__OverlaySubmission.id(overlaySubmission);
                        }))));
          if (skipReload) {
            return state;
          } else {
            return {
                    pendingSubmissions: /* Unloaded */0,
                    reviewedSubmissions: /* Unloaded */0,
                    selectedTab: state.selectedTab,
                    selectedLevel: state.selectedLevel,
                    selectedCoach: state.selectedCoach,
                    filterString: state.filterString,
                    sortBy: state.sortBy,
                    sortDirection: state.sortDirection,
                    reloadAt: new Date()
                  };
          }
      
    }
  }
}

function computeInitialState(currentTeamCoach) {
  return {
          pendingSubmissions: /* Unloaded */0,
          reviewedSubmissions: /* Unloaded */0,
          selectedTab: /* Pending */-113393609,
          selectedLevel: undefined,
          selectedCoach: currentTeamCoach,
          filterString: "",
          sortBy: {
            criterion: "Submitted At",
            criterionType: /* Number */-703661335
          },
          sortDirection: /* Descending */235215128,
          reloadAt: new Date()
        };
}

function openOverlay(submissionId, $$event) {
  $$event.preventDefault();
  return ReasonReactRouter.push("/submissions/" + submissionId);
}

function dropdownElementClasses(level, selectedLevel) {
  return "p-3 w-full text-left font-semibold focus:outline-none " + (
          selectedLevel !== undefined ? (
              level !== undefined && CoursesReview__Level.id(level) === CoursesReview__Level.id(selectedLevel) ? "bg-gray-200 text-primary-500" : ""
            ) : (
              level !== undefined ? "" : "bg-gray-200 text-primary-500"
            )
        );
}

function buttonClasses(selected) {
  return "w-1/2 md:w-auto py-2 px-3 md:px-6 font-semibold text-sm focus:outline-none " + (
          selected ? "bg-primary-100 shadow-inner text-primary-500" : "bg-white shadow-md hover:shadow hover:text-primary-500 hover:bg-gray-100"
        );
}

function label(t) {
  if (t.tag) {
    return "Assigned to";
  } else {
    return "Level " + String(CoursesReview__Level.number(t[0]));
  }
}

function value(t) {
  if (t.tag) {
    var coach = t[0];
    if (UserProxy.id(coach) === t[1]) {
      return "Me";
    } else {
      return UserProxy.name(coach);
    }
  } else {
    return CoursesReview__Level.name(t[0]);
  }
}

function searchString(t) {
  if (t.tag) {
    var coach = t[0];
    if (UserProxy.id(coach) === t[1]) {
      return UserProxy.name(coach) + " assigned to me";
    } else {
      return "assigned to " + UserProxy.name(coach);
    }
  } else {
    var level = t[0];
    return "level " + (String(CoursesReview__Level.number(level)) + (" " + CoursesReview__Level.name(level)));
  }
}

function color(_t) {
  return "gray";
}

function level(level$1) {
  return /* Level */Block.__(0, [level$1]);
}

function assignedToCoach(coach, currentCoachId) {
  return /* AssignedToCoach */Block.__(1, [
            coach,
            currentCoachId
          ]);
}

var Selectable = {
  label: label,
  value: value,
  searchString: searchString,
  color: color,
  level: level,
  assignedToCoach: assignedToCoach
};

var Multiselect = MultiselectDropdown.Make(Selectable);

function unselected(levels, coaches, currentCoachId, state) {
  var unselectedLevels = $$Array.map(level, levels.filter((function (level) {
              return OptionUtils.mapWithDefault((function (selectedLevel) {
                            return CoursesReview__Level.id(level) !== CoursesReview__Level.id(selectedLevel);
                          }), true, state.selectedLevel);
            })));
  var unselectedCoaches = $$Array.map((function (coach) {
          return /* AssignedToCoach */Block.__(1, [
                    coach,
                    currentCoachId
                  ]);
        }), coaches.filter((function (coach) {
              return OptionUtils.mapWithDefault((function (selectedCoach) {
                            return UserProxy.id(coach) !== UserProxy.id(selectedCoach);
                          }), true, state.selectedCoach);
            })));
  return $$Array.append(unselectedCoaches, unselectedLevels);
}

function selected(state, currentCoachId) {
  var selectedLevel = OptionUtils.mapWithDefault((function (selectedLevel) {
          return [/* Level */Block.__(0, [selectedLevel])];
        }), [], state.selectedLevel);
  var selectedCoach = OptionUtils.mapWithDefault((function (selectedCoach) {
          return [/* AssignedToCoach */Block.__(1, [
                      selectedCoach,
                      currentCoachId
                    ])];
        }), [], state.selectedCoach);
  return $$Array.append(selectedCoach, selectedLevel);
}

function onSelectFilter(send, selectable) {
  if (selectable.tag) {
    return Curry._1(send, /* SelectCoach */Block.__(3, [selectable[0]]));
  } else {
    return Curry._1(send, /* SelectLevel */Block.__(0, [selectable[0]]));
  }
}

function onDeselectFilter(send, selectable) {
  if (selectable.tag) {
    return Curry._1(send, /* DeselectCoach */4);
  } else {
    return Curry._1(send, /* DeselectLevel */0);
  }
}

function filterPlaceholder(state) {
  var match = state.selectedLevel;
  var match$1 = state.selectedCoach;
  if (match !== undefined) {
    if (match$1 !== undefined) {
      return "Filter by another level";
    } else {
      return "Filter by another level, or only show submissions assigned to a coach";
    }
  } else if (match$1 !== undefined) {
    return "Filter by level";
  } else {
    return "Filter by level, or only show submissions assigned to a coach";
  }
}

function restoreFilterNotice(send, currentCoach, message) {
  return React.createElement("div", {
              className: "mb-4 text-sm italic flex flex-col md:flex-row items-center justify-between p-3 border border-gray-300 bg-white rounded-lg"
            }, React.createElement("span", undefined, message), React.createElement("button", {
                  className: "px-2 py-1 rounded text-xs overflow-hidden border border-gray-300 bg-gray-200 text-gray-800 border-gray-300 bg-gray-200 hover:bg-gray-300 mt-1 md:mt-0",
                  onClick: (function (param) {
                      return Curry._1(send, /* SelectCoach */Block.__(3, [currentCoach]));
                    })
                }, "Assigned to: Me", React.createElement("i", {
                      className: "fas fa-level-up-alt ml-2"
                    })));
}

function restoreAssignedToMeFilter(state, send, currentTeamCoach) {
  return OptionUtils.mapWithDefault((function (currentCoach) {
                var match = state.selectedCoach;
                if (match !== undefined) {
                  var selectedCoach = match;
                  if (UserProxy.id(selectedCoach) === UserProxy.id(currentCoach)) {
                    return null;
                  } else {
                    return restoreFilterNotice(send, currentCoach, "Now showing submissions assigned to " + (UserProxy.name(selectedCoach) + "."));
                  }
                } else {
                  return restoreFilterNotice(send, currentCoach, "Now showing submissions from all students in this course.");
                }
              }), null, currentTeamCoach);
}

function filterSubmissions(selectedLevel, selectedCoach, submissions) {
  var levelFiltered = OptionUtils.mapWithDefault((function (level) {
          return submissions.filter((function (l) {
                        return CoursesReview__IndexSubmission.levelId(l) === CoursesReview__Level.id(level);
                      }));
        }), submissions, selectedLevel);
  return OptionUtils.mapWithDefault((function (coach) {
                return levelFiltered.filter((function (l) {
                              return $$Array.mem(UserProxy.id(coach), CoursesReview__IndexSubmission.coachIds(l));
                            }));
              }), levelFiltered, selectedCoach);
}

function criterion(t) {
  return t.criterion;
}

function criterionType(t) {
  return t.criterionType;
}

var Sortable = {
  criterion: criterion,
  criterionType: criterionType
};

var SubmissionsSorter = Sorter.Make(Sortable);

function submissionsSorter(state, send) {
  var criteria = [{
      criterion: "Submitted At",
      criterionType: /* Number */-703661335
    }];
  return React.createElement("div", {
              "aria-label": "Change submissions sorting",
              className: "flex-shrink-0 mt-3 md:mt-0 md:ml-2"
            }, React.createElement("label", {
                  className: "block text-tiny font-semibold uppercase"
                }, "Sort by:"), React.createElement(SubmissionsSorter.make, {
                  criteria: criteria,
                  selectedCriterion: state.sortBy,
                  direction: state.sortDirection,
                  onDirectionChange: (function (sortDirection) {
                      return Curry._1(send, /* UpdateSortDirection */Block.__(5, [sortDirection]));
                    }),
                  onCriterionChange: (function (param) {
                      return /* () */0;
                    })
                }));
}

function displayedSubmissions(state) {
  var match = state.selectedTab;
  if (match >= 544019991) {
    return state.reviewedSubmissions;
  } else {
    return state.pendingSubmissions;
  }
}

function submissionsCount(submissions) {
  return OptionUtils.mapWithDefault((function (count) {
                return React.createElement("span", {
                            className: "course-review__status-tab-badge ml-2 text-white text-xs bg-red-500 w-auto h-5 px-1 inline-flex items-center justify-center rounded-full"
                          }, String(count));
              }), null, CoursesReview__Submissions.totalCount(submissions));
}

function CoursesReview__Root(Props) {
  var levels = Props.levels;
  var courseId = Props.courseId;
  var teamCoaches = Props.teamCoaches;
  var currentCoach = Props.currentCoach;
  var match = React.useState((function () {
          if (Belt_Array.some(teamCoaches, (function (coach) {
                    return UserProxy.id(coach) === UserProxy.id(currentCoach);
                  }))) {
            return currentCoach;
          }
          
        }));
  var currentTeamCoach = match[0];
  var match$1 = React.useReducer(reducer, currentTeamCoach, computeInitialState);
  var send = match$1[1];
  var state = match$1[0];
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match$2 = url.path;
  var tmp;
  if (match$2 && match$2[0] === "submissions") {
    var match$3 = match$2[1];
    if (match$3) {
      var match$4 = match$3[1];
      tmp = match$4 && match$4[0] === "review" && !match$4[1] ? React.createElement(CoursesReview__SubmissionOverlay.make, {
              courseId: courseId,
              submissionId: match$3[0],
              teamCoaches: teamCoaches,
              currentCoach: currentCoach,
              syncSubmissionCB: (function (submission) {
                  return Curry._1(send, /* SyncSubmissionStatus */Block.__(6, [submission]));
                }),
              removePendingSubmissionCB: (function (param) {
                  return Curry._1(send, /* ReloadSubmissions */1);
                }),
              updateReviewedSubmissionCB: (function (submission) {
                  return Curry._1(send, /* UpdateReviewedSubmission */Block.__(2, [submission]));
                })
            }) : null;
    } else {
      tmp = null;
    }
  } else {
    tmp = null;
  }
  return React.createElement("div", undefined, tmp, React.createElement("div", {
                  className: "bg-gray-100 pt-9 pb-8 px-3 -mt-7"
                }, React.createElement("div", {
                      className: "bg-gray-100 static md:sticky md:top-0"
                    }, React.createElement("div", {
                          className: "max-w-3xl mx-auto"
                        }, React.createElement("div", {
                              className: "flex flex-col md:flex-row items-end lg:items-center py-4"
                            }, React.createElement("div", {
                                  "aria-label": "status-tab",
                                  className: "course-review__status-tab w-full md:w-auto flex rounded-lg border border-gray-400"
                                }, React.createElement("button", {
                                      className: buttonClasses(state.selectedTab === /* Pending */-113393609),
                                      onClick: (function (param) {
                                          return Curry._1(send, /* SelectPendingTab */2);
                                        })
                                    }, "Pending", submissionsCount(state.pendingSubmissions)), React.createElement("button", {
                                      className: buttonClasses(state.selectedTab === /* Reviewed */544019991),
                                      onClick: (function (param) {
                                          return Curry._1(send, /* SelectReviewedTab */3);
                                        })
                                    }, "Reviewed"))), React.createElement("div", {
                              className: "md:flex w-full items-start pb-4"
                            }, React.createElement("div", {
                                  className: "flex-1"
                                }, React.createElement("label", {
                                      className: "block text-tiny font-semibold uppercase"
                                    }, "Filter by:"), React.createElement(Multiselect.make, {
                                      id: "filter",
                                      placeholder: filterPlaceholder(state),
                                      onChange: (function (filterString) {
                                          return Curry._1(send, /* UpdateFilterString */Block.__(4, [filterString]));
                                        }),
                                      value: state.filterString,
                                      unselected: unselected(levels, teamCoaches, UserProxy.id(currentCoach), state),
                                      selected: selected(state, UserProxy.id(currentCoach)),
                                      onSelect: (function (param) {
                                          return onSelectFilter(send, param);
                                        }),
                                      onDeselect: (function (param) {
                                          return onDeselectFilter(send, param);
                                        })
                                    })), submissionsSorter(state, send)))), React.createElement("div", {
                      className: "max-w-3xl mx-auto"
                    }, restoreAssignedToMeFilter(state, send, currentTeamCoach)), React.createElement("div", {
                      className: "max-w-3xl mx-auto"
                    }, React.createElement(CoursesReview__SubmissionsTab.make, {
                          courseId: courseId,
                          selectedTab: state.selectedTab,
                          selectedLevel: state.selectedLevel,
                          selectedCoach: state.selectedCoach,
                          sortDirection: state.sortDirection,
                          levels: levels,
                          submissions: displayedSubmissions(state),
                          updateSubmissionsCB: (function (submissions, selectedTab, hasNextPage, totalCount, endCursor) {
                              return Curry._1(send, /* SetSubmissions */Block.__(1, [
                                            submissions,
                                            selectedTab,
                                            hasNextPage,
                                            endCursor,
                                            totalCount
                                          ]));
                            }),
                          reloadAt: state.reloadAt
                        }))));
}

var make = CoursesReview__Root;

exports.str = str;
exports.reducer = reducer;
exports.computeInitialState = computeInitialState;
exports.openOverlay = openOverlay;
exports.dropdownElementClasses = dropdownElementClasses;
exports.buttonClasses = buttonClasses;
exports.Selectable = Selectable;
exports.Multiselect = Multiselect;
exports.unselected = unselected;
exports.selected = selected;
exports.onSelectFilter = onSelectFilter;
exports.onDeselectFilter = onDeselectFilter;
exports.filterPlaceholder = filterPlaceholder;
exports.restoreFilterNotice = restoreFilterNotice;
exports.restoreAssignedToMeFilter = restoreAssignedToMeFilter;
exports.filterSubmissions = filterSubmissions;
exports.Sortable = Sortable;
exports.SubmissionsSorter = SubmissionsSorter;
exports.submissionsSorter = submissionsSorter;
exports.displayedSubmissions = displayedSubmissions;
exports.submissionsCount = submissionsCount;
exports.make = make;
/*  Not a pure module */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Avatar = require("../../../shared/Avatar.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var DomUtils = require("../../../shared/utils/DomUtils.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var SchoolAdmin = require("../../types/SchoolAdmin.bs.js");
var GraphqlQuery = require("../../../shared/utils/GraphqlQuery.bs.js");
var DisablingCover = require("../../../shared/components/DisablingCover.bs.js");
var SchoolAdmins__Form = require("./SchoolAdmins__Form.bs.js");
var SchoolAdmin__EditorDrawer = require("../../components/SchoolAdmin__EditorDrawer.bs.js");

function str(prim) {
  return prim;
}

var ppx_printed_query = "mutation DeleteSchoolAdminMutation($id: ID!)  {\ndeleteSchoolAdmin(id: $id)  {\nsuccess  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "deleteSchoolAdmin");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "success");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeBoolean(value$3);
      tmp$1 = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$3));
    } else {
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field success on type DeleteSchoolAdminPayload is missing");
    }
    tmp = {
      success: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field deleteSchoolAdmin on type Mutation is missing");
  }
  return {
          deleteSchoolAdmin: tmp
        };
}

function make(id, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([/* tuple */[
                    "id",
                    id
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var id = variables.id;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([/* tuple */[
                    "id",
                    id
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(id, param) {
  return Js_dict.fromArray([/* tuple */[
                  "id",
                  id
                ]].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, id, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([/* tuple */[
                      "id",
                      id
                    ]].filter((function (param) {
                        return !Js_json.test(param[1], /* Null */5);
                      }))));
}

var definition = /* tuple */[
  parse,
  ppx_printed_query,
  definition_002
];

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var DeleteSchoolAdminQuery = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function removeSchoolAdmin(setState, admin, currentSchoolAdminId, $$event) {
  $$event.preventDefault();
  if (window.confirm("Are you sure you want to remove " + (SchoolAdmin.name(admin) + " from the list of admins?"))) {
    Curry._1(setState, (function (state) {
            return {
                    editorAction: state.editorAction,
                    admins: state.admins,
                    deleting: true
                  };
          }));
    (function (eta) {
            return GraphqlQuery.sendQuery(undefined, eta);
          })(make(SchoolAdmin.id(admin), /* () */0)).then((function (response) {
            if (response.deleteSchoolAdmin.success) {
              if (SchoolAdmin.id(admin) === currentSchoolAdminId) {
                DomUtils.redirect("/home");
              } else {
                Curry._1(setState, (function (state) {
                        return {
                                editorAction: state.editorAction,
                                admins: state.admins.filter((function (a) {
                                        return SchoolAdmin.id(a) !== SchoolAdmin.id(admin);
                                      })),
                                deleting: false
                              };
                      }));
              }
            } else {
              Curry._1(setState, (function (state) {
                      return {
                              editorAction: state.editorAction,
                              admins: state.admins,
                              deleting: false
                            };
                    }));
            }
            return Promise.resolve(response);
          }));
    return /* () */0;
  } else {
    return 0;
  }
}

function renderAdmin(currentSchoolAdminId, admin, admins, setState) {
  var match = SchoolAdmin.avatarUrl(admin);
  return React.createElement("div", {
              key: SchoolAdmin.id(admin) + SchoolAdmin.name(admin),
              className: "flex w-1/2 flex-shrink-0 mb-5 px-3"
            }, React.createElement("div", {
                  className: "shadow bg-white rounded-lg flex w-full border border-transparent overflow-hidden hover:border-primary-400 hover:bg-gray-100"
                }, React.createElement("a", {
                      className: "w-full cursor-pointer p-4",
                      onClick: (function (_event) {
                          _event.preventDefault();
                          return Curry._1(setState, (function (state) {
                                        return {
                                                editorAction: /* ShowEditor */[admin],
                                                admins: state.admins,
                                                deleting: state.deleting
                                              };
                                      }));
                        })
                    }, React.createElement("div", {
                          className: "flex"
                        }, React.createElement("span", {
                              className: "mr-4 flex-shrink-0"
                            }, match !== undefined ? React.createElement("img", {
                                    className: "w-10 h-10 rounded-full object-cover",
                                    src: match
                                  }) : React.createElement(Avatar.make, {
                                    name: SchoolAdmin.name(admin),
                                    className: "w-10 h-10 rounded-full"
                                  })), React.createElement("div", {
                              className: "flex flex-col"
                            }, React.createElement("span", {
                                  className: "text-black font-semibold text-sm"
                                }, SchoolAdmin.name(admin)), React.createElement("span", {
                                  className: "text-black font-normal text-xs"
                                }, SchoolAdmin.email(admin))))), admins.length > 1 ? React.createElement("div", {
                        className: "w-10 text-sm course-faculty__list-item-remove text-gray-700 hover:text-gray-900 cursor-pointer flex items-center justify-center hover:bg-gray-200 hover:text-red-600",
                        title: "Delete " + SchoolAdmin.name(admin),
                        onClick: (function (param) {
                            return removeSchoolAdmin(setState, admin, currentSchoolAdminId, param);
                          })
                      }, React.createElement("i", {
                            className: "fas fa-trash-alt"
                          })) : null));
}

function handleUpdate(setState, admin) {
  return Curry._1(setState, (function (state) {
                return {
                        editorAction: /* Hidden */0,
                        admins: SchoolAdmin.update(admin, state.admins),
                        deleting: state.deleting
                      };
              }));
}

function SchoolAdmins__Editor(Props) {
  var currentSchoolAdminId = Props.currentSchoolAdminId;
  var admins = Props.admins;
  var match = React.useState((function () {
          return {
                  editorAction: /* Hidden */0,
                  admins: admins,
                  deleting: false
                };
        }));
  var setState = match[1];
  var state = match[0];
  var match$1 = state.editorAction;
  return React.createElement("div", {
              className: "flex flex-1 h-full overflow-y-scroll bg-gray-100"
            }, React.createElement("div", {
                  className: "flex-1 flex flex-col"
                }, match$1 ? React.createElement(SchoolAdmin__EditorDrawer.make, {
                        closeDrawerCB: (function (param) {
                            return Curry._1(setState, (function (state) {
                                          return {
                                                  editorAction: /* Hidden */0,
                                                  admins: state.admins,
                                                  deleting: state.deleting
                                                };
                                        }));
                          }),
                        children: React.createElement(SchoolAdmins__Form.make, {
                              admin: match$1[0],
                              updateCB: (function (param) {
                                  return handleUpdate(setState, param);
                                })
                            })
                      }) : null, React.createElement(DisablingCover.make, {
                      disabled: state.deleting,
                      message: "Deleting...",
                      children: null
                    }, React.createElement("div", {
                          className: "flex px-6 py-2 items-center justify-between"
                        }, React.createElement("button", {
                              className: "max-w-2xl w-full flex mx-auto items-center justify-center relative bg-white text-primary-500 hover:bg-gray-100 hover:text-primary-600 hover:shadow-lg focus:outline-none border-2 border-gray-400 border-dashed hover:border-primary-300 p-6 rounded-lg mt-8 cursor-pointer",
                              onClick: (function (param) {
                                  return Curry._1(setState, (function (state) {
                                                return {
                                                        editorAction: /* ShowEditor */[undefined],
                                                        admins: state.admins,
                                                        deleting: state.deleting
                                                      };
                                              }));
                                })
                            }, React.createElement("i", {
                                  className: "fas fa-plus-circle"
                                }), React.createElement("h5", {
                                  className: "font-semibold ml-2"
                                }, "Add New Learnmax Admin"))), React.createElement("div", {
                          className: "px-6 pb-4 mt-5 flex"
                        }, React.createElement("div", {
                              className: "max-w-2xl w-full mx-auto"
                            }, React.createElement("div", {
                                  className: "flex -mx-3 flex-wrap"
                                }, $$Array.map((function (admin) {
                                        return renderAdmin(currentSchoolAdminId, admin, state.admins, setState);
                                      }), SchoolAdmin.sort(state.admins))))))));
}

var make$1 = SchoolAdmins__Editor;

exports.str = str;
exports.DeleteSchoolAdminQuery = DeleteSchoolAdminQuery;
exports.removeSchoolAdmin = removeSchoolAdmin;
exports.renderAdmin = renderAdmin;
exports.handleUpdate = handleUpdate;
exports.make = make$1;
/* react Not a pure module */

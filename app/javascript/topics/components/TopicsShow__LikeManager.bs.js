// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var GraphqlQuery = require("../../shared/utils/GraphqlQuery.bs.js");
var TopicsShow__Post = require("../types/TopicsShow__Post.bs.js");

function str(prim) {
  return prim;
}

var ppx_printed_query = "mutation CreatePostLikeMutation($postId: ID!)  {\ncreatePostLike(postId: $postId)  {\nsuccess  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "createPostLike");
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
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field success on type CreatePostLikePayload is missing");
    }
    tmp = {
      success: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field createPostLike on type Mutation is missing");
  }
  return {
          createPostLike: tmp
        };
}

function make(postId, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([/* tuple */[
                    "postId",
                    postId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var postId = variables.postId;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([/* tuple */[
                    "postId",
                    postId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(postId, param) {
  return Js_dict.fromArray([/* tuple */[
                  "postId",
                  postId
                ]].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, postId, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([/* tuple */[
                      "postId",
                      postId
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

var CreatePostLikeQuery = {
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

var ppx_printed_query$1 = "mutation DeletePostLikeMutation($postId: ID!)  {\ndeletePostLike(postId: $postId)  {\nsuccess  \n}\n\n}\n";

function parse$1(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "deletePostLike");
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
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field success on type DeletePostLikePayload is missing");
    }
    tmp = {
      success: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field deletePostLike on type Mutation is missing");
  }
  return {
          deletePostLike: tmp
        };
}

function make$1(postId, param) {
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([/* tuple */[
                    "postId",
                    postId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var postId = variables.postId;
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([/* tuple */[
                    "postId",
                    postId
                  ]].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeVariables$1(postId, param) {
  return Js_dict.fromArray([/* tuple */[
                  "postId",
                  postId
                ]].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002$1(graphql_ppx_use_json_variables_fn, postId, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([/* tuple */[
                      "postId",
                      postId
                    ]].filter((function (param) {
                        return !Js_json.test(param[1], /* Null */5);
                      }))));
}

var definition$1 = /* tuple */[
  parse$1,
  ppx_printed_query$1,
  definition_002$1
];

function ret_type$1(f) {
  return { };
}

var MT_Ret$1 = { };

var DeletePostLikeQuery = {
  ppx_printed_query: ppx_printed_query$1,
  query: ppx_printed_query$1,
  parse: parse$1,
  make: make$1,
  makeWithVariables: makeWithVariables$1,
  makeVariables: makeVariables$1,
  definition: definition$1,
  ret_type: ret_type$1,
  MT_Ret: MT_Ret$1
};

function iconClasses(liked, saving) {
  return "text-lg" + (
          saving ? " fas fa-thumbs-up cursor-pointer text-primary-200" : (
              liked ? " fas fa-thumbs-up cursor-pointer text-primary-400" : " far fa-thumbs-up cursor-pointer"
            )
        );
}

function handlePostLike(saving, liked, setSaving, postId, removeLikeCB, handleCreateResponse, addLikeCB, $$event) {
  $$event.preventDefault();
  if (saving) {
    return /* () */0;
  } else {
    Curry._1(setSaving, (function (param) {
            return true;
          }));
    if (liked) {
      (function (eta) {
                return GraphqlQuery.sendQuery(undefined, eta);
              })(make$1(postId, /* () */0)).then((function (response) {
                if (response.deletePostLike.success) {
                  Curry._1(removeLikeCB, /* () */0);
                  Curry._1(setSaving, (function (param) {
                          return false;
                        }));
                } else {
                  Curry._1(setSaving, (function (param) {
                          return false;
                        }));
                }
                return Promise.resolve(/* () */0);
              })).catch((function (param) {
              Curry._1(setSaving, (function (param) {
                      return false;
                    }));
              return Promise.resolve(/* () */0);
            }));
      return /* () */0;
    } else {
      (function (eta) {
                return GraphqlQuery.sendQuery(undefined, eta);
              })(make(postId, /* () */0)).then((function (response) {
                if (response.createPostLike.success) {
                  Curry._2(handleCreateResponse, setSaving, addLikeCB);
                } else {
                  Curry._1(setSaving, (function (param) {
                          return false;
                        }));
                }
                return Promise.resolve(/* () */0);
              })).catch((function (param) {
              Curry._1(setSaving, (function (param) {
                      return false;
                    }));
              return Promise.resolve(/* () */0);
            }));
      return /* () */0;
    }
  }
}

function handleCreateResponse(setSaving, addLikeCB) {
  Curry._1(setSaving, (function (param) {
          return false;
        }));
  return Curry._1(addLikeCB, /* () */0);
}

function TopicsShow__LikeManager(Props) {
  var post = Props.post;
  var addPostLikeCB = Props.addPostLikeCB;
  var removePostLikeCB = Props.removePostLikeCB;
  var match = React.useState((function () {
          return false;
        }));
  var setSaving = match[1];
  var saving = match[0];
  var liked = TopicsShow__Post.likedByUser(post);
  var partial_arg = TopicsShow__Post.id(post);
  return React.createElement("div", {
              className: "text-center pr-3 md:pr-4"
            }, React.createElement("div", {
                  "aria-label": (
                    liked ? "Unlike" : "Like"
                  ) + (" reply " + TopicsShow__Post.id(post)),
                  className: "cursor-pointer",
                  onClick: (function (param) {
                      return handlePostLike(saving, liked, setSaving, partial_arg, removePostLikeCB, handleCreateResponse, addPostLikeCB, param);
                    })
                }, React.createElement("div", {
                      key: iconClasses(liked, saving),
                      className: "flex items-center justify-center rounded-lg lg:rounded-full lg:bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-900 h-8 w-8 md:h-10 md:w-10 p-1 md:p-2 mx-auto"
                    }, React.createElement("i", {
                          className: iconClasses(liked, saving)
                        })), React.createElement("p", {
                      className: "text-tiny lg:text-xs font-semibold"
                    }, String(TopicsShow__Post.totalLikes(post)))));
}

var make$2 = TopicsShow__LikeManager;

exports.str = str;
exports.CreatePostLikeQuery = CreatePostLikeQuery;
exports.DeletePostLikeQuery = DeletePostLikeQuery;
exports.iconClasses = iconClasses;
exports.handlePostLike = handlePostLike;
exports.handleCreateResponse = handleCreateResponse;
exports.make = make$2;
/* react Not a pure module */

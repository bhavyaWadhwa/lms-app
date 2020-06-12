// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Api = require("../../../../shared/Api.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("../../../../shared/components/FaIcon.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var HelpIcon = require("../../../../shared/components/HelpIcon.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../../../../shared/utils/OptionUtils.bs.js");
var ContentBlock = require("../../../../shared/types/ContentBlock.bs.js");
var GraphqlQuery = require("../../../../shared/utils/GraphqlQuery.bs.js");
var $$Notification = require("../../../../shared/Notification.bs.js");
var DisablingCover = require("../../../../shared/components/DisablingCover.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var AuthenticityToken = require("../../../../shared/utils/AuthenticityToken.bs.js");
var School__InputGroupError = require("../../../shared/components/School__InputGroupError.bs.js");
var CurriculumEditor__Target = require("../../types/curriculum_editor/CurriculumEditor__Target.bs.js");

var FormNotFound = Caml_exceptions.create("CurriculumEditor__ContentBlockCreator.FormNotFound");

((require("./CurriculumEditor__ContentBlockCreator.css")));

function str(prim) {
  return prim;
}

var ppx_printed_query = "mutation CreateMarkdownContentBlockMutation($targetId: ID!, $aboveContentBlockId: ID)  {\ncreateMarkdownContentBlock(targetId: $targetId, aboveContentBlockId: $aboveContentBlockId)  {\ncontentBlock  {\n..." + ContentBlock.Fragments.AllFields.name + "   \n}\n\n}\n\n}\n" + ContentBlock.Fragments.AllFields.query;

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "createMarkdownContentBlock");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "contentBlock");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$3);
      tmp$1 = match$2 !== undefined ? undefined : Caml_option.some(Curry._1(ContentBlock.Fragments.AllFields.parse, value$3));
    } else {
      tmp$1 = undefined;
    }
    tmp = {
      contentBlock: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field createMarkdownContentBlock on type Mutation is missing");
  }
  return {
          createMarkdownContentBlock: tmp
        };
}

function make(targetId, aboveContentBlockId, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "targetId",
                    targetId
                  ],
                  /* tuple */[
                    "aboveContentBlockId",
                    aboveContentBlockId !== undefined ? aboveContentBlockId : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var targetId = variables.targetId;
  var aboveContentBlockId = variables.aboveContentBlockId;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "targetId",
                    targetId
                  ],
                  /* tuple */[
                    "aboveContentBlockId",
                    aboveContentBlockId !== undefined ? aboveContentBlockId : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(targetId, aboveContentBlockId, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "targetId",
                  targetId
                ],
                /* tuple */[
                  "aboveContentBlockId",
                  aboveContentBlockId !== undefined ? aboveContentBlockId : null
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, targetId, aboveContentBlockId, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "targetId",
                      targetId
                    ],
                    /* tuple */[
                      "aboveContentBlockId",
                      aboveContentBlockId !== undefined ? aboveContentBlockId : null
                    ]
                  ].filter((function (param) {
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

var CreateMarkdownContentBlock = {
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

var ppx_printed_query$1 = "mutation CreateEmbedContentBlockMutation($targetId: ID!, $aboveContentBlockId: ID, $url: String!)  {\ncreateEmbedContentBlock(targetId: $targetId, aboveContentBlockId: $aboveContentBlockId, url: $url)  {\ncontentBlock  {\n..." + ContentBlock.Fragments.AllFields.name + "   \n}\n\n}\n\n}\n" + ContentBlock.Fragments.AllFields.query;

function parse$1(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "createEmbedContentBlock");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "contentBlock");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$3);
      tmp$1 = match$2 !== undefined ? undefined : Caml_option.some(Curry._1(ContentBlock.Fragments.AllFields.parse, value$3));
    } else {
      tmp$1 = undefined;
    }
    tmp = {
      contentBlock: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field createEmbedContentBlock on type Mutation is missing");
  }
  return {
          createEmbedContentBlock: tmp
        };
}

function make$1(targetId, aboveContentBlockId, url, param) {
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "targetId",
                    targetId
                  ],
                  /* tuple */[
                    "aboveContentBlockId",
                    aboveContentBlockId !== undefined ? aboveContentBlockId : null
                  ],
                  /* tuple */[
                    "url",
                    url
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var targetId = variables.targetId;
  var aboveContentBlockId = variables.aboveContentBlockId;
  var url = variables.url;
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "targetId",
                    targetId
                  ],
                  /* tuple */[
                    "aboveContentBlockId",
                    aboveContentBlockId !== undefined ? aboveContentBlockId : null
                  ],
                  /* tuple */[
                    "url",
                    url
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeVariables$1(targetId, aboveContentBlockId, url, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "targetId",
                  targetId
                ],
                /* tuple */[
                  "aboveContentBlockId",
                  aboveContentBlockId !== undefined ? aboveContentBlockId : null
                ],
                /* tuple */[
                  "url",
                  url
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002$1(graphql_ppx_use_json_variables_fn, targetId, aboveContentBlockId, url, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "targetId",
                      targetId
                    ],
                    /* tuple */[
                      "aboveContentBlockId",
                      aboveContentBlockId !== undefined ? aboveContentBlockId : null
                    ],
                    /* tuple */[
                      "url",
                      url
                    ]
                  ].filter((function (param) {
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

var CreateEmbedContentBlock = {
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

function computeInitialState(isAboveTarget) {
  return {
          ui: isAboveTarget ? /* Hidden */0 : /* BlockSelector */1,
          saving: false,
          error: undefined
        };
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* ToggleVisibility */0 :
          var match = state.ui;
          var ui = typeof match === "number" && match === 0 ? /* BlockSelector */1 : /* Hidden */0;
          return {
                  ui: ui,
                  saving: state.saving,
                  error: state.error
                };
      case /* ToggleSaving */1 :
          return {
                  ui: state.ui,
                  saving: !state.saving,
                  error: undefined
                };
      case /* FailedToCreate */2 :
          return {
                  ui: state.ui,
                  saving: false,
                  error: "An unexpected error occured. Please reload the page and try again."
                };
      case /* FailToUpload */3 :
          return {
                  ui: state.ui,
                  saving: false,
                  error: "Failed to upload file. Please check message in notification, and try again."
                };
      case /* ShowEmbedForm */4 :
          return {
                  ui: /* EmbedForm */[""],
                  saving: state.saving,
                  error: state.error
                };
      case /* HideEmbedForm */5 :
          return {
                  ui: /* BlockSelector */1,
                  saving: state.saving,
                  error: state.error
                };
      
    }
  } else {
    switch (action.tag | 0) {
      case /* FinishSaving */0 :
          return computeInitialState(action[0]);
      case /* SetError */1 :
          return {
                  ui: state.ui,
                  saving: state.saving,
                  error: action[0]
                };
      case /* UpdateEmbedUrl */2 :
          return {
                  ui: /* EmbedForm */[action[0]],
                  saving: state.saving,
                  error: state.error
                };
      
    }
  }
}

function containerClasses(visible, isAboveTarget) {
  return "content-block-creator py-3" + (
          visible || !isAboveTarget ? " content-block-creator--open" : ""
        );
}

function handleGraphqlCreateResponse(aboveContentBlock, send, addContentBlockCB, contentBlock) {
  if (contentBlock !== undefined) {
    Curry._1(addContentBlockCB, ContentBlock.makeFromJs(Caml_option.valFromOption(contentBlock)));
    Curry._1(send, /* FinishSaving */Block.__(0, [aboveContentBlock !== undefined]));
  } else {
    Curry._1(send, /* ToggleSaving */1);
  }
  return Promise.resolve(/* () */0);
}

function createMarkdownContentBlock(target, aboveContentBlock, send, addContentBlockCB) {
  Curry._1(send, /* ToggleSaving */1);
  var aboveContentBlockId = OptionUtils.map(ContentBlock.id, aboveContentBlock);
  var targetId = CurriculumEditor__Target.id(target);
  (function (eta) {
            return GraphqlQuery.sendQuery(undefined, eta);
          })(make(targetId, aboveContentBlockId, /* () */0)).then((function (result) {
            return handleGraphqlCreateResponse(aboveContentBlock, send, addContentBlockCB, result.createMarkdownContentBlock.contentBlock);
          })).catch((function (param) {
          Curry._1(send, /* FailedToCreate */2);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function elementId(prefix, aboveContentBlock) {
  return prefix + (
          aboveContentBlock !== undefined ? ContentBlock.id(aboveContentBlock) : "bottom"
        );
}

function fileInputId(aboveContentBlock) {
  return elementId("markdown-block-file-input-", aboveContentBlock);
}

function imageInputId(aboveContentBlock) {
  return elementId("markdown-block-image-input-", aboveContentBlock);
}

function fileFormId(aboveContentBlock) {
  return elementId("markdown-block-file-form-", aboveContentBlock);
}

function imageFormId(aboveContentBlock) {
  return elementId("markdown-block-image-form-", aboveContentBlock);
}

function onBlockTypeSelect(target, aboveContentBlock, send, addContentBlockCB, blockType, _event) {
  if (blockType !== -389316849) {
    if (blockType !== 50134457) {
      return /* () */0;
    } else {
      return Curry._1(send, /* ShowEmbedForm */4);
    }
  } else {
    return createMarkdownContentBlock(target, aboveContentBlock, send, addContentBlockCB);
  }
}

function button(target, aboveContentBlock, send, addContentBlockCB, blockType) {
  var fileId = elementId("markdown-block-file-input-", aboveContentBlock);
  var imageId = elementId("markdown-block-image-input-", aboveContentBlock);
  var match = blockType >= 50134457 ? (
      blockType >= 781515420 ? /* tuple */[
          "far fa-file-alt",
          "File",
          fileId
        ] : /* tuple */[
          "fas fa-code",
          "Embed",
          undefined
        ]
    ) : (
      blockType >= -389316849 ? /* tuple */[
          "fab fa-markdown",
          "Markdown",
          undefined
        ] : /* tuple */[
          "far fa-image",
          "Image",
          imageId
        ]
    );
  var buttonText = match[1];
  var tmp = {
    key: buttonText,
    className: "content-block-creator__block-content-type-picker px-3 pt-4 pb-3 flex-1 text-center text-primary-200",
    onClick: (function (param) {
        return onBlockTypeSelect(target, aboveContentBlock, send, addContentBlockCB, blockType, param);
      })
  };
  var tmp$1 = match[2];
  if (tmp$1 !== undefined) {
    tmp.htmlFor = Caml_option.valFromOption(tmp$1);
  }
  return React.createElement("label", tmp, React.createElement("i", {
                  className: match[0] + " text-2xl"
                }), React.createElement("p", {
                  className: "font-semibold"
                }, buttonText));
}

function isInvalidFile(file) {
  return file.size > 5242880;
}

function isInvalidImageFile(image) {
  var match = image.type;
  var tmp;
  switch (match) {
    case "image/gif" :
    case "image/jpeg" :
    case "image/png" :
        tmp = false;
        break;
    default:
      tmp = true;
  }
  if (tmp) {
    return true;
  } else {
    return image.size > 5242880;
  }
}

function uploadFile(target, send, addContentBlockCB, isAboveContentBlock, formData) {
  return Api.sendFormData("/school/targets/" + (CurriculumEditor__Target.id(target) + "/content_block"), formData, (function (json) {
                $$Notification.success("Done!", "File uploaded successfully.");
                var contentBlock = ContentBlock.decode(json);
                Curry._1(addContentBlockCB, contentBlock);
                return Curry._1(send, /* FinishSaving */Block.__(0, [isAboveContentBlock]));
              }), (function (param) {
                return Curry._1(send, /* FailToUpload */3);
              }));
}

function submitForm(target, aboveContentBlock, send, addContentBlockCB, blockType) {
  var formId = blockType >= 781515420 ? elementId("markdown-block-file-form-", aboveContentBlock) : elementId("markdown-block-image-form-", aboveContentBlock);
  var element = document.getElementById(formId);
  if (element == null) {
    Rollbar.error("Could not find form to upload file for content block: " + formId);
    throw [
          FormNotFound,
          formId
        ];
  } else {
    return uploadFile(target, send, addContentBlockCB, aboveContentBlock !== undefined, new FormData(element));
  }
}

function handleFileInputChange(target, aboveContentBlock, send, addContentBlockCB, blockType, $$event) {
  $$event.preventDefault();
  var files = $$event.target.files;
  if (files.length !== 0) {
    var file = Caml_array.caml_array_get(files, 0);
    var error = blockType >= 781515420 ? (
        file.size > 5242880 ? "Please select a file with a size less than 5 MB." : undefined
      ) : (
        isInvalidImageFile(file) ? "Please select an image (PNG, JPEG, GIF) with a size less than 5 MB, and less than 4096px wide or high." : undefined
      );
    if (error !== undefined) {
      return Curry._1(send, /* SetError */Block.__(1, [error]));
    } else {
      Curry._1(send, /* ToggleSaving */1);
      return submitForm(target, aboveContentBlock, send, addContentBlockCB, blockType);
    }
  } else {
    return /* () */0;
  }
}

function uploadForm(target, aboveContentBlock, send, addContentBlockCB, blockType) {
  var fileSelectionHandler = function (param, param$1) {
    return handleFileInputChange(target, aboveContentBlock, send, addContentBlockCB, param, param$1);
  };
  var match = blockType >= 781515420 ? /* tuple */[
      elementId("markdown-block-file-input-", aboveContentBlock),
      elementId("markdown-block-file-form-", aboveContentBlock),
      (function (param) {
          return fileSelectionHandler(/* File */781515420, param);
        }),
      "file"
    ] : /* tuple */[
      elementId("markdown-block-image-input-", aboveContentBlock),
      elementId("markdown-block-image-form-", aboveContentBlock),
      (function (param) {
          return fileSelectionHandler(/* Image */-795439301, param);
        }),
      "image"
    ];
  return React.createElement("form", {
              className: "hidden",
              id: match[1]
            }, React.createElement("input", {
                  name: "authenticity_token",
                  type: "hidden",
                  value: AuthenticityToken.fromHead(/* () */0)
                }), React.createElement("input", {
                  name: "block_type",
                  type: "hidden",
                  value: match[3]
                }), React.createElement("input", {
                  id: match[0],
                  multiple: false,
                  name: "file",
                  required: true,
                  type: "file",
                  onChange: match[2]
                }), aboveContentBlock !== undefined ? React.createElement("input", {
                    name: "above_content_block_id",
                    type: "hidden",
                    value: ContentBlock.id(aboveContentBlock)
                  }) : null);
}

function visible(state) {
  var match = state.ui;
  if (typeof match === "number") {
    return match !== 0;
  } else {
    return true;
  }
}

function updateEmbedUrl(send, $$event) {
  var value = $$event.target.value;
  return Curry._1(send, /* UpdateEmbedUrl */Block.__(2, [value]));
}

var embedUrlRegexes = [
  /https:\/\/.*slideshare\.net/,
  /https:\/\/.*vimeo\.com/,
  /https:\/\/.*youtube\.com/,
  /https:\/\/.*youtu\.be/
];

function validEmbedUrl(url) {
  return Belt_Array.some(embedUrlRegexes, (function (regex) {
                return regex.test(url);
              }));
}

function onEmbedFormSave(target, aboveContentBlock, url, send, addContentBlockCB, $$event) {
  $$event.preventDefault();
  if (validEmbedUrl(url)) {
    Curry._1(send, /* ToggleSaving */1);
    var aboveContentBlockId = OptionUtils.map(ContentBlock.id, aboveContentBlock);
    var targetId = CurriculumEditor__Target.id(target);
    (function (eta) {
              return GraphqlQuery.sendQuery(undefined, eta);
            })(make$1(targetId, aboveContentBlockId, url, /* () */0)).then((function (result) {
              return handleGraphqlCreateResponse(aboveContentBlock, send, addContentBlockCB, result.createEmbedContentBlock.contentBlock);
            })).catch((function (param) {
            Curry._1(send, /* FailedToCreate */2);
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  } else {
    return Curry._1(send, /* SetError */Block.__(1, ["The URL doesn't look valid. Please make sure that it starts with 'https://' and that it's one of the accepted websites."]));
  }
}

function topButton(handler, id, title, icon) {
  return React.createElement("div", {
              className: "content-block-creator__top-button-container relative cursor-pointer",
              onClick: handler
            }, React.createElement("div", {
                  className: "content-block-creator__top-button bg-gray-200 hover:bg-gray-300 relative rounded-lg border border-gray-500 w-10 h-10 flex justify-center items-center mx-auto z-20",
                  id: "top-button-" + id,
                  title: title
                }, React.createElement(FaIcon.make, {
                      classes: "text-base fas " + icon
                    })));
}

function closeEmbedFormButton(send, aboveContentBlock) {
  var id = OptionUtils.$$default("bottom", OptionUtils.map(ContentBlock.id, aboveContentBlock));
  return topButton((function (_e) {
                return Curry._1(send, /* HideEmbedForm */5);
              }), id, "Close Embed Form", "fa-level-up-alt");
}

function toggleVisibilityButton(send, contentBlock) {
  return topButton((function (_e) {
                return Curry._1(send, /* ToggleVisibility */0);
              }), ContentBlock.id(contentBlock), "Toggle Content Block Form", "fa-plus content-block-creator__plus-button-icon");
}

function buttonAboveContentBlock(state, send, aboveContentBlock) {
  var match = state.ui;
  if (typeof match === "number") {
    if (match !== 0) {
      if (aboveContentBlock !== undefined) {
        return toggleVisibilityButton(send, aboveContentBlock);
      }
      
    } else if (aboveContentBlock !== undefined) {
      return toggleVisibilityButton(send, aboveContentBlock);
    }
    
  } else {
    return closeEmbedFormButton(send, aboveContentBlock);
  }
  return React.createElement("div", {
              className: "h-10"
            });
}

function CurriculumEditor__ContentBlockCreator(Props) {
  var target = Props.target;
  var aboveContentBlock = Props.aboveContentBlock;
  var addContentBlockCB = Props.addContentBlockCB;
  var match;
  if (aboveContentBlock !== undefined) {
    var id = "embed-" + ContentBlock.id(aboveContentBlock);
    match = /* tuple */[
      id,
      true
    ];
  } else {
    match = /* tuple */[
      "embed-bottom",
      false
    ];
  }
  var isAboveContentBlock = match[1];
  var embedInputId = match[0];
  var match$1 = React.useReducer(reducer, isAboveContentBlock, computeInitialState);
  var send = match$1[1];
  var state = match$1[0];
  var match$2 = state.ui;
  var tmp;
  if (typeof match$2 === "number") {
    tmp = match$2 !== 0 ? React.createElement("div", {
            className: "content-block-creator__block-content-type text-sm hidden shadow-lg mx-auto relative bg-primary-900 rounded-lg -mt-4 z-10"
          }, $$Array.map((function (param) {
                  return button(target, aboveContentBlock, send, addContentBlockCB, param);
                }), [
                /* Markdown */-389316849,
                /* Image */-795439301,
                /* Embed */50134457,
                /* File */781515420
              ])) : null;
  } else {
    var url = match$2[0];
    tmp = React.createElement("div", {
          className: "clearfix border-2 border-gray-400 bg-gray-200 border-dashed rounded-lg px-3 pb-3 pt-2 -mt-4 z-10"
        }, React.createElement("label", {
              className: "text-xs font-semibold",
              htmlFor: embedInputId
            }, "URL to Embed"), React.createElement(HelpIcon.make, {
              className: "ml-2 text-xs",
              link: "https://docs.pupilfirst.com/#/curriculum_editor?id=content-block-types",
              children: "We support YouTube, Vimeo, and Slideshare URLs. Just copy & paste the full URL to the page that contains the resource that you'd like to embed."
            }), React.createElement("div", {
              className: "flex mt-1"
            }, React.createElement("input", {
                  className: "w-full py-1 px-2 border rounded",
                  id: embedInputId,
                  placeholder: "https://www.youtube.com/watch?v=",
                  type: "text",
                  value: url,
                  onChange: (function (param) {
                      return updateEmbedUrl(send, param);
                    })
                }), React.createElement("button", {
                  className: "ml-2 btn btn-success",
                  onClick: (function (param) {
                      return onEmbedFormSave(target, aboveContentBlock, url, send, addContentBlockCB, param);
                    })
                }, "Save")));
  }
  var match$3 = state.error;
  return React.createElement(DisablingCover.make, {
              disabled: state.saving,
              message: "Creating...",
              children: null
            }, uploadForm(target, aboveContentBlock, send, addContentBlockCB, /* File */781515420), uploadForm(target, aboveContentBlock, send, addContentBlockCB, /* Image */-795439301), React.createElement("div", {
                  className: containerClasses(visible(state), isAboveContentBlock)
                }, buttonAboveContentBlock(state, send, aboveContentBlock), React.createElement("div", {
                      className: "content-block-creator__inner-container"
                    }, tmp), match$3 !== undefined ? React.createElement(School__InputGroupError.make, {
                        message: match$3,
                        active: visible(state)
                      }) : null));
}

var maxAllowedFileSize = 5242880;

var make$2 = CurriculumEditor__ContentBlockCreator;

exports.FormNotFound = FormNotFound;
exports.str = str;
exports.CreateMarkdownContentBlock = CreateMarkdownContentBlock;
exports.CreateEmbedContentBlock = CreateEmbedContentBlock;
exports.computeInitialState = computeInitialState;
exports.reducer = reducer;
exports.containerClasses = containerClasses;
exports.handleGraphqlCreateResponse = handleGraphqlCreateResponse;
exports.createMarkdownContentBlock = createMarkdownContentBlock;
exports.elementId = elementId;
exports.fileInputId = fileInputId;
exports.imageInputId = imageInputId;
exports.fileFormId = fileFormId;
exports.imageFormId = imageFormId;
exports.onBlockTypeSelect = onBlockTypeSelect;
exports.button = button;
exports.maxAllowedFileSize = maxAllowedFileSize;
exports.isInvalidFile = isInvalidFile;
exports.isInvalidImageFile = isInvalidImageFile;
exports.uploadFile = uploadFile;
exports.submitForm = submitForm;
exports.handleFileInputChange = handleFileInputChange;
exports.uploadForm = uploadForm;
exports.visible = visible;
exports.updateEmbedUrl = updateEmbedUrl;
exports.embedUrlRegexes = embedUrlRegexes;
exports.validEmbedUrl = validEmbedUrl;
exports.onEmbedFormSave = onEmbedFormSave;
exports.topButton = topButton;
exports.closeEmbedFormButton = closeEmbedFormButton;
exports.toggleVisibilityButton = toggleVisibilityButton;
exports.buttonAboveContentBlock = buttonAboveContentBlock;
exports.make = make$2;
/*  Not a pure module */

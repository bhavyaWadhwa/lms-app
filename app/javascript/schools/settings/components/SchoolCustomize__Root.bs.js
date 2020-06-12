// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Markdown = require("../../../shared/utils/Markdown.bs.js");
var MarkdownBlock = require("../../../shared/components/MarkdownBlock.bs.js");
var SchoolAdmin__EditorDrawer = require("../../components/SchoolAdmin__EditorDrawer.bs.js");
var SchoolCustomize__MoreLinks = require("./SchoolCustomize__MoreLinks.bs.js");
var SchoolCustomize__SocialLink = require("./SchoolCustomize__SocialLink.bs.js");
var SchoolCustomize__LinksEditor = require("./SchoolCustomize__LinksEditor.bs.js");
var SchoolCustomize__ImagesEditor = require("./SchoolCustomize__ImagesEditor.bs.js");
var SchoolCustomize__DetailsEditor = require("./SchoolCustomize__DetailsEditor.bs.js");
var SchoolCustomize__ContactsEditor = require("./SchoolCustomize__ContactsEditor.bs.js");
var SchoolCustomize__Customizations = require("../types/SchoolCustomize__Customizations.bs.js");
var SchoolCustomize__AgreementsEditor = require("./SchoolCustomize__AgreementsEditor.bs.js");

((require("./SchoolCustomize__Root.css")));

function str(prim) {
  return prim;
}

function headerLogo(schoolName, logoOnLightBg) {
  if (logoOnLightBg !== undefined) {
    return React.createElement("div", {
                className: "max-w-xs"
              }, React.createElement("img", {
                    className: "h-12",
                    src: SchoolCustomize__Customizations.url(logoOnLightBg)
                  }));
  } else {
    return React.createElement("span", {
                className: "text-2xl font-bold"
              }, schoolName);
  }
}

function headerLink(param) {
  return React.createElement("div", {
              key: param[0],
              className: "ml-6 text-sm font-semibold cursor-default"
            }, React.createElement("span", undefined, param[1]));
}

function headerLinks(links) {
  var match;
  if (links) {
    var match$1 = links[1];
    if (match$1) {
      var match$2 = match$1[1];
      if (match$2) {
        var match$3 = match$2[1];
        if (match$3) {
          var match$4 = match$3[1];
          match = match$4 ? /* tuple */[
              /* :: */[
                links[0],
                /* :: */[
                  match$1[0],
                  /* :: */[
                    match$2[0],
                    /* [] */0
                  ]
                ]
              ],
              /* :: */[
                match$3[0],
                /* :: */[
                  match$4[0],
                  match$4[1]
                ]
              ]
            ] : /* tuple */[
              links,
              /* [] */0
            ];
        } else {
          match = /* tuple */[
            links,
            /* [] */0
          ];
        }
      } else {
        match = /* tuple */[
          links,
          /* [] */0
        ];
      }
    } else {
      match = /* tuple */[
        links,
        /* [] */0
      ];
    }
  } else {
    match = /* tuple */[
      links,
      /* [] */0
    ];
  }
  var visibleLinks = match[0];
  if (visibleLinks) {
    return $$Array.of_list(List.append(List.map(headerLink, visibleLinks), /* :: */[
                    React.createElement(SchoolCustomize__MoreLinks.make, {
                          links: match[1],
                          key: "more-links"
                        }),
                    /* [] */0
                  ]));
  } else {
    return React.createElement("div", {
                className: "border border-gray-400 rounded-lg italic text-gray-600 cursor-default text-sm py-2 px-4"
              }, "You can customize links on the header.");
  }
}

function sitemap(links) {
  if (links) {
    return React.createElement("div", {
                className: "flex flex-wrap"
              }, $$Array.of_list(List.map((function (param) {
                          return React.createElement("div", {
                                      key: param[0],
                                      className: "w-1/3 pr-4 mt-3 text-xs font-semibold"
                                    }, param[1]);
                        }), links)));
  } else {
    return React.createElement("div", {
                className: "border border-gray-500 rounded-lg italic text-gray-400 cursor-default text-sm max-w-fc mt-3 py-2 px-4"
              }, "You can customize links in the footer.");
  }
}

function socialLinks(links) {
  if (links) {
    return React.createElement("div", {
                className: "flex flex-wrap"
              }, $$Array.of_list(List.map((function (param) {
                          return React.createElement(SchoolCustomize__SocialLink.make, {
                                      url: param[2],
                                      key: param[0]
                                    });
                        }), links)));
  } else {
    return React.createElement("div", {
                className: "border border-gray-500 rounded-lg italic text-gray-400 cursor-default text-sm max-w-fc mt-3 py-2 px-4"
              }, "Add social media links?");
  }
}

function address(a) {
  if (a !== undefined) {
    return React.createElement("div", {
                className: "text-xs font-semibold mt-3 leading-normal",
                dangerouslySetInnerHTML: {
                  __html: Markdown.parse(/* Permissive */2, a)
                }
              });
  } else {
    return React.createElement("div", {
                className: "border border-gray-500 rounded-lg italic text-gray-400 cursor-default text-sm max-w-fc mt-3 py-2 px-4"
              }, "Add an address?");
  }
}

function emailAddress(email) {
  if (email !== undefined) {
    return React.createElement("div", {
                className: "text-xs font-semibold mt-4"
              }, "Reach us at ", React.createElement("span", {
                    className: "font-bold"
                  }, email));
  } else {
    return React.createElement("div", {
                className: "border border-gray-500 rounded-lg italic text-gray-400 cursor-default text-sm max-w-fc mt-4 py-2 px-4"
              }, "Add a contact email?");
  }
}

function footerLogo(schoolName, logoOnDarkBg) {
  if (logoOnDarkBg !== undefined) {
    return React.createElement("img", {
                className: "h-8",
                src: SchoolCustomize__Customizations.url(logoOnDarkBg)
              });
  } else {
    return React.createElement("span", {
                className: "text-lg font-bold"
              }, schoolName);
  }
}

function editIcon(additionalClasses, clickHandler, title) {
  return React.createElement("div", {
              className: "cursor-pointer bg-primary-100 border border-primary-400 text-primary-500 hover:bg-primary-200 hover:border-primary-500 hover:text-primary-600 px-2 py-1 rounded flex items-center " + additionalClasses,
              title: title,
              onClick: clickHandler
            }, React.createElement("i", {
                  className: "fas fa-pencil-alt text-xs"
                }), React.createElement("span", {
                  className: "text-xs font-semibold ml-2"
                }, "Edit"));
}

function showEditor(editor, send, $$event) {
  $$event.preventDefault();
  return Curry._1(send, /* ShowEditor */Block.__(0, [editor]));
}

function editor(state, send, authenticityToken) {
  var match = state.visibleEditor;
  if (match !== undefined) {
    var editor$1 = match;
    var tmp;
    if (typeof editor$1 === "number") {
      switch (editor$1) {
        case /* DetailsEditor */0 :
            tmp = React.createElement(SchoolCustomize__DetailsEditor.make, {
                  name: state.schoolName,
                  about: state.schoolAbout,
                  updateDetailsCB: (function (name, about) {
                      return Curry._1(send, /* UpdateSchoolDetails */Block.__(7, [
                                    name,
                                    about
                                  ]));
                    })
                });
            break;
        case /* ImagesEditor */1 :
            tmp = React.createElement(SchoolCustomize__ImagesEditor.make, {
                  customizations: state.customizations,
                  updateImagesCB: (function (json) {
                      return Curry._1(send, /* UpdateImages */Block.__(8, [json]));
                    }),
                  authenticityToken: authenticityToken,
                  key: "sc-drawer__images-editor"
                });
            break;
        case /* ContactsEditor */2 :
            tmp = React.createElement(SchoolCustomize__ContactsEditor.make, {
                  customizations: state.customizations,
                  updateAddressCB: (function (address) {
                      return Curry._1(send, /* UpdateAddress */Block.__(5, [address]));
                    }),
                  updateEmailAddressCB: (function (emailAddress) {
                      return Curry._1(send, /* UpdateEmailAddress */Block.__(6, [emailAddress]));
                    }),
                  key: "sc-drawer__contacts-editor"
                });
            break;
        
      }
    } else {
      tmp = editor$1.tag ? React.createElement(SchoolCustomize__AgreementsEditor.make, {
              kind: editor$1[0],
              customizations: state.customizations,
              updatePrivacyPolicyCB: (function (agreement) {
                  return Curry._1(send, /* UpdatePrivacyPolicy */Block.__(4, [agreement]));
                }),
              updateTermsOfUseCB: (function (agreement) {
                  return Curry._1(send, /* UpdateTermsOfUse */Block.__(3, [agreement]));
                }),
              key: "sc-drawer__agreements-editor"
            }) : React.createElement(SchoolCustomize__LinksEditor.make, {
              kind: editor$1[0],
              customizations: state.customizations,
              addLinkCB: (function (link) {
                  return Curry._1(send, /* AddLink */Block.__(1, [link]));
                }),
              removeLinkCB: (function (linkId) {
                  return Curry._1(send, /* RemoveLink */Block.__(2, [linkId]));
                }),
              key: "sc-drawer__links-editor"
            });
    }
    return React.createElement(SchoolAdmin__EditorDrawer.make, {
                closeDrawerCB: (function (param) {
                    return Curry._1(send, /* CloseEditor */0);
                  }),
                children: tmp
              });
  } else {
    return null;
  }
}

function initialState(customizations, schoolName, schoolAbout) {
  return {
          visibleEditor: undefined,
          customizations: customizations,
          schoolName: schoolName,
          schoolAbout: schoolAbout
        };
}

function reducer(state, action) {
  if (typeof action === "number") {
    return {
            visibleEditor: undefined,
            customizations: state.customizations,
            schoolName: state.schoolName,
            schoolAbout: state.schoolAbout
          };
  } else {
    switch (action.tag | 0) {
      case /* ShowEditor */0 :
          return {
                  visibleEditor: action[0],
                  customizations: state.customizations,
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* AddLink */1 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.addLink(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* RemoveLink */2 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.removeLink(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* UpdateTermsOfUse */3 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.updateTermsOfUse(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* UpdatePrivacyPolicy */4 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.updatePrivacyPolicy(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* UpdateAddress */5 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.updateAddress(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* UpdateEmailAddress */6 :
          return {
                  visibleEditor: state.visibleEditor,
                  customizations: SchoolCustomize__Customizations.updateEmailAddress(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      case /* UpdateSchoolDetails */7 :
          return {
                  visibleEditor: undefined,
                  customizations: state.customizations,
                  schoolName: action[0],
                  schoolAbout: action[1]
                };
      case /* UpdateImages */8 :
          return {
                  visibleEditor: undefined,
                  customizations: SchoolCustomize__Customizations.updateImages(action[0], state.customizations),
                  schoolName: state.schoolName,
                  schoolAbout: state.schoolAbout
                };
      
    }
  }
}

function about(state) {
  var match = state.schoolAbout;
  if (match !== undefined) {
    return match;
  } else {
    return "Add more details about the school.";
  }
}

function SchoolCustomize__Root(Props) {
  var authenticityToken = Props.authenticityToken;
  var customizations = Props.customizations;
  var schoolName = Props.schoolName;
  var schoolAbout = Props.schoolAbout;
  var match = React.useReducer(reducer, initialState(customizations, schoolName, schoolAbout));
  var send = match[1];
  var state = match[0];
  var partial_arg = /* LinksEditor */Block.__(0, [/* HeaderLink */0]);
  var match$1 = SchoolCustomize__Customizations.coverImage(state.customizations);
  var partial_arg$1 = /* LinksEditor */Block.__(0, [/* FooterLink */1]);
  var partial_arg$2 = /* LinksEditor */Block.__(0, [/* SocialLink */2]);
  var partial_arg$3 = /* AgreementsEditor */Block.__(1, [/* PrivacyPolicy */0]);
  var partial_arg$4 = /* AgreementsEditor */Block.__(1, [/* TermsOfUse */1]);
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "px-6 py-6 w-full xl:max-w-6xl mx-auto"
                }, React.createElement("div", {
                      className: "font-bold"
                    }, "Home Page"), React.createElement("div", {
                      className: "border rounded-t-lg px-5 py-4 flex justify-between mt-3"
                    }, React.createElement("div", {
                          className: "flex items-center bg-gray-200 rounded p-2"
                        }, headerLogo(schoolName, SchoolCustomize__Customizations.logoOnLightBg(state.customizations)), editIcon("ml-6", (function (param) {
                                return showEditor(/* ImagesEditor */1, send, param);
                              }), "Edit logo (on light backgrounds)")), React.createElement("div", {
                          className: "flex items-center"
                        }, React.createElement("div", {
                              className: "school-customize__header-links flex items-center bg-gray-200 rounded px-3 py-2 h-full"
                            }, headerLinks(SchoolCustomize__Customizations.unpackLinks(SchoolCustomize__Customizations.headerLinks(state.customizations))), editIcon("ml-3", (function (param) {
                                    return showEditor(partial_arg, send, param);
                                  }), "Edit header links")))), React.createElement("div", {
                      className: "relative bg-gray-300"
                    }, React.createElement("div", {
                          className: "absolute right-0 z-10 pt-3 pr-3"
                        }, React.createElement("button", {
                              className: "flex items-center text-xs bg-primary-100 text-primary-500 border border-primary-400 hover:bg-primary-200 hover:border-primary-500 hover:text-primary-600 px-2 py-1 cursor-pointer rounded",
                              onClick: (function (param) {
                                  return showEditor(/* ImagesEditor */1, send, param);
                                })
                            }, React.createElement("i", {
                                  className: "fas fa-pencil-alt"
                                }), React.createElement("span", {
                                  className: "font-semibold ml-2"
                                }, "Change cover"))), React.createElement("div", {
                          className: "relative pb-1/2 md:pb-1/4 rounded-b-lg overflow-hidden"
                        }, match$1 !== undefined ? React.createElement("img", {
                                className: "absolute h-full w-full object-cover",
                                src: SchoolCustomize__Customizations.url(match$1)
                              }) : React.createElement("div", {
                                className: "school-customize__cover-default absolute h-full w-full svg-bg-pattern-6"
                              }))), React.createElement("div", {
                      className: "max-w-3xl relative mx-auto bg-primary-900 shadow-xl rounded-lg -mt-7"
                    }, React.createElement("div", {
                          className: "relative mx-auto flex flex-col justify-center items-center text-white p-10 text-center"
                        }, React.createElement("p", undefined, "Hello, welcome to"), React.createElement("div", {
                              onClick: (function (param) {
                                  return showEditor(/* DetailsEditor */0, send, param);
                                })
                            }, React.createElement("h1", {
                                  className: "flex items-center border border-dashed border-gray-800 hover:border-primary-300 hover:text-primary-200 cursor-text rounded px-2 py-1 text-3xl mt-1"
                                }, React.createElement("span", undefined, state.schoolName), React.createElement("button", {
                                      className: "flex items-center text-xs bg-primary-100 text-primary-500 border border-primary-400 hover:bg-primary-200 hover:border-primary-500 hover:text-primary-600 p-1 ml-1 cursor-pointer rounded",
                                      onClick: (function (param) {
                                          return showEditor(/* DetailsEditor */0, send, param);
                                        })
                                    }, React.createElement("i", {
                                          className: "fas fa-pencil-alt"
                                        })))), React.createElement("div", {
                              "aria-label": "Edit school details",
                              className: "w-full max-w-2xl mt-2 relative flex items-center justify-center border border-dashed border-gray-800 rounded px-8 py-5 hover:border-primary-300 hover:text-primary-200 cursor-text",
                              onClick: (function (param) {
                                  return showEditor(/* DetailsEditor */0, send, param);
                                })
                            }, React.createElement("div", {
                                  className: "absolute right-0 top-0 z-10 pt-2 pr-2"
                                }, React.createElement("button", {
                                      className: "flex items-center text-xs bg-primary-100 text-primary-500 border border-primary-400 hover:bg-primary-200 hover:border-primary-500 hover:text-primary-600 p-1 cursor-pointer rounded"
                                    }, React.createElement("i", {
                                          className: "fas fa-pencil-alt"
                                        }))), React.createElement("div", {
                                  className: "text-sm"
                                }, React.createElement(MarkdownBlock.make, {
                                      markdown: about(state),
                                      profile: /* AreaOfText */3
                                    }))))), React.createElement("div", {
                      className: "mx-auto text-center pt-8 mt-8"
                    }, React.createElement("h2", {
                          className: "school-customize__featured-courses-header relative text-2xl font-bold"
                        }, "Featured Courses"), React.createElement("div", {
                          className: "text-sm"
                        }, "Featured courses will be listed here"), React.createElement("div", {
                          className: "max-w-2xl bg-gray-100 rounded-lg mx-auto p-3 mt-4"
                        }, React.createElement("div", {
                              className: "school-customize__featured-courses-empty-placeholder"
                            }))), React.createElement("div", {
                      className: "mt-8 w-full"
                    }, React.createElement("div", {
                          className: "school-customize__footer-top-container rounded-t-lg p-6 flex"
                        }, React.createElement("div", {
                              className: "w-2/5"
                            }, React.createElement("div", {
                                  className: "p-3 bg-gray-300 border border-dashed border-gray-500 rounded h-full mr-2"
                                }, React.createElement("div", {
                                      className: "flex items-center"
                                    }, React.createElement("span", {
                                          className: "uppercase font-bold text-sm"
                                        }, "Sitemap"), editIcon("ml-3", (function (param) {
                                            return showEditor(partial_arg$1, send, param);
                                          }), "Edit footer links")), sitemap(SchoolCustomize__Customizations.unpackLinks(SchoolCustomize__Customizations.footerLinks(state.customizations))))), React.createElement("div", {
                              className: "w-3/5"
                            }, React.createElement("div", {
                                  className: "flex"
                                }, React.createElement("div", {
                                      className: "w-3/5"
                                    }, React.createElement("div", {
                                          className: "p-3 bg-gray-300 border border-dashed border-gray-500 rounded h-full mr-2"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("span", {
                                                  className: "uppercase font-bold text-sm"
                                                }, "Social"), editIcon("ml-3", (function (param) {
                                                    return showEditor(partial_arg$2, send, param);
                                                  }), "Edit social media links")), socialLinks(SchoolCustomize__Customizations.unpackLinks(SchoolCustomize__Customizations.socialLinks(state.customizations))))), React.createElement("div", {
                                      className: "w-2/5"
                                    }, React.createElement("div", {
                                          className: "p-3 bg-gray-300 border border-dashed border-gray-500 rounded h-full"
                                        }, React.createElement("div", {
                                              className: "flex items-center"
                                            }, React.createElement("span", {
                                                  className: "uppercase font-bold text-sm"
                                                }, "Contact"), editIcon("ml-3", (function (param) {
                                                    return showEditor(/* ContactsEditor */2, send, param);
                                                  }), "Edit contact details")), address(SchoolCustomize__Customizations.address(state.customizations)), emailAddress(SchoolCustomize__Customizations.emailAddress(state.customizations))))))), React.createElement("div", {
                          className: "school-customize__footer-bottom-container rounded-b-lg p-6 flex justify-between"
                        }, React.createElement("div", {
                              className: "flex items-center bg-gray-300 border border-dashed border-gray-500 rounded p-2"
                            }, footerLogo(schoolName, SchoolCustomize__Customizations.logoOnLightBg(state.customizations)), editIcon("ml-3", (function (param) {
                                    return showEditor(/* ImagesEditor */1, send, param);
                                  }), "Edit logo (on dark backgrounds)")), React.createElement("div", {
                              className: "flex items-center text-sm"
                            }, React.createElement("div", {
                                  className: "flex items-center bg-gray-300 border border-dashed border-gray-500 rounded p-2 text-xs"
                                }, React.createElement("div", undefined, "Privacy Policy"), editIcon("ml-3", (function (param) {
                                        return showEditor(partial_arg$3, send, param);
                                      }), "Edit privacy policy")), React.createElement("div", {
                                  className: "flex items-center bg-gray-300 border border-dashed border-gray-500 rounded p-2 ml-6 text-xs"
                                }, React.createElement("div", undefined, "Terms of Use"), editIcon("ml-3", (function (param) {
                                        return showEditor(partial_arg$4, send, param);
                                      }), "Edit terms of use")), React.createElement("div", {
                                  className: "ml-6 flex items-center text-xs text-gray-600"
                                }, React.createElement("i", {
                                      className: "far fa-copyright"
                                    }), React.createElement("span", {
                                      className: "ml-1"
                                    }, String(new Date().getFullYear() | 0) + (" " + schoolName)))))), React.createElement("div", {
                      className: "mt-6 font-bold"
                    }, "Icon"), React.createElement("div", {
                      className: "mt-3 w-2/4 max-w-sm"
                    }, React.createElement("div", {
                          className: "bg-gray-400 rounded-t-lg h-12 flex items-end"
                        }, React.createElement("div", {
                              className: "w-full flex items-center pr-3"
                            }, React.createElement("div", {
                                  className: "h-3 w-3 rounded-full bg-gray-500 ml-4"
                                }), React.createElement("div", {
                                  className: "h-3 w-3 rounded-full bg-gray-500 ml-2"
                                }), React.createElement("div", {
                                  className: "h-3 w-3 rounded-full bg-gray-500 ml-2"
                                }), React.createElement("div", {
                                  className: "p-3 ml-4 bg-gray-100 rounded-t-lg flex items-center"
                                }, React.createElement("img", {
                                      className: "h-5 w-5",
                                      src: SchoolCustomize__Customizations.url(SchoolCustomize__Customizations.icon(state.customizations))
                                    }), React.createElement("span", {
                                      className: "ml-1 text-xs font-semibold max-w-xs truncate"
                                    }, schoolName)), editIcon("ml-2", (function (param) {
                                    return showEditor(/* ImagesEditor */1, send, param);
                                  }), "Edit icon"))), React.createElement("div", {
                          className: "bg-gray-100 border border-t-0 h-16 rounded-b-lg"
                        }))), editor(state, send, authenticityToken));
}

var make = SchoolCustomize__Root;

exports.str = str;
exports.headerLogo = headerLogo;
exports.headerLink = headerLink;
exports.headerLinks = headerLinks;
exports.sitemap = sitemap;
exports.socialLinks = socialLinks;
exports.address = address;
exports.emailAddress = emailAddress;
exports.footerLogo = footerLogo;
exports.editIcon = editIcon;
exports.showEditor = showEditor;
exports.editor = editor;
exports.initialState = initialState;
exports.reducer = reducer;
exports.about = about;
exports.make = make;
/*  Not a pure module */

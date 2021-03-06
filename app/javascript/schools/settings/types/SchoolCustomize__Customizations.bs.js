// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var $$String = require("bs-platform/lib/js/string.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var UnknownKindOfLink = Caml_exceptions.create("SchoolCustomize__Customizations.UnknownKindOfLink");

function logoOnLightBg(t) {
  return t.schoolImages.logoOnLightBg;
}

function icon(t) {
  return t.schoolImages.icon;
}

function coverImage(t) {
  return t.schoolImages.coverImage;
}

function url(file) {
  return file.url;
}

function filename(file) {
  return file.filename;
}

function address(t) {
  return t.schoolStrings.address;
}

function emailAddress(t) {
  return t.schoolStrings.emailAddress;
}

function privacyPolicy(t) {
  return t.schoolStrings.privacyPolicy;
}

function termsOfUse(t) {
  return t.schoolStrings.termsOfUse;
}

function headerLinks(t) {
  return List.filter((function (l) {
                  switch (l.tag | 0) {
                    case /* HeaderLink */0 :
                        return true;
                    case /* FooterLink */1 :
                    case /* SocialLink */2 :
                        return false;
                    
                  }
                }))(t.links);
}

function footerLinks(t) {
  return List.filter((function (l) {
                  switch (l.tag | 0) {
                    case /* FooterLink */1 :
                        return true;
                    case /* HeaderLink */0 :
                    case /* SocialLink */2 :
                        return false;
                    
                  }
                }))(t.links);
}

function socialLinks(t) {
  return List.filter((function (l) {
                  switch (l.tag | 0) {
                    case /* HeaderLink */0 :
                    case /* FooterLink */1 :
                        return false;
                    case /* SocialLink */2 :
                        return true;
                    
                  }
                }))(t.links);
}

function unpackLinks(links) {
  return List.map((function (l) {
                switch (l.tag | 0) {
                  case /* HeaderLink */0 :
                  case /* FooterLink */1 :
                      break;
                  case /* SocialLink */2 :
                      return /* tuple */[
                              l[0],
                              "",
                              l[1]
                            ];
                  
                }
                return /* tuple */[
                        l[0],
                        l[1],
                        l[2]
                      ];
              }), links);
}

function addLink(link, t) {
  return {
          schoolStrings: t.schoolStrings,
          schoolImages: t.schoolImages,
          links: Pervasives.$at(t.links, /* :: */[
                link,
                /* [] */0
              ])
        };
}

function removeLink(linkId, t) {
  return {
          schoolStrings: t.schoolStrings,
          schoolImages: t.schoolImages,
          links: List.filter((function (l) {
                    switch (l.tag | 0) {
                      case /* HeaderLink */0 :
                      case /* FooterLink */1 :
                      case /* SocialLink */2 :
                          return l[0] !== linkId;
                      
                    }
                  }))(t.links)
        };
}

function optionalString(s) {
  var nonEmptyString = $$String.trim(s);
  if (nonEmptyString === "") {
    return ;
  } else {
    return nonEmptyString;
  }
}

function updatePrivacyPolicy(privacyPolicy, t) {
  var init = t.schoolStrings;
  return {
          schoolStrings: {
            address: init.address,
            emailAddress: init.emailAddress,
            privacyPolicy: optionalString(privacyPolicy),
            termsOfUse: init.termsOfUse
          },
          schoolImages: t.schoolImages,
          links: t.links
        };
}

function updateTermsOfUse(termsOfUse, t) {
  var init = t.schoolStrings;
  return {
          schoolStrings: {
            address: init.address,
            emailAddress: init.emailAddress,
            privacyPolicy: init.privacyPolicy,
            termsOfUse: optionalString(termsOfUse)
          },
          schoolImages: t.schoolImages,
          links: t.links
        };
}

function updateAddress(address, t) {
  var init = t.schoolStrings;
  return {
          schoolStrings: {
            address: optionalString(address),
            emailAddress: init.emailAddress,
            privacyPolicy: init.privacyPolicy,
            termsOfUse: init.termsOfUse
          },
          schoolImages: t.schoolImages,
          links: t.links
        };
}

function updateEmailAddress(emailAddress, t) {
  var init = t.schoolStrings;
  return {
          schoolStrings: {
            address: init.address,
            emailAddress: optionalString(emailAddress),
            privacyPolicy: init.privacyPolicy,
            termsOfUse: init.termsOfUse
          },
          schoolImages: t.schoolImages,
          links: t.links
        };
}

function decodeFile(json) {
  return {
          url: Json_decode.field("url", Json_decode.string, json),
          filename: Json_decode.field("filename", Json_decode.string, json)
        };
}

function decodeImages(json) {
  return {
          logoOnLightBg: Json_decode.field("logoOnLightBg", (function (param) {
                  return Json_decode.optional(decodeFile, param);
                }), json),
          coverImage: Json_decode.field("coverImage", (function (param) {
                  return Json_decode.optional(decodeFile, param);
                }), json),
          icon: Json_decode.field("icon", decodeFile, json)
        };
}

function updateImages(json, t) {
  return {
          schoolStrings: t.schoolStrings,
          schoolImages: decodeImages(json),
          links: t.links
        };
}

function decodeStrings(json) {
  return {
          address: Json_decode.field("address", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          emailAddress: Json_decode.field("emailAddress", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          privacyPolicy: Json_decode.field("privacyPolicy", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json),
          termsOfUse: Json_decode.field("termsOfUse", (function (param) {
                  return Json_decode.optional(Json_decode.string, param);
                }), json)
        };
}

function decodeLink(json) {
  var kind = Json_decode.field("kind", Json_decode.string, json);
  var id = Json_decode.field("id", Json_decode.string, json);
  var url = Json_decode.field("url", Json_decode.string, json);
  var title;
  switch (kind) {
    case "footer" :
    case "header" :
        title = Json_decode.field("title", Json_decode.string, json);
        break;
    default:
      title = "";
  }
  switch (kind) {
    case "footer" :
        return /* FooterLink */Block.__(1, [
                  id,
                  title,
                  url
                ]);
    case "header" :
        return /* HeaderLink */Block.__(0, [
                  id,
                  title,
                  url
                ]);
    case "social" :
        return /* SocialLink */Block.__(2, [
                  id,
                  url
                ]);
    default:
      throw [
            UnknownKindOfLink,
            kind
          ];
  }
}

function decode(json) {
  return {
          schoolStrings: Json_decode.field("strings", decodeStrings, json),
          schoolImages: Json_decode.field("images", decodeImages, json),
          links: Json_decode.field("links", (function (param) {
                  return Json_decode.list(decodeLink, param);
                }), json)
        };
}

exports.UnknownKindOfLink = UnknownKindOfLink;
exports.logoOnLightBg = logoOnLightBg;
exports.icon = icon;
exports.coverImage = coverImage;
exports.url = url;
exports.filename = filename;
exports.address = address;
exports.emailAddress = emailAddress;
exports.privacyPolicy = privacyPolicy;
exports.termsOfUse = termsOfUse;
exports.headerLinks = headerLinks;
exports.footerLinks = footerLinks;
exports.socialLinks = socialLinks;
exports.unpackLinks = unpackLinks;
exports.addLink = addLink;
exports.removeLink = removeLink;
exports.optionalString = optionalString;
exports.updatePrivacyPolicy = updatePrivacyPolicy;
exports.updateTermsOfUse = updateTermsOfUse;
exports.updateAddress = updateAddress;
exports.updateEmailAddress = updateEmailAddress;
exports.decodeFile = decodeFile;
exports.decodeImages = decodeImages;
exports.updateImages = updateImages;
exports.decodeStrings = decodeStrings;
exports.decodeLink = decodeLink;
exports.decode = decode;
/* No side effect */

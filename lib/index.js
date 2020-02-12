const loaderUtils = require("loader-utils");
const validate = require("schema-utils");
const md2HtmlUtils = require("./utils");

let json = {
  type: "object",
  properties: {
    testA: {
      type: "string"
    },
    testB: {
      type: "string"
    }
  }
};

module.exports = function(content) {
  // 获取loader 的参数
  const options = loaderUtils.getOptions(this) || {};
  validate(json, options, "md-loader");

  var innerHtml = content;
  innerHtml = md2HtmlUtils.md2h1(innerHtml);
  innerHtml = innerHtml.replace(/\n/g, "<br/>");

  return `module.exports='${innerHtml}'`;
};

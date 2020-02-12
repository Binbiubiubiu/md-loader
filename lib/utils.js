function md2html(source, regStr, transformRegStr, tag) {
  if (!tag) {
    throw new Error("replace tag can't be null");
  }

  let result = new String(source);
  const mdReg = new RegExp(regStr, "g");
  const it = result.match(mdReg);

  for (let i = 0; i < it.length; i++) {
    const content = it[i].match(new RegExp(transformRegStr))[1];
    result = result.replace(it[i], `<${tag}>${content}</${tag}>`);
  }

  return result;
}

const matchRegUtils = {
  h1: "# ([\\w\\W]+?)(?=\\n)"
};

const transformRegUtils = {
  h1: "# ([\\w\\W]+)"
};

module.exports = {
  md2h1: function(source) {
    return md2html(source, matchRegUtils.h1, transformRegUtils.h1, "h1");
  }
};

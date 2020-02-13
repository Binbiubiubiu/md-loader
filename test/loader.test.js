import compiler from "./compiler";

test("Input markdown file and output html template", async () => {
  const stats = await compiler("example.md");
  const output = stats.toJson().modules[0].source;

  expect(output).toBe(
    `module.exports='<h1>测试 app</h1><br/><br/><h1>测试 app2</h1><br/><br/><h1>测试 app3</h1><br/>'`
  );
});

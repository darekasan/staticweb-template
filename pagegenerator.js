const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");

main();

function main() {
    
    compileArticles();

}

function compileArticles() {
    let jsonData = JSON.parse(fs.readFileSync("src/json/articles.json", "utf8"));
    let templatePath = "src/ejs/articles/_article.ejs";
    

    for (let key in jsonData.items) {
        let outPath = path.join("public_html/articles/", key + ".html");
        compileEjs(templatePath, outPath,
            { jsonData: jsonData, pageId: key }
        );
    }
}

function compileEjs(pathToTemplate, pathToOutFile, vars) {
    ejs.renderFile(
        pathToTemplate,
        vars,
        (err, html) => {
            if (!err) {
                fs.outputFileSync(pathToOutFile, html, "utf8");
            } else {
                console.error(err);
            }
        }
    );
}
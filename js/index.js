define("index",
["./js/news", "./css/news"],
function(news1, style1){
    var news1 = require("./js/news");
    var style1 = require("./css/news");
    api.fetch(renderer.generateNews);
})
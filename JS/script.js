// Getting instafeed ready to deploy pictures to my "instafeed" div.
var Instafeed = require("instafeed.js");


var feed = new Instafeed ({
	get: "tagged",
	tagName: "yeezyforsale",
	clientId: "ef2697a072c24e968b67f86c7850f95c"
});

feed.run();
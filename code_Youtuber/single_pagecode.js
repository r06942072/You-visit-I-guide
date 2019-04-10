// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import wixData from 'wix-data';

$w.onReady(function () {
	//TODO: write your page related code here...	
});

export function radioGroupDE_click(event) {
	let index = $w('#radioGroupDE').selectedIndex;
	if (index === 0) {
		video_refresh("DE1", "#videoDE", "#authorDE", "#textDE");
	} else if (index === 1) {
		video_refresh("DE2", "#videoDE", "#authorDE", "#textDE");
	} else if (index === 2) {
		video_refresh("DE3", "#videoDE", "#authorDE", "#textDE");
	} else {
		console.log("We only have three videos");
	}
}
// add two parameters : author and description
export function video_refresh(video_id, panel_video, panel_author, panel_description) {
	wixData.query("Youtubers")
		.hasSome("language", video_id)
		.find()
		.then((results) => {
			console.log("totalCount: " + results.totalCount);
			let obj = results.items[0];
			console.log(obj);
			$w(panel_video).videoUrl = obj.url;
			$w(panel_author).text = "#Youtuber: " + obj.author;
			$w(panel_description).text = "#Highlight: \n" + string_split(obj.description, ",");
		});
}
export function string_split(str, delimiter) {
	let final_str = [];
	let array = str.split(delimiter);
	for (let i=0; i<array.length; i++) {
		let order = i+1;
		final_str = final_str + order.toString() + '. ' + array[i] + '\n';
	}
	return final_str;
}

export function videoES_mouseIn(event) {
	let isRendered = $w("#videoES").rendered;
	let id = $w('#videoES').type;
	console.log("IsRendered" + isRendered);
	console.log("ID" + id);
}
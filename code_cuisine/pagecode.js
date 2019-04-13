//cuisine
import wixData from 'wix-data';
import { get_collection } from 'backend/get_query.jsw';
let collection_id = "mine44_ten";

$w.onReady(function () {
	let dropdown_value = $w("#dropdown1").value;
	update_page(dropdown_value, collection_id);
});
export function dropdown1_change(event) {
	let dropdown_value = $w("#dropdown1").value;
	update_page(dropdown_value, collection_id);
}
export function update_page(dropdown_value, collection_id) {
	get_collection(collection_id).then((obj) => {
		let obj_size = obj["items"].length;
		let style = obj["items"].map((item) => { return item["style"] });
		let name = obj["items"].map((item) => { return item["name"] });
		let url = obj["items"].map((item) => { return item["url"] });
		let address = obj["items"].map((item) => { return item["address"] });
		//array of Object
		let Arr = [];
		let index = 0;
		for (let i = 0; i < obj_size; i++) {
			if (style[i] === dropdown_value) {
				index = index + 1;
				let data = {
					index: index,
					style: style[i],
					name: name[i],
					url: url[i],
					address: address[i]
				};
				Arr.push(data);
			}
		}
		//push to html
		$w('#html1').postMessage({ Arr });
		//push to table
		let table_id = "#table1";
		$w(table_id).rows = Arr;
		//set icon_website and icon_gmap
		link2img(Arr);
	});
}
export function link2img(Arr) {
	for (let i = 0; i < Arr.length; i++) {
		//Arr[0] -> image1 and image11
		//Arr[1] -> image2 and image12
		let base = 10;
		let id_website = '#image' + (i + 1).toString();
		let id_gmap = '#image' + (i + base + 1).toString();
		let link_website = Arr[i].url;
		let link_gmap = 'http://maps.google.com/?q=' + Arr[i].name;
		add_link(id_website, link_website);
		add_link(id_gmap, link_gmap);
	}
}
export function add_link(id, link) {
	$w(id).link = link;
}
/*
export function query_icon(field_key) {
	wixData.query("cuisine_table")
		.contains(field_key)
		.find()
		.then((results) => {
			let obj = results.items[0];
			return obj;
		});
}
export function push2json(json) {
	var obj = JSON.parse(json);
	obj.push({"icon_website":query_icon(icon_website), "icon_gmap":"ss"});
	final_json = JSON.stringify(obj);
	return final_json;
}
*/
/*
//push to text
let final_text = '<Detail lists below>' + '\n' + 'Restaurant name, website' + '\n\n';
let order = 0;
for (let i = 0; i < obj_size; i++) {
	if (style[i] === dropdown_value) {
		order = order + 1;
		final_text = final_text.concat(
			order.toString() + '. ' + name[i] + ', ' + url[i] + '\n'
		);
	}
}
$w("#textTPE").text = final_text;
*/
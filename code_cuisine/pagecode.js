//cuisine
import wixLocation from 'wix-location';
import { get_collection } from 'backend/get_query.jsw';
let collection_id = "mine44_ten";

$w.onReady(function () {
	let path = '>  ';
	path = path + wixLocation.path[0]; //not the full url just everything after the first /
	$w('#textBread').text = path;
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
		update_link_button(Arr);

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
	});
}
export function update_link_button(Arr) {
	for (let i = 0; i < Arr.length; i++) {
		let button_id = '#button' + (i+1).toString();
		let link = Arr[i].url;
		$w(button_id).link = link;
	}	
}
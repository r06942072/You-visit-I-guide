//cuisine
import { get_collection } from 'backend/get_query.jsw';
let collection_id = "my44_10datas";

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
		//Organize as array of Object
		let Arr = [];
		for (let i = 0; i < obj_size; i++) {
			if (style[i] === dropdown_value) {
				let index_str = i.toString();
				let data = {
					index: index_str
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
		/*
		let tableRows = [
			{
				"index": "John",
				"chinese": "Doe",
				"name": "john.doe@somedomain.com",
				"link": "http://someImageUrl/john.jpg",
				"address": "幹靠背"
			},
			{
				"index": "Tony",
				"chinese": "Doe",
				"name": "john.doe@somedomain.com",
				"link": "http://someImageUrl/john.jpg",
				"address": "dd"
			}
		] */
		//$w("#myTable").rows = Arr;

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
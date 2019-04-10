//pass information as the form array of json object to IFrame
import { get_44 } from 'backend/get_query.jsw';

$w.onReady(function () {
	let dropdown_value = $w("#dropdown1").value;
	update_page(dropdown_value);
});


export function dropdown1_change(event) {
	let dropdown_value = $w("#dropdown1").value;
	update_page(dropdown_value);
}

export function update_page(dropdown_value) {
	get_44().then((obj) => {
		let obj_size = obj["items"].length;
		let Arr = [];	
		let style = obj["items"].map((item) => { return item["style"] });
		let name = obj["items"].map((item) => { return item["name"] });
		let url = obj["items"].map((item) => { return item["url"] });
		let address = obj["items"].map((item) => { return item["address"] });
		//push to html
		for (let i = 0; i < obj_size; i++) {
			if (style[i] === dropdown_value) {
				let data = {
					style: style[i],
					name: name[i],
					url: url[i],
					address: address[i]
				};
				Arr.push(data);
			}
		}
		$w('#html1').postMessage({ Arr });
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
	});
}
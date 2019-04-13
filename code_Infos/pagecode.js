//Infos
import { get_collection } from 'backend/get_query.jsw';

let collection_id = "my8";

$w.onReady(function () {
	get_collection(collection_id).then((obj) => {
		let Arr = [];
		let obj_size = obj["items"].length;
		let lng = obj["items"].map((item) => { return item["lng"] });
		let lat = obj["items"].map((item) => { return item["lat"] });
		let county = obj["items"].map((item) => { return item["county"] });
		let psi = obj["items"].map((item) => { return item["psi"] });
		for (let i = 0; i<obj_size; i++) {
			let data = {
				county: county[i],
				psi: psi[i],
				coords: { lat: parseFloat(lat[i], 10), lng: parseFloat(lng[i], 10) }
			};
			Arr.push(data);
		}
		$w('#html1').postMessage({ Arr });
	});
});


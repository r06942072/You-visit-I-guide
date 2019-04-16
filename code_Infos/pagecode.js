//Infos
import { get_collection } from 'backend/get_query.jsw';
import { fetch } from 'wix-fetch';
let collection_id = "my8";

$w.onReady(function () {
	/*
	let Arr = [];
	const url_my8 = "https://www.easytraffic.com.tw/OpenService/Scourge/Airpollution?$top=10";
	fetch(url_my8, { method: 'get' })
		.then(response => response.json())
		.then(json => {
			//console.log(json[0].county);
			//console.log(json[9].psi);
			console.log(json);
			for (let i=0; i<10; i++) {
				let data = {
					county: json[i].county,
					psi: json[i].psi
				};
				Arr.push(data);	
			}
		});
	console.log(Arr);
	$w('#html1').postMessage( Arr );
	*/
	get_collection(collection_id).then((obj) => {
		let Arr = [];
		let obj_size = obj["items"].length;
		//let lng = obj["items"].map((item) => { return item["lng"] });
		//let lat = obj["items"].map((item) => { return item["lat"] });
		let county = obj["items"].map((item) => { return item["county"] });
		let psi = obj["items"].map((item) => { return item["psi"] });
		for (let i = 0; i<obj_size; i++) {
			let data = {
				county: county[i],
				psi: psi[i],
				//coords: { lat: parseFloat(lat[i], 10), lng: parseFloat(lng[i], 10) }
			};
			Arr.push(data);
		}
		console.log(Arr);
		$w('#html1').postMessage({ Arr });
	});
});
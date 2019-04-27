//Infos
//import { get_collection } from 'backend/get_query.jsw';
//let collection_id = "my8";
import { fetch } from 'wix-fetch';
import wixWindow from 'wix-window';

$w.onReady(function () {
	let language = wixWindow.multilingual.currentLanguage; //postmessage 1
	let lang_legend = []; //postMessage 2
	if (language === 'en') {
		lang_legend = ['Good', 'So-so', 'Bad'];
	}
	else if (language === 'es') {
		lang_legend = ['Bien', 'Más o menos', 'Mal'];
	}
	else if(language === 'de') {
		lang_legend = ['Gut', 'Ausreichend', 'Schlect'];
	}

	const url_my8 = "https://www.easytraffic.com.tw/OpenService/Scourge/Airpollution?$top=10";
	fetch(url_my8, { method: 'get' })
		.then(response => response.json())
		.then(json => {
			let Arr = []; //postMessage 3
			for (let i = 0; i < Object.keys(json).length; i++) {
				let data = {
					county: json[i].county,
					psi: parseInt(json[i].psi, 10)
				};
				Arr.push(data);
			}
			console.log(Arr);
			$w('#html1').postMessage({ language, lang_legend, Arr });
		});
	/*
	console.log("Get collection: ");
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
		console.log(typeof(Arr));
		$w('#html1').postMessage({ Arr });
	});
	*/
});
import { fetch } from 'wix-fetch';
import { wixData } from 'wix-data';
import { getJSON } from 'wix-fetch';

//fetch open data from 3rd party
export function save_8() {
	const url = "https://www.easytraffic.com.tw/OpenService/Scourge/Airpollution?$top=10";
	let datas = fetch(url, { method: 'get' })
		.then(response => response.json())
		.then(json => json);
	//syntax: wixData.insert(collection, item)
	let collection = "my8";
	//promise.forEach((item) => {
	//	wixData.insert(collection, item);
	//});
	return datas;
}
export function save_32() {
	//fetch json from url, and save to WIX db
	//const url = "https://gis.taiwan.net.tw/XMLReleaseALL_public/hotel_E_f.json";
	const url = "https://www.easytraffic.com.tw/OpenService/Bus/City?$top=10";
	let toSave = fetch(url, { method: 'get' })
		.then((httpResponse) => {
			if (httpResponse.ok) {
				return httpResponse.json();
			}
			else {
				return Promise.reject("Fetch did not succeed");
			}
		}).then((data) => {
			data = JSON.stringify(data);
			return data;
		});
	return toSave;
	/*
	return getJSON(url)
		.then(json => return json.XML_Head.Language)
		.catch(err => return Promise.reject("Fetch did not succeed"));
	*/
	//
}

export function save_40() {
	const url = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=1767eecc-affc-4929-b484-bd46c5d9d10d";
	let fetch_40 = fetch(url, { method: 'get' })
		.then((httpResponse) => {
			if (httpResponse.ok) {
				return httpResponse.json();
			}
			else {
				return Promise.reject("Fetch did not succeed");
			}
		}).then((json) => {
			return json.result.limit;
		});
	return fetch_40;
}
export function save_test() {
	let toSave = {
		"first_name": "John",
		"last_name": "Doe"
	};
	/*
	let options = {
		"suppressAuth": true,
		"suppressHooks": true
	  };
	*/
	wixData.insert('test2', toSave);
	wixData.save('test2', toSave)
		.then((results) => {
			let item = results; //see item below
			return results;
		})
		.catch((err) => {
			let errorMsg = err;
			return err;
		});
}
/*
export function save_34() {
	//Fail to parse json
	const url = "https://gis.taiwan.net.tw/XMLReleaseALL_public/restaurant_C_f.json";
	let promise = fetch(url, { method: 'get' })
		.then(response => response.json())
		.then(json => json.XML_Head.Infos.Info);
	return promise
}
*/
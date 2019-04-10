import wixData from 'wix-data';

export function get_8() {
	return wixData.query("my8")
		.find()
		.then((results) => { return results; })
		.catch((err) => { let errorMsg = err; });
}

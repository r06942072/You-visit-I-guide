//pass information as the form array of json object to IFrame
//JavaScript Object Literal
// Filename: backend/get.jsw (web modules need to have a .jsw extension)
import wixData from 'wix-data';

export function get_collection(name) {
	return wixData.query(name)
	.limit(1000)
	.find()
	.then((results) => { return results; })
	.catch((err) => { let errorMsg = err; });
}

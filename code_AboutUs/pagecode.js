//Home
import wixWindow from 'wix-window';
//import { load } from 'backend/load_variables.jsw';

$w.onReady(function () {
	load();
});
export function load() {
	//let page_id = wixLocation.path;
	//console.log(page_id);
	let language = wixWindow.multilingual.currentLanguage;
    //let myTitle = $w("#myPage").title;
    if (language == 'en') {

	}
	else if (language == 'es') {

	}
	else if (language == 'de') {

	}
	else {
		console.log("No such languages");	
	} 
}
/*
let id = '#myGallery';
//onClick
$w(id).onItemClicked((event) => {
	//let currentIndex = $w(id).currentIndex;
	let itemDescription = event.item.description; // "Description"
	let itemIndex = event.itemIndex;         
	if (itemIndex == 0) {
	}
	else if(itemIndex == 1) {
	}
	else if(itemIndex == 2) {		
	}
});
*/
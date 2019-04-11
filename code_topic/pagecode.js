//Topic
import wixLocation from 'wix-location';

$w.onReady(function () {
	let path = '>  ';
	path = path + wixLocation.path[0]; //not the full url just everything after the first /
	$w("textBread").text = path;
});
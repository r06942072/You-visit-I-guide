import { session } from 'wix-storage';  //The session ends when the user closes the browser tab

export function render_bread() {
	let sBread = session.getItem('breadtrail');
	return path;
}
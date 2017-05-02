var scrolling=false;
function click(e) {
	scrolling=true;
	chrome.browserAction.setIcon({path:"green.png"});
    chrome.tabs.executeScript(null, { file: "jquery-2.1.3.min.js" }, function() {
        chrome.tabs.executeScript(null, { file: "content.js" });
    });
	window.close();
}
function stop(){
	chrome.browserAction.setIcon({path:"icon.png"});
	chrome.tabs.executeScript(null,
	{code:"clearTimeout(t);console.log('Stopped');"});
}

document.addEventListener('DOMContentLoaded', function () {
	stop();
	document.getElementById('hi').addEventListener('click', click);
	document.getElementById('stop').addEventListener('click', stop);
	
});
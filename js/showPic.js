function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
}

function showText(whichText){
	var titleText = whichText.getAttribute("title");
}

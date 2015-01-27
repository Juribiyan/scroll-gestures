var rmbd;

document.body.onmousedown = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)
        isRightMB = e.which == 3; 
    else if ("button" in e)
        isRightMB = e.button == 2; 

    if(isRightMB) rmbd = true;
} 

document.body.oncontextmenu = function (e) {
    if(rmbd === 1) {
    	e.preventDefault();
	}
    rmbd = false;
} 

window.onmousewheel = function(ev) {
	if(rmbd) {
		if(ev.wheelDelta > 0) 
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		if(ev.wheelDelta < 0) 
			window.scrollTo(0, document.body.scrollHeight);
		rmbd = 1;
	}
}
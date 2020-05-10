function disableScroll(e){
	
	if (e.keyCode) {
		/^(32|33|34|35|36|38|40)$/.test(e.keyCode) && e.preventDefault();
	}else {
		e.preventDefault();
	}

}

addEventListener("mousewheel", disableScroll, false);
addEventListener("DOMMouseScroll", disableScroll, false);
addEventListener("keydown", disableScroll, false);

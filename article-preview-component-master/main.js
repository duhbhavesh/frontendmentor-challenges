const state = {
	working: false,
};

var toggleShare = function () {
	state.working = !state.working;
	handleShare();
};

var handleShare = function () {
	if (state.working) {
		document.querySelector('#share_btn').classList.add('active');
		document.querySelector('#share_panel').classList.add('active');
	} else {
		document.querySelector('#share_btn').classList.remove('active');
		document.querySelector('#share_panel').classList.remove('active');
	}
};

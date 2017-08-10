var bigNav = document.getElementsByClassName('big-nav')[0];

var navWrapper = document.getElementsByClassName('nav-wrapper')[0];

var firstLevelNav = document.getElementsByClassName('first-level')[0];
var firstLevelItems = firstLevelNav.getElementsByTagName('li');
var firstLevelItemsSlicey = Array.prototype.slice.call(firstLevelItems);

var secondLevelNav = document.getElementsByClassName('second-level')[0];
var secondLevelItems = secondLevelNav.getElementsByTagName('ul');

var defaultBlock = document.getElementsByClassName('default-block')[0];

firstLevelNav.addEventListener('mouseover', listHoverAction, false);
navWrapper.addEventListener('mouseleave', resetDefaultBlock, false);
document.addEventListener('click', resetDefaultBlockTargetCheck, false);

function listHoverAction(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		var target = e.target;
		var index = firstLevelItemsSlicey.indexOf(e.target);
		var listBgImgData = target.dataset.bgImg;

		clearSelectedAndShowy();
		hideDefaultNavMsg();

		bigNav.dataset.bgImg = listBgImgData; 

		target.classList.add('selected');
		secondLevelItems[index].classList.add('show');

		e.stopPropagation();
	}
}


function hideDefaultNavMsg(e) {
	if ( !(defaultBlock.classList.contains('hide')) ) {
		defaultBlock.classList.add('hide');
	}
};

function resetDefaultBlockTargetCheck(e) {
	if (e.target !== firstLevelNav && !firstLevelNav.contains(e.target) && e.target !== secondLevelNav && !secondLevelNav.contains(e.target)) {
		clearSelectedAndShowy();
		defaultBlock.classList.remove('hide');
		bigNav.dataset.bgImg = 'default';
	}
}

function resetDefaultBlock() {
	clearSelectedAndShowy();
	defaultBlock.classList.remove('hide');
	bigNav.dataset.bgImg = 'default';
}

function clearSelectedAndShowy(e) {
	var showy = document.getElementsByClassName('show')[0];
	if (showy) {
		showy.classList.remove('show');
	}
	var selected = document.getElementsByClassName('selected')[0];
	if (selected) {
		selected.classList.remove('selected');
	}
};
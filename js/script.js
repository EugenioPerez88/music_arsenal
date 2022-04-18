const slider = document.querySelector("#slider-sale");
let sliderSection = document.querySelectorAll(".sale-slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
	let sliderSectionFirst = document.querySelectorAll(".sale-slider-section")[0];
	slider.style.marginLeft = "-125%";
	slider.style.transition = "all 3s ease";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend',sliderSectionFirst );
		slider.style.marginLeft = "-100%";
	}, 500);
}

function prev(){
	let sliderSection = document.querySelectorAll(".sale-slider-section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 3s ease";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
}

btnRight.addEventListener('click', function(){
	next();
});

btnLeft.addEventListener('click', function(){
	prev();
});

/*setInterval(function(){
	next();
}, 5000);*/
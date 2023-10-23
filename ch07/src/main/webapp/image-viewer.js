var imageViewer = {

	_images: [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" 
	],

	changeImage: function() {
	// 랜덤 변수
		var index = Math.floor( Math.random() * this._images.length);
		var info = this._images[index].split(":");
		
		$("div img")
			.attr("src", "/ch07/images/" + info[1])
			.attr("alt", info[0])
			.attr("title", info[0]);
	},

	slideShow:null,

	startSlideshow: function() {
		this.slideShow = setInterval(function() { 
			this.changeImage();
		}.bind(this), 1000);
	},

	stopSlideshow: function() {
		clearInterval(this.slideShow);
	},
	
		init: function(){
		
		var isSlideshow = false;
		
		var _this = this;
		
		$("#btn-change").click(function(){
			_this.changeImage();
		});

		$("#btn-slideshow").click(function() {

			isSlideshow = !isSlideshow;
			$(this).text(isSlideshow ? '슬라이드쇼 중지' : '슬라이드쇼 시작');
				if(!isSlideshow){
					_this.stopSlideshow();
					return;
				}
			_this.startSlideshow();

		});
	}
}

$(function(){
	imageViewer.init();
});
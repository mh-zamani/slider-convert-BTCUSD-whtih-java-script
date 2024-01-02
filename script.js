var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button" },

  effect: "fade",
  loop: "infinite",
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction" } });



swiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});
/* convert */
$("input[name='calc']").keyup(function(){
  $.getJSON( "https://api.coindesk.com/v1/bpi/currentprice/usd.json", 
     function( data) {
     var amountInBtc = parseFloat($("input[name='calc']").val());
     //convert btc to usd
     var exchangeRate = parseInt(data.bpi.USD.rate_float);
     var amount = amountInBtc * exchangeRate;
     $("input[name='rslt']").val(amount);
     });
 });
 /* quotes random */
var quotes = JSON.parse(
	'{\
	"0": "You must be the change you wish to see in the world. -Mahatma Gandhi",\
	"1": "Only a life lived for others is a life worthwhile -Albert Einstein",\
	"2": "The purpose of our lives is to be happy.",\
	"3": "Well done is better than well said. -Benjamin Franklin",\
	"4": "Do one thing every day that scares you. -Eleanor Roosevelt",\
	"5": "You must be the change you wish to see in the world. -Mahatma Gandhi"\
  }'
  );
  
  function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }
  
  function updateQuote() {
	var num = Math.floor(getRandomArbitrary(0, Object.keys(quotes).length));
	document.getElementById("quote").innerHTML = quotes[num];
  }
  
  updateQuote();
  setInterval(updateQuote,3000);
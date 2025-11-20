let header=document.querySelector("header")
window.addEventListener("scroll",()=>{
   if(window.scrollY>=100){
        header.classList.add("haederScrollFixed")
   }
   else{
     header.classList.remove("haederScrollFixed")
   }
   
    
})



  $('#testimonial').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('#blogSlider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4.2
            }
        }
    })

    // -----Country Code Selection
$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});


  AOS.init();
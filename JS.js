<script>
	  function showSlides(containerClass) 
	  {
	    var slideIndex = 0;
	    var slides = document.querySelectorAll("." + containerClass + " .slide");
	    showSlide();

	    function showSlide() {
	      slideIndex++;
	      if (slideIndex > slides.length) {
	        slideIndex = 1;
	      }
			for (var i = 0; i < slides.length; i++) 
			{
				if (i == slideIndex - 1) 
					{
						slides[i].style.display = "block";
					} 
				else 
					{
						slides[i].style.display = "none";
					}
			}
			setTimeout(showSlide, 2000); // Change image every 2 seconds
	    }
	  }

	  showSlides("slideshow-container"), showSlides("slideshow-container2");;
</script>

// Hamburger Menu open and hide on mobile phone
function toggleMenu() 
{
    var x = document.getElementById("menu_navigation");
    if (x.className === "active") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "active";
    }
}

// Smooth Scroll on anchor click
$(document).on('click', 'a', function(event)
{
    event.preventDefault();
    if($(this).hasClass("buttonscroll"))
    {
    	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 1000);
    }
    else if($(this).hasClass("scroll"))
    {
    	$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 1000);
    }
    else if($(this).hasClass("contact_link"))
    {
    	window.open($(this).attr("href"));
    }
    else
    {
    	return;
    }
});

// Back to top button fade in and out
$(window).scroll(function()
{ 
    if ($(this).scrollTop() > 75) 
    { 
        $('#scroll').fadeIn(); 
    } 
    else 
    { 
        $('#scroll').fadeOut(); 
    } 
});
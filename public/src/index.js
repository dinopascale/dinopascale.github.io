"use strict";
/*
* showContact is a function for hiding/showing the bottom fixed  * div. It's called on scroll event and it calculates if user
* position is above or below section (#bot--js) before 
* fixed div
*/

function showContact () {
    var height = $(window).scrollTop(),
        distance = $("#bot--js").offset().top,
        fixed_bot = $("#fixed--js");
    (height >= distance) 
        ? (fixed_bot.removeClass('hidden'),fixed_bot.addClass('show')) 
        : (fixed_bot.removeClass('show'),fixed_bot.addClass('hidden'));
}

function createArrAnimation (index) {
    var arr_elements = $("."+index),
        atlas        = [];                
    $.each(arr_elements, function() {
        var element = $(this)
        atlas.push({
            id:element.data('js'),
            top:element.offset().top,
        })
    })
    return atlas
}

function checkInView(arr) {
    var windowTop = $(window).scrollTop(),
        windowHeight = $(window).height(),
        elId = null;
    for (var i = 0, len = arr.length;i<len;i++) {
        if(windowTop*0.95 > (arr[i].top - windowHeight)) {
            elId = arr[i].id;
            arr.splice(i,1)
            break;
        }
    }
    return elId;
}

function fadeOnScroll (arr) {
    var elToAnimate = checkInView(arr);
    if(elToAnimate) {
        $(document).find("[data-js='"+elToAnimate+"']").addClass('fadeIn') 
    }
}

/*EVENT DELEGATION ANCHOR LINK MENU*/
function anchorLink() {
    var targetClick = event.target;
    if(targetClick.tagName !== 'A') return false
    event.preventDefault();
    var target = (targetClick.hash === '#home')
                    ? $('#wrapper')
                    : $(targetClick.hash);
    if($('#menu-btn').is(':visible')) {
        $('#menu-btn').trigger('click')   
    }
    $('html,body').animate({
        scrollTop:target.offset().top-50
    }, 900, 'swing', function () {
        
    });

}

function addNavShadow () {
    if( $(window).scrollTop() > 100 && !$('#nav').hasClass('shadow')) {
        $('#nav').addClass('shadow')
    } else if ( $(window).scrollTop() < 100 ) {
        $('#nav').removeClass('shadow') 
    }
}



$(document).ready(function () {
    var animationIndex = createArrAnimation('animate--js'),
        menuBtn = $('#menu-btn');
    $(window).scroll(addNavShadow);    
    $(window).scroll(showContact);
    $(window).scroll(function() {
        fadeOnScroll(animationIndex)
    })
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });
    menuBtn.click(function() {
        $('body').toggleClass('_disable-scroll')
        menuBtn.toggleClass('close open')
        setTimeout(function(){
          (menuBtn.text()==='menu') ? menuBtn.text('close') : menuBtn.text('menu')
        },250)
        $('#menu').toggle();
        $('#menu').toggleClass('menu--close menu--open')
    })
    $('#menu-list').click(anchorLink)
    $('#menu-list-expanded').click(anchorLink)
})
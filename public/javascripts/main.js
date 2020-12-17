$(document).ready(function() { new Enjine.Application().Initialize(new Mario.LoadingState(), 320, 240) });
$(function () {
    $(".resize").resizable();

    $("#Win").draggable({
        handle: "#Winnav"
    });
    $("#Win_contact").draggable({
        handle: "#Winnav_Notepad"
    });
    $("#Win_gallery").draggable({
        handle: "#Winnav_gallery"
    });
    $("#Win_faq").draggable({
        handle: "#Winnav_Notepad"
    });
    $("#Win_location").draggable({
        handle: "#Winnav_map"
    });
    $("#Win_price").draggable({
        handle: "#Winnav_Notepad"
    });
    $("#Win_about").draggable({
        handle: "#Winnav_Notepad"
    });
    $("#Win_games").draggable({
        handle: "#Winnav_games"
    });
    $("#Win_image1").draggable({
        handle: "#Winnav_image"
    });
    $("#Win_image2").draggable({
        handle: "#Winnav_image"
    });
    $("#Win_image3").draggable({
        handle: "#Winnav_image"
    });
    $("#Win_image4").draggable({
        handle: "#Winnav_image"
    });
    $("#Win_image5").draggable({
        handle: "#Winnav_image"
    });
    $("#Win_image6").draggable({
        handle: "#Winnav_image"
    });
    $(".icon").draggable();
    $('.close').click(function () {
        close($(this).closest(".win"));
    });
    let winWidth;
    let winHeight;
    let bool = 1;
    $('.max').click(function () {
        if(bool){
            winWidth = $(this).parent().parent().width();
            winHeight = $(this).parent().parent().height();
            $(this).parent().parent().css({width: "100%", height: "100%"});
            bool = 0;
            $(this).parent().parent().css({'left':"0px" , 'top':"0px"});
        }else{
            $(this).parent().parent().css({width: winWidth, height: winHeight});
            bool = 1;
            $(this).parent().parent().css({'left':"10px" , 'top':"10px"});
        }


    });
   
    function openContact() {
        $("#Win_contact").show();
        drawInPosition();
        
    }

    function openGallery() {
        $("#Win_gallery").show();
        drawInPosition();
       
    }

    function openFAQ() {
        $("#Win_faq").show();
        drawInPosition();
      
    }

    function openLocation() {
        $("#Win_location").show();
        drawInPosition();
       
    }

    function openGallery() {
        $("#Win_gallery").show();
        drawInPosition();
       
    }
    function openPrice() {
        $("#Win_price").show();
        drawInPosition();
      
    }
    function openAbout() {
        $("#Win_about").show();
        drawInPosition();
       
    }
    function openGames() {
        $("#Win_games").show();
        drawInPosition();
      
    }
    function openImage1() {
        $("#Win_image1").show();
        drawInPosition();
       
    }
    function openImage2() {
        $("#Win_image2").show();
        drawInPosition();
       
    }
    function openImage3() {
        $("#Win_image3").show();
        drawInPosition();
        
    }
    function openImage4() {
        $("#Win_image4").show();
        drawInPosition();
       
    }
    function openImage5() {
        $("#Win_image5").show();
        drawInPosition();
       
    }
    function openImage6() {
        $("#Win_image6").show();
        drawInPosition();
       
    }

    

    if (MobileVer()) {
        $('.icon.contact').click(function () {
            openContact();
        });
        $('.icon.gallery').click(function() {
            openGallery();
        });
        $('.icon.faq').click(function() {
            openFAQ();
        });
        $('.icon.location').click(function() {
            openLocation();
        });
        $('.icon.price').click(function() {
            openPrice();
        });
        $('.icon.about').click(function() {
            openAbout();
        });
        $('.icon.games').click(function() {
            openGames();
        });
        $('#image1').click(function() {
            openImage1();
        });
        $('#image2').click(function() {
            openImage2();
        });
        $('#image3').click(function() {
            openImage3();
        });
        $('#image4').click(function() {
            openImage4();
        });
        $('#image5').click(function() {
            openImage5();
        });
        $('#image6').click(function() {
            openImage6();
        });
    } else {
       
        $('.icon.contact').dblclick(function () {
            openContact()
        });
        $('.icon.gallery').dblclick(function() {
            openGallery();
        });
        $('.icon.FAQ').dblclick(function() {
            openFAQ();
        });
        $('.icon.location').dblclick(function() {
            openLocation();
        });
        $('.icon.price').dblclick(function() {
            openPrice();
        });
        $('.icon.about').dblclick(function() {
            openAbout();
        });
        $('.icon.games').dblclick(function() {
            openGames();
        });
        $('#image1').dblclick(function() {
       
            openImage1();
        });
        $('#image2').dblclick(function() {
            openImage2();
        });
        $('#image3').dblclick(function() {
            openImage3();
        });
        $('#image4').dblclick(function() {
            openImage4();
        });
        $('#image5').dblclick(function() {
            openImage5();
        });
        $('#image6').dblclick(function() {
            openImage6();
        });
       
    }
    $("body").on("contextmenu", false);
});

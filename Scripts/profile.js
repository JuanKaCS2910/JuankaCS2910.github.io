$(document).ready(function(){
    
    $("#profile-laboral-nav").click(function(){
        $("#profile-laboral").addClass("show");
        $("#profile-laboral").addClass("active");
        $("#profile-laboral-nav").addClass("active");

        $("#profile-about").removeClass("show");
        $("#profile-about").removeClass("active");
        $("#profile-about-nav").removeClass("active");
    });

    $("#profile-about-nav").click(function(){

        $("#profile-about").addClass("show");
        $("#profile-about").addClass("active");
        $("#profile-about-nav").addClass("active");

        $("#profile-laboral").removeClass("show");
        $("#profile-laboral").removeClass("active");
        $("#profile-laboral-nav").removeClass("active");
 

    });

    


});


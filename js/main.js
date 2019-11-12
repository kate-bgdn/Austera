
//mobile navigation

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");

});

//search area

$("#search-opener").click(function() {
    $(this).toggleClass("active");
    $(".form-drop").toggleClass("open");
    $(".search-opener").toggleClass("search-closer");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");

});



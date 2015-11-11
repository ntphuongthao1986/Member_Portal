$(".otherCoverage").click(function(){
	$("#otherCoverage").load("otherCoverage.html");
});


$(document).ready(function () {

    (function ($) {

        $('#search-box').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.benefits-table div').hide();
            $('.benefits-table div').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});

function openBenefitModal(url) {
   var options = {
        backdrop: "static", // Options to NOT close modal window when user clicks outside
        keyboard: false, // Disable ESC keyboard to close modal window
        show: false,
        remote: true
    }

    $(".modal").empty().load(url);
}
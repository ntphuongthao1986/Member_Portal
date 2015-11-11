$(document).ready(function(){
	
	/* initialize alderaselectbox */
	
	$('.alderaSelectbox').SumoSelect();
	
	$(document).on('click','.SumoSelect',function(){
		$(this).addClass('selectshadow');				
	});
	
	$(document).on('click','.SumoSelect ul li',function(e){
		$(this).parent().parent().parent().removeClass('selectshadow');
		e.stopPropagation();
	});
	
	/* Initialize date picker */
	
	$(function() {
		$( ".datepicker" ).datepicker({
		  showOn: "button",
		  buttonImage: "images/calendar.png",
		  buttonImageOnly: true,
		  buttonText: "Select date",
		  changeMonth: true,
		  changeYear: true
		});
	});
	
	/* Initialize custom scrollbar */
	
	var docheight = $(window).height();
	
	$("body").mCustomScrollbar({
		setHeight:docheight,
		theme:"minimal-dark",
		autoExpandScrollbar: true,
		mouseWheelPixels: 200
	});
	
	$(".modal, .modal-body").mCustomScrollbar({
		theme:"minimal-dark",
		autoExpandScrollbar: true,
		mouseWheelPixels: 200
	});
	
	/* selectbox focus function */
	
	$(document).on('focus','.SumoSelect',function(){
		$(this).addClass('selectshadow');
	});
	
	$(document).on('blur','.SumoSelect',function(){
		$(this).removeClass('selectshadow');
		$('.optWrapper').removeClass('open');
	});
	
	 /* Hide and show body scrollbar when modal triggered function */
	 
	$('.modal').on('shown.bs.modal', function () {
		$('body').css('overflow-y','hidden');
	}); 
	 
	$('.modal').on('hidden.bs.modal', function () {
		$('body').css('overflow-y','hidden');
	});
	
	$(document).on('focus','.input-group input',function(){
		$(this).parent().addClass('focused');
	});
	
	$(document).on('blur','.input-group input',function(){
		$(this).parent().removeClass('focused');
	});
	
	// datepicker focus function
	
	$(document).on('focus','.datepicker',function(){
		$(this).parent().addClass('focused');
	});
	
	$(document).on('blur','.datepicker',function(){
		$(this).parent().removeClass('focused');
	});
	
	// script for overview page
	
	var docheight = $(document).height();
	
	$('.overview-backdrop').height(docheight);
		
	$('.overview-backdrop').fadeIn('slow');
	$('.remind-header').fadeIn('slow');
	$('.overview-notification').addClass('bringfront');
	$(document).on('click','.overview-reminder-close',function(){
		$('.remind-header').fadeOut('slow');
		$('.overview-backdrop').fadeOut('slow',function(){
			$('.overview-notification').removeClass('bringfront');
		});
	});
	
	/*****/
	
	$('.collapse-menu-icon').click(function(){
	if($('nav').hasClass('active')){
		$('header, section').animate({left:"0px"}, 500);
		$('nav').animate({left:"-189px"}, 500);
		$('nav').removeClass('active');
	}else{	
		$('header, section').animate({left:"189px"}, 500);
		$('nav').animate({left:"0px"}, 500);
		$('nav').addClass('active');
	}
	});
	
	var noticebarheight = $('.noticebar').height();
	//alert(noticebarheight);
	$('.noticebar').css('top','-'+noticebarheight+'px');
	$('.noticebar').animate({top:"0px"}, 800);
	$('header').animate({marginTop:noticebarheight+"px"}, 800);
	
	$('.close-btn').click(function(){
		$('.noticebar').animate({top:"-"+noticebarheight+"px"}, 800);
		$('header').animate({marginTop:"0px"}, 800);
	});
	

	$('.options li').click(function(){
		//alert($('#locale').val());		
	}); 
	
	$(function() {
	 $('input, textarea').placeholder();
	});

	$(function() {
		$( "#datepicker" ).datepicker({
		  showOn: "button",
		  buttonImage: "images/calendar.png",
		  buttonImageOnly: true,
		  buttonText: "Select date",
		  changeMonth: true,
		  changeYear: true
		});
	  });
	  
	  $(function() {
		$( "#datepicker-from" ).datepicker({
		  showOn: "button",
		  buttonImage: "images/calendar.png",
		  buttonImageOnly: true,
		  buttonText: "Select date",
		  changeMonth: true,
		  changeYear: true
		});
	  });
	  
	  $(function() {
		$( "#datepicker-to" ).datepicker({
		  showOn: "button",
		  buttonImage: "images/calendar.png",
		  buttonImageOnly: true,
		  buttonText: "Select date",
		  changeMonth: true,
		  changeYear: true
		});
	  });
	  
	$( ".customdatepicker" ).focus(function(){
		$('.custom-calendar').show();
	});

	$("#date-select").click(function(){
		event.preventDefault();
		
		var fromDay = $('.daterange-from .daterange-day').val();
		var fromMonth = $('.daterange-from .daterange-month').val();
		var fromYear = $('.daterange-from .daterange-year').val();
		
		if(fromDay == "" || fromMonth == "" || fromYear == ""){
			$('#fromDate').val();
		}else{		
			$('#fromDate').val(fromMonth +"/"+ fromDay +"/"+ fromYear);
		}
		
		var toDay = $('.daterange-to .daterange-day').val();
		var toMonth = $('.daterange-to .daterange-month').val();
		var toYear = $('.daterange-to .daterange-year').val();
		
		if(toDay == "" || toMonth == "" || toYear == ""){
			$('#toDate').val();
		}else{
			$('#toDate').val(toMonth +"/"+ toDay +"/"+ toYear);
		}
		
		$('.custom-calendar').hide();
	});	
	
	for(var i=1;i<=31;i++){
		$(".daterange-day").append('<option value="'+i+'">'+ i +'</option>');
	}
	
	for(var i=1987;i<=2016;i++){
		$(".daterange-year").append('<option value="'+i+'">'+ i +'</option>');
	}	

	/* $('.selectpicker').selectpicker(); */	
	
	$('.providerLastName').focus(function(){
		$('.lookup-launch').slideDown()
						   .css("-webkit-box-shadow","0px 1px 3px #bbb")
						   .css("-moz-box-shadow","0px 1px 3px #bbb")
						   .css("box-shadow","0px 1px 3px #bbb");											
		
	});
	
	$('.providerLastName').blur(function(){
		$('.lookup-launch').slideUp()
	});
	
	/* responsive style */
	
	if($(document).width()<=1000){
		
		$('.custom-table-th:nth-child(2)').html('Date');
		
		$('.custom-table-td:nth-child(5)').append('<img class="mobile-right-nav" src="images/rightarrow.png">');
		
		var searchbarwidth = $('.searchBar').width();
		$('.searchBar').css("marginLeft",searchbarwidth+20+"px");
		var searchbarheight = $('.searchBar').height();
		
		$(".pageFilter").click(function(){					
			$('.searchBar').animate({marginLeft:"0px"}, 200);
		});
				
		$("#filter-cancel-btn").click(function(){
			$('.searchBar').animate({marginLeft:+searchbarwidth+20+"px"}, 400);
		});
				
	}
	
	$('#search-providers').bind('click', function(){
		
		$('#provider-lookup').modal('hide');
		$('#provider-lookup-result').modal('show');
		$('body').css('overflow-y','hidden');
		$('#provider-lookup-result .modal-body').css('overflow-y','scroll');
		$('#provider-lookup-result .modal-content').css('width','100%');
		
	});
	
	$('.lookup-launch').click(function(){
		
		/* var src = $(this).attr('data-src');
		var height = $(this).attr('data-height') || 300;
		var width = $(this).attr('data-width') || 400;
		
		$("#myModal iframe").attr({'src':src,
							'height': height,
							'width': width}); */	
		
		/* $('#provider-lookup').modal('show');	
		$('body').css('overflow-y','hidden'); */
		
	});
	
	$('#provider-select').click(function(){
		$('.searchBar').animate({marginLeft:+searchbarwidth+20+"px"}, 400);
		$('#provider-lookup-result').modal('hide');
		$('body').css('overflow-y','scroll');
	});
	
	$('.back-btn').click(function(){
		$('#provider-lookup-result').modal('hide');
		$('#provider-lookup').modal('show');
	});
	
	$('.custom-table-body').click(function(){
		window.location.href = 'claimDetails.html';
		if (e.target !== this) return;
	});
	
	// side navbar functionality
	
	$('.first-level-menu').click(function(){
		if($(this).children('.second-level-menu').hasClass('active')){
			reset();
			$(this).children('.second-level-menu').slideUp();
			$(this).children('.second-level-menu').removeClass('active');
			$(this).removeClass('active');
		}else{
			reset();
			$(this).children('.second-level-menu').slideDown();
			$(this).children('.second-level-menu').addClass('active');
			$(this).addClass('active');
		}
	});
	
	function reset(){
		$('.second-level-menu').slideUp();
		$('.second-level-menu').removeClass('active');
		$('.first-level-menu').removeClass('active');
	}
	
	$('.nav-buttons li').click(function(){
		
		var paneId = $(this).attr('data-panel');
		
		$('.nav-pane').removeClass('active');
		$('.nav-buttons li').removeClass('active');
		$(this).addClass('active');
		$('#'+paneId).addClass('active');
		
	});
	
	// Donut chart
	
	$('.overview-chart1').each(function () { 

	  var elm = $(this);
	  var color = elm.attr("data-fgColor");  
	  var perc = elm.attr("value");  

	  elm.knob({ 
		   'value': 0, 
			'min':0,
			'max':2000,
			"readOnly":true,
			"thickness":.12,                 
			'dynamicDraw': true,                
			"displayInput":false
	  });

	  $({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  
			elm.val(Math.ceil(this.value)).trigger('change')
		  }
	  });
	 
	  //circular progress bar color
	  $(this).append(function() {
		  elm.parent().parent().find('.circular-bar-content').css('color',color);
		  elm.parent().parent().find('.circular-bar-content label').text('$'+perc);
	  });

    });
	
	$('.overview-chart2').each(function () { 

	  var elm = $(this);
	  var color = elm.attr("data-fgColor");  
	  var perc = elm.attr("value");  

	  elm.knob({ 
		   'value': 0, 
			'min':0,
			'max':200,
			"readOnly":true,
			"thickness":.12,                 
			'dynamicDraw': true,                
			"displayInput":false
	  });

	  $({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  
			elm.val(Math.ceil(this.value)).trigger('change')
		  }
	  });
	 
	  //circular progress bar color
	  $(this).append(function() {
		  elm.parent().parent().find('.circular-bar-content').css('color',color);
		  elm.parent().parent().find('.circular-bar-content label').text('$'+perc);
	  });

    });
	
	$('.individual-benefit').each(function () { 

	  var elm = $(this);
	  var color = elm.attr("data-fgColor");  
	  var perc = elm.attr("value");  
	  var maxVal = elm.attr("max-value");

	  elm.knob({ 
		   'value': 0, 
			'min':0,
			'max':maxVal,
			"skin":"tron",
			"readOnly":true,
			"thickness":.17,                 
			'dynamicDraw': true,                
			"displayInput":false
	  });

	  $({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  
			elm.val(Math.ceil(this.value)).trigger('change')
		  }
	  });

	  //circular progress bar color
	  $(this).append(function() {
		  elm.parent().parent().find('.circular-bar-content').css('color',color);
		  elm.parent().parent().find('.circular-bar-content label').text('$'+perc+'.00');
	  });

    });
	
	$('.family-benefit').each(function () { 

	  var elm = $(this);
	  var color = elm.attr("data-fgColor");  
	  var perc = elm.attr("value");  
	  var maxVal = elm.attr("max-value");

	  elm.knob({ 
		   'value': 0, 
			'min':0,
			'max':maxVal,
			"skin":"tron",
			"readOnly":true,
			"thickness":.17,                 
			'dynamicDraw': true,                
			"displayInput":false
	  });

	  $({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  
			elm.val(Math.ceil(this.value)).trigger('change')
		  }
	  });

	  //circular progress bar color
	  $(this).append(function() {
		  elm.parent().parent().find('.circular-bar-content').css('color',color);
		  elm.parent().parent().find('.circular-bar-content label').text('$'+perc+'.00');
	  });

    });
	
	// Find a Provider functions
	
	$('.providerType').change(function(){
		if($(this).val() == 'hospital'){
			$(this).siblings('label').text('I need a');
		}else{
			$(this).siblings('label').text('I need');
		}
	});
	
	// Ratings function
	
	$('.ratings i.active').prevAll().addClass('active');
		
	$(document).on('click','.ratings i',function(){
		var ratings = $(this).parent();
		ratings.children('i').removeClass('active');
		ratings.children('i').removeClass('starred');
		$(this).addClass('active');	
		$(this).prevAll().addClass('active');
	});
	
	$(document).on('mouseover','.ratings i',function(){
		var ratings = $(this).parent();
		$(this).addClass('starred');
		$(this).prevAll().addClass('starred');
	}).on('mouseout','.ratings i',function(){
		var ratings = $(this).parent();
		ratings.children('i').removeClass('starred');
	});	
	
	$(window).scroll(function () {

		if ($(window).scrollTop() + $(window).height() > $('footer').offset().top) {
			$('.help-icon').css('position','absolute');
			$('.help-icon').css('bottom','0px');
		}else{
			$('.help-icon').css('position','fixed');
			$('.help-icon').css('bottom','40px');
		}
		
	});
	
	$('.choosecare-btn').click(function(){
		$('#primarycare-modal').modal('show')
	});
	
	// find a provider functions
	
	$(document).on('click','#addfilter-btn',function(){
		$('#searchprovider-filter').modal('show');
		$('body').css('overflow-y','hidden');
		$('#searchprovider-filter .modal-body').css('overflow-y','scroll');
		$('#searchprovider-filter .modal-content').css('width','100%');
	});
	
	$(document).on('click','.filterapply-btn',function(){
		$('#searchprovider-filter').modal('hide');
		var filters = '<div class="filtertag">' + 
							'<span>Primary Care</span>' +
							'<img src="images/remove.png" />' +
						'</div>';
		$('.searchwrap').append(filters);
		$('body').css('overflow-y','scroll');
	});
	
	$(document).on('click','.filtertag img',function(){
		$(this).parent().remove();
	});	
	
});

 // fix for IE < 11
if ($("<input />").prop("required") === undefined) {
	$('form').on("submit", function(e) {
		$(this)
			.find("input, select, textarea")
			.filter("[required]")
			.filter(function() { return this.value == ''; })
			.each(function() {
				e.preventDefault();
				$(this).siblings('span').remove();
				$(this).after('<span style="color:red;">This field is required</span>');
				//alert( $(this).prev('label').html() + " is required!");
			});
	});
}

// Loader function

NProgress.start();
setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 500);


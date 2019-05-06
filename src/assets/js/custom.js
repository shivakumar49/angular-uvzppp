
// Login page validation script
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

jQuery(document).ready(function(){
	//Tooltip for Action Buttons
	jQuery('[data-toggle="tooltip"]').tooltip();
	
  //Hamburger Menu Script
  jQuery('.hamburger-menu').click(function(){
    jQuery('.sidenav').toggleClass('active'); 
    jQuery('body').toggleClass('body-menu-open'); 
  });
  
  /*Mobile Search OPtion*/
  jQuery('.s-nav').click(function(){
  	jQuery(this).toggleClass('active');
  	jQuery('.search-section').toggleClass('expend');
  });
  
  //datepicker Script
  jQuery('.datepicker').datepicker({});
  
  //Datatable
  /*jQuery('.code-master-datatable').DataTable({
  	responsive: true
  });*/
  
	//Employee Profile - Veteran Status Checkbox
	jQuery("input[name$='veteranStatus']").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery(".check-option").show();
        } else {
            jQuery(".check-option").hide();
        }
    });
    
     
    
	//Social Security Number - View   
	jQuery(".ssn").click(function (e) {
	    e.preventDefault();
	    var type = jQuery("#ssNumber").attr('type');
	    switch (type) {
	        case 'password':
	        {
	            jQuery("#ssNumber").attr('type', 'text');
	            return;
	        }
	        case 'text':
	        {
	            jQuery("#ssNumber").attr('type', 'password');
	            return;
	        }
	    }
	});
	
	//Social Security Number - View   
	jQuery(".ssn-conf").click(function (e) {
	    e.preventDefault();
	    var type = jQuery("#ssNumberConf").attr('type');
	    switch (type) {
	        case 'password':
	        {
	            jQuery("#ssNumberConf").attr('type', 'text');
	            return;
	        }
	        case 'text':
	        {
	            jQuery("#ssNumberConf").attr('type', 'password');
	            return;
	        }
	    }
	});
	
	//Data Table Search section
	jQuery(".right-content .search-section .btn-search").click(function(){
		jQuery(this).closest("div.search-section").toggleClass("expendSearch");
	});
	
	//Data Table Option  
	jQuery(".dataTable-option").click(function(){
		jQuery(this).next(".action-buttons").toggleClass("expend");
	});
	
    
	
});

//Sidebar - Mobile View
function myFunction() {
   var element = document.getElementById("aside-mobile-section");
   element.classList.toggle("show");
   var element = document.getElementById("header");
   element.classList.toggle("z-index");
   var element = document.getElementById("body");
   element.classList.toggle("scroll-fixed");
}	
  


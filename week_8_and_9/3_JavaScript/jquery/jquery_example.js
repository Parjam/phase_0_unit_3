$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})
 
//RELEASE 1:
  //Add code here to select elements of the DOM 
 var bodyElement = $('body')
 
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 $('h1').css({'color': 'red', 'border': '5px', 'opacity': '10'})
 $('h1').html('YOUR COHORT MASCOT')
 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 $('img').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.humboldtherps.com/images/HCHSimage-Northwestern_Fence_Lizard_male-A_west_of_Loleta_CA_04-22-2007.JPG')
  })
 $('img').on('click', function(e){
 	e.preventDefault()
  $(this).attr('src', 'dbc_logo.jpg')
 })
 
//RELEASE 4 : Experiment on your own
 
 $('img').on('mouseover', function(e){
  e.preventDefault()
  $(this).attr('src', 'http://www.humboldtherps.com/images/HCHSimage-Northwestern_Fence_Lizard_male-A_west_of_Loleta_CA_04-22-2007.JPG')
  $('img').animate({
	height: 600
	})
})
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.

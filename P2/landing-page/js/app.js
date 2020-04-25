/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//Global variables
var sections = document.querySelectorAll('section');

//Define empty array to hold data-nav attribute of the sections
var navIds = [];

// Declare empty array for section names
let sectIds = [];



var navBar = function () {

  //loop through sections
  for (let i = 0; i < sections.length; i++) {

    //get attribute list of sections
    var attributes = sections[i].getAttribute('data-nav');

    for (let i = 0; i < attributes.length; i++);


    //Feed 'data-nav' attributes to navIds array for selection
    navIds.push(attributes);
  };
  // If there are no sections
  if (navIds.length > 0) {

    // Clear the navigation
    document.getElementById("navbar__list").innerHTML = "";
  };

  //loop through sections
  for (let i = 0; i < sections.length; i++) {

    //get anchors for sections
    var anchor = sections[i].getAttribute('id');

    for (let i = 0; i < anchor.length; i++);


    //Feed 'id' attributes to sectIds array for selection
    sectIds.push(anchor);
  };
  // If there are no sections
  if (sectIds.length > 0) {

    // Clear the navigation
    document.getElementById("navbar__list").innerHTML = "";
  };

  // Loop through the navIds
  for (var i = 0; i < navIds.length; i++) {

    // Get the nav element (ul)
    var navElem = document.getElementById("navbar__list");

    // Create a new li element
    var liElem = document.createElement("li");
    liElem.id = "element" + i.toString();
    // Add the li element to the nav (ul) element
    navElem.appendChild(liElem);

    // Create a new a element
    var aElem = document.createElement("a");
    liElem.id = "element" + i.toString();
    // Set the attributes on the new a element

    aElem.setAttribute('data-nav', navIds[i]);
    aElem.setAttribute('id', "nav"+sectIds[i]);
    aElem.setAttribute('class', 'menu__link');
    aElem.href = aElem + '#' + sectIds[i];
    aElem.innerHTML = navIds[i];
    liElem.appendChild(aElem);

    //addEventListener to aElem
    addEvent(liElem.id)
    // Add active class to section in view
    //scrollTo();
  };
}
//run the navBar function
navBar(); 

// Event Listener
function addEvent (ID) {
  if ( navIds.length ) {
    document.getElementById(ID).addEventListener("click", scrollTo(ID));
    console.log(ID)
  }
}


// Scroll function
  function scrollTo (ID) {
    document.getElementById(ID).scrollIntoView();
}

function onVisibilityChange(el) {
  var element = document.getElementById(el);
  var visible = isElementInViewport(el);
  if (visible && element.classList.contains('active') === false ) {
    element.classList.add("active")
    element.className="active"
  } else if (!visible && element.classList.contains('active')) {
    element.classList.remove("active")
  }
}

function isElementInViewport (el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = document.getElementById(el).getBoundingClientRect();

  return (rect.bottom >= 0 && 
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top >= -10
  )
}

var handler = function () {sectIds.forEach(onVisibilityChange)};


if (window.addEventListener) {
  addEventListener('DOMContentLoaded', handler, false);
  addEventListener('load', handler, false);
  addEventListener('scroll', handler, false);
  addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
  attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
  attachEvent('onload', handler);
  attachEvent('onscroll', handler);
  attachEvent('onresize', handler);
}

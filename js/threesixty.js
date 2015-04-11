/**
 * We wrap all our code in the jQuery "DOM-ready" function to make sure the script runs only
 * after all the Dom elements are rendered and ready to take action
 */

$(document).ready(function(){
  /* Tells if the app is ready for user interaction */
  var ready = false,

    // Tells the app if the user is dragging the pointer.
    dragging = false,
    // Stores the pointer starting X position for the pointer tracking
    pointerStartPosX = 0,
    // Stores the pointer ending X position for the pointer tracking*/
    pointerEndPosX = 0,
    // Stores the distance between starting and ending positions to each time period
    pointerDistance = 0,

    monitorStartTime = 0,
    monitorInt = 10,
    ticker = 0,
    speedMultiplier = 10,
    spinner,

    totalFrames = 180,
    currentFrame = 0,
    frames = [],
    endFrame = 0,
    loadedImages = 0,

    $document = $(document),
    $container = $('#threesixty'),
    $images = $('#threesixty_images'),

    demoMode = false,
    fakePointer = {
      x: 0;
      speed: 4
     },
    fakePointerTimer = 0;

  function addSpinner (){

  };
}):

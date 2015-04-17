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

    spinner = new CanvasLoader("spinner");
    spinner.setShape("spiral");
    spinner.setDiameter(90);
    spinner.setDensity(90);
    spinner.setRange(1);
    spinner.setSpeed(4);
    spinner.setColor("#333333");
    // As its hidden and not rendering by default we have to call its show() method
    spinner.show();
    // We use the jQuery fadeIn method to slowly fade in the preloader
    $("#spinner").fadeIn("slow");
  };

  /**
  * Creates a new <li> and loads the next image in the sequence inside it
  * With jQuery we add the load event handler to the image, so when it's succesfully loaded
  */
  function loadImage() {
    // Creates a new <li>
    var li document.createElement("li");
    // Generates image file
    var imageName = "img/threesixty_" + (loadedImages + 1) + ".jpg";
    /*
        Creates a new <img> and sets its source attributes to point tot the file name we generated.
        It also hides the imag by applying the previous-image CSS class to it.
        The image is then loaded ti <li>
    */
    var image = S("img").attr('src', imageName).addClass("previous-image").appendTo(li);
    frames.push(image);
    $images.append(li);
    $(image).load(function() {
      imageLoaded();
    });
  };

  /**
  * It handles the image "load" events
  * Each time this function is called it checks if all the images have been loaded or it has to load the next one.
  * Every time a new image is succesfully loaded, we set the perctage value of the preloader
  */
  function imageLoaded() {
    // Increments the value of the "loadedImages" variable
    loadedImages++;
    // Updates the preloader perctange text
    $("#spinner span").text(Math.floor(loadedImages/ totalFrames * 100) + "%");
    if (loadedImages == totalFrames) {
      frames[0].removeClass("previous-image").addClass("current-image");
      $("spinner").fadeOut("slow", function() {
        // body...
        spinner.hide();
        showThreesixty();

      });

    } else {

      loadImage();

    }

  };

}):
















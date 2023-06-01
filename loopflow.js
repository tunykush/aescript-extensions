/**
 * The function creates a cinemagraph by importing an image, looping it, and rendering it as a video
 * file.
 * @param inputImagePath - The file path to the input image that will be used to create the
 * cinemagraph.
 * @param outputVideoPath - The file path where the output video file will be saved.
 * @param loopDuration - The duration in seconds for how long the cinemagraph should loop for.
 */
// Import the After Effects scripting modules
var app = app || (new BridgeTalk()).getSpecifier("aftereffects");

function createCinemagraph(inputImagePath, outputVideoPath, loopDuration) {
  // Create a new composition
  var comp = app.project.items.addComp("Cinemagraph", 1920, 1080, 1, loopDuration, 30);

  // Import the input image file
  var file = new File(inputImagePath);
  var footageItem = app.project.importFile(file);
  var layer = comp.layers.add(footageItem);

  // Set the time remap expression for looping
  var timeRemap = layer.property("Time Remap");
  timeRemap.expression = "loopOut(type='cycle', numKeyframes=0)";

  // Render the composition as a video file
  var renderQueue = app.project.renderQueue.items.add(comp);
  var outputModule = renderQueue.outputModule(1);
  outputModule.file = new File(outputVideoPath);
  outputModule.applyTemplate("H.264");
  
  // Render the video
  app.project.renderQueue.render();

  // Save and close the project
  app.project.save();
  app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
}

// Set the input image path, output video path, and loop duration in seconds
var inputImagePath = "/path/to/your/input_image.jpg";
var outputVideoPath = "/path/to/your/output_video.mp4";
var loopDuration = 10; // Loop duration in seconds

// Run the createCinemagraph() function
createCinemagraph(inputImagePath, outputVideoPath, loopDuration);

// Import the After Effects scripting modules
var app = app || (new BridgeTalk()).getSpecifier("aftereffects");

function createGIF(outputPath, width, height, frameRate, loopCount) {
  // Create a new comp
  var comp = app.project.items.addComp("GIF", width, height, 1, 1, frameRate);

  // Add the selected composition to the main comp
  var mainComp = app.project.activeItem;
  var layer = mainComp.layers.add(comp);
  layer.startTime = 0;

  // Set the work area to the duration of the main comp
  app.project.activeItem.workAreaStart = 0;
  app.project.activeItem.workAreaDuration = mainComp.duration;

  // Render the GIF
  var renderQueue = app.project.renderQueue.items.add(comp);
  var outputModule = renderQueue.outputModule(1);
  outputModule.file = new File(outputPath);
  outputModule.applyTemplate("GIF");

  // Set the loop count for the GIF
  if (loopCount > 0) {
    var settings = outputModule.getSettings();
    settings.loop = loopCount;
    outputModule.setSettings(settings);
  }

  // Render the GIF
  app.project.renderQueue.render();

  // Remove the temporary comp and layer
  app.project.items.pop();
  layer.remove();

  // Save and close the project
  app.project.save();
  app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
}

// Set the output path, dimensions, frame rate, and loop count
var outputPath = "/path/to/your/output.gif";
var width = 800;
var height = 600;
var frameRate = 30;
var loopCount = 0; // Set to 0 for infinite loop

// Run the createGIF() function
createGIF(outputPath, width, height, frameRate, loopCount);

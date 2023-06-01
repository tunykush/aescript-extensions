/* The code is creating an anonymous function and immediately invoking it. The function defines a main
function called `explodeShapeLayerAndPivotalNull()` which performs a series of actions on a selected
shape layer in an After Effects composition. These actions include duplicating the layer, exploding
the duplicated shape layer, creating a null layer, parenting the duplicated shape layer to the null
layer, centering the anchor point of the null layer, renaming the null layer, and refreshing the
display. The main function is then called within the anonymous function, which is executed
immediately. */
(function () {
    // Create the main function
    function explodeShapeLayerAndPivotalNull() {
      // Get the current composition
      var comp = app.project.activeItem;
      if (!(comp && comp instanceof CompItem)) {
        alert("Please select a composition.");
        return;
      }
  
      // Get the selected layer
      var selectedLayer = comp.selectedLayers[0];
      if (!selectedLayer || selectedLayer.property("ADBE Vector Layer") === null) {
        alert("Please select a shape layer.");
        return;
      }
  
      // Duplicate the shape layer
      var duplicatedLayer = selectedLayer.duplicate();
  
      // Explode the duplicated shape layer
      app.executeCommand(app.findMenuCommandId("Explode Shape Layer"));
  
      // Create a null layer
      var nullLayer = comp.layers.addNull();
  
      // Parent the duplicated shape layer to the null layer
      duplicatedLayer.parent = nullLayer;
  
      // Center the anchor point of the null layer
      nullLayer.property("Position").setValue([comp.width / 2, comp.height / 2]);
  
      // Rename the null layer
      nullLayer.name = "Pivotal Null";
  
      // Refresh the display
      app.project.activeItem.refresh();
    }
  
    // Run the main function
    explodeShapeLayerAndPivotalNull();
  })();
  
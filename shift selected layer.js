/* This is a self-executing anonymous function that defines and runs the `shiftSelectedLayers`
function. It is used to shift the in-point and out-point of selected layers in an After Effects
composition by a specified amount of time. The function first checks if a composition is selected
and if at least one layer is selected. It then prompts the user for the shift amount and iterates
through the selected layers, shifting their in-point and out-point by the specified amount. Finally,
it refreshes the display of the active composition. */
(function () {
    // Create the main function
    function shiftSelectedLayers() {
      // Get the current composition
      var comp = app.project.activeItem;
      if (!(comp && comp instanceof CompItem)) {
        alert("Please select a composition.");
        return;
      }
  
      // Get the selected layers
      var selectedLayers = comp.selectedLayers;
      if (selectedLayers.length === 0) {
        alert("Please select at least one layer.");
        return;
      }
  
      // Prompt the user for the shift amount
      var shiftAmount = parseFloat(prompt("Enter the shift amount in seconds:", "1.0"));
      if (isNaN(shiftAmount)) {
        alert("Invalid shift amount.");
        return;
      }
  
      // Iterate through the selected layers
      for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];
  
        // Shift the layer's in-point and out-point
        var inPoint = layer.inPoint + shiftAmount;
        var outPoint = layer.outPoint + shiftAmount;
  
        // Set the new in-point and out-point
        layer.inPoint = inPoint;
        layer.outPoint = outPoint;
      }
  
      // Refresh the display
      app.project.activeItem.refresh();
    }
  
    // Run the main function
    shiftSelectedLayers();
  })();
  
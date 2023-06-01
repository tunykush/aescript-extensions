/* This is a JavaScript function that arranges selected layers in a grid pattern within a composition
in Adobe After Effects. It first checks if a composition is selected and if at least two layers are
selected. It then prompts the user to choose whether to arrange the layers by rows or columns. It
calculates the number of rows and columns needed based on the number of selected layers and the
chosen arrangement. It then calculates the grid width and height based on the composition size and
the number of rows and columns. Finally, it loops through each layer and sets its position property
to the appropriate grid position based on its index, row, and column. The function is wrapped in an
immediately invoked function expression (IIFE) to keep the variables and functions within the
function local and prevent them from polluting the global namespace. */
(function() {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) {
      alert("Please select a composition.");
      return;
    }
  
    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length < 2) {
      alert("Please select at least two layers.");
      return;
    }
  
    var rowsFirst = confirm("Arrange layers by rows first?");
  
    app.beginUndoGroup("Arrange Layers in Grid");
  
    var numRows, numCols;
    if (rowsFirst) {
      numRows = Math.ceil(Math.sqrt(selectedLayers.length));
      numCols = Math.ceil(selectedLayers.length / numRows);
    } else {
      numCols = Math.ceil(Math.sqrt(selectedLayers.length));
      numRows = Math.ceil(selectedLayers.length / numCols);
    }
  
    var gridWidth = comp.width / numCols;
    var gridHeight = comp.height / numRows;
    var currentIndex = 0;
  
    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        var layer = selectedLayers[currentIndex];
        if (layer) {
          var layerX = j * gridWidth + gridWidth / 2;
          var layerY = i * gridHeight + gridHeight / 2;
          layer.property("Transform").property("Position").setValue([layerX, layerY]);
          currentIndex++;
        } else {
          break;
        }
      }
    }
  
    app.endUndoGroup();
  })();
  
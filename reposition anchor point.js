/* This is a JavaScript code that repositions the anchor point of a selected layer in Adobe After
Effects to the center of its bounding box. It first checks if a composition and a layer are
selected, and then calculates the new anchor point position based on the layer's bounding box.
Finally, it sets the new anchor point value and creates an undo group for the action. The code is
wrapped in an immediately invoked function expression (IIFE) to avoid polluting the global
namespace. */
(function () {
    var activeComp = app.project.activeItem;
    if (activeComp === null || !(activeComp instanceof CompItem)) {
      alert("Please select a composition.");
      return;
    }
  
    var selectedLayers = activeComp.selectedLayers;
    if (selectedLayers.length === 0) {
      alert("Please select a layer.");
      return;
    }
  
    app.beginUndoGroup("Reposition Anchor Point");
  
    for (var i = 0; i < selectedLayers.length; i++) {
      var layer = selectedLayers[i];
      var layerBounds = layer.sourceRectAtTime(0, false);
  
      var newAnchorX = layerBounds.width / 2 + layerBounds.left;
      var newAnchorY = layerBounds.height / 2 + layerBounds.top;
  
      layer.property("Anchor Point").setValue([newAnchorX, newAnchorY]);
    }
  
    app.endUndoGroup();
  })();
  
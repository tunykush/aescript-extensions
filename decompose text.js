/* This is a JavaScript function that decomposes a text layer in Adobe After Effects into separate
layers for each character. It first checks if a composition and a text layer are selected, and then
creates new layers for each character in the text layer. Finally, it removes the original text layer
and selects the new layers. The function is wrapped in an immediately invoked function expression
(IIFE) to prevent any variable conflicts with other scripts. */
(function () {
    var activeComp = app.project.activeItem;
    if (activeComp === null || !(activeComp instanceof CompItem)) {
      alert("Please select a composition.");
      return;
    }
  
    var selectedLayers = activeComp.selectedLayers;
    if (selectedLayers.length === 0) {
      alert("Please select a text layer.");
      return;
    }
  
    var textLayer = selectedLayers[0];
    if (!(textLayer instanceof TextLayer)) {
      alert("Please select a text layer.");
      return;
    }
  
    app.beginUndoGroup("Decompose Text");
  
    var textDocument = textLayer.property("Source Text").value;
    var textContent = textDocument.text;
  
    var position = textLayer.property("Position").value;
    var scale = textLayer.property("Scale").value;
    var rotation = textLayer.property("Rotation").value;
  
    var newLayers = [];
  
    // Create separate layers for each character
    for (var i = 0; i < textContent.length; i++) {
      var character = textContent.charAt(i);
      var newLayer = activeComp.layers.addText(character);
      newLayer.position.setValue(position);
      newLayer.scale.setValue(scale);
      newLayer.rotation.setValue(rotation);
      newLayers.push(newLayer);
    }
  
    // Remove original text layer
    textLayer.remove();
  
    app.endUndoGroup();
  
    // Select the new layers
    if (newLayers.length > 0) {
      activeComp.selectedLayers = newLayers;
    }
  })();
  
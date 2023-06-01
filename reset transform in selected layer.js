/* This is a JavaScript code that resets the position, scale, and rotation of selected layers in an
After Effects composition. It does this by setting the values of the "Position", "Scale", and
"Rotation" properties of each selected layer to their default values. */
app.beginUndoGroup("Reset Layer Transform");

var comp = app.project.activeItem;
var selectedLayers = comp.selectedLayers;

for (var i = 0; i < selectedLayers.length; i++) {
  var layer = selectedLayers[i];
  layer.property("Position").setValue([0, 0]);
  layer.property("Scale").setValue([100, 100]);
  layer.property("Rotation").setValue(0);
}

app.endUndoGroup();

/* This is a JavaScript code that links a null layer and a camera layer together in After Effects. */
app.beginUndoGroup("Link Null and Camera");

var comp = app.project.activeItem;
var nullLayer = comp.layers.addNull();
var cameraLayer = comp.layers.addCamera("Linked Camera", [0, 0]);

nullLayer.position.expression = "thisComp.layer(\"Linked Camera\").position";
nullLayer.orientation.expression = "thisComp.layer(\"Linked Camera\").orientation";

var camera = cameraLayer.property("Position");
camera.expression = "thisComp.layer(\"Null 1\").position";

app.endUndoGroup();

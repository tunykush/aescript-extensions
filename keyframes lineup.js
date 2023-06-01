/* This is a JavaScript code that is used in Adobe After Effects to shift and trim keyframes of a
selected layer. */
var proj = app.project;
var undoStr = "Shift and Trim Keyframes";

if (proj) {
    var myComp = app.project.activeItem;
    if (myComp != null && (myComp instanceof CompItem)) {

        var myLayers = myComp.selectedLayers[0];
        if (myLayers != undefined) {
            app.beginUndoGroup(undoStr);
            var fps = myComp.frameRate;
            var interval = 1 / fps;
            for (var j = 1; j <= myLayers.property("ADBE Time Remapping").numKeys; j++) {
                var posValueCopy = myLayers.property("ADBE Time Remapping").keyValue(j);
                myLayers.property("ADBE Time Remapping").removeKey(j);
                myLayers.property("ADBE Time Remapping").addKey(myLayers.inPoint + interval * (j - 1));
                myLayers.property("ADBE Time Remapping").setValueAtKey(j, posValueCopy);
            }
            myLayers.outPoint = myLayers.inPoint + interval * myLayers.property("ADBE Time Remapping").numKeys;

            app.endUndoGroup();

        } else {
            alert("Please select a layer in the comp to use this script");
        }
    } else {
        alert("Please select an active comp to use this script");
    }
} else {
    alert("Please open a project first to use this script.");
}

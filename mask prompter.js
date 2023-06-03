/* This is an immediately invoked function expression (IIFE) that defines an object called
`maskPrompter` with three methods: `createMatte`, `visualizeMatte`, and `exportMatte`. It then
creates an instance of `maskPrompter` by calling `createMatte` with some sample data, visualizes the
matte using `visualizeMatte`, and exports the matte using `exportMatte`. The purpose of this code is
to demonstrate how to use the `maskPrompter` object and its methods. */
(function () {
    var maskPrompter = {
      createMatte: function (points, rectangles) {
        // Create a matte from the specified points and rectangles
        // Implementation details...
      },
  
      visualizeMatte: function (matte) {
        // Output the matte as overlays for visualization
        // Implementation details...
      },
  
      exportMatte: function (matte) {
        // Output the matte as a black-white matte or as content with a transparent alpha channel
        // Implementation details...
      }
    };
  
    // Usage example
    var points = [
      { x: 100, y: 200 },
      { x: 300, y: 400 },
      // Specify more points...
    ];
  
    var rectangles = [
      { x: 500, y: 600, width: 100, height: 200 },
      { x: 700, y: 800, width: 150, height: 250 },
      // Specify more rectangles...
    ];
  
    var matte = maskPrompter.createMatte(points, rectangles);
    maskPrompter.visualizeMatte(matte);
    maskPrompter.exportMatte(matte);
  })();
  
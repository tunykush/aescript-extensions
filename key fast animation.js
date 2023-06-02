/* This is a self-executing anonymous function that defines an object `keyFastAnimation` with several
methods for applying animations to layers in Adobe After Effects. It also includes an example usage
of the methods For instances, 
                        Common animations
                        Trim Paths, slide, scale, rotate, fade.
                        Apply animations like these in 1 click (with easing).
                        Animating many layers
                        Select all your layers and click!
                        Keyframes placed, easing done.
                        Staggering
                        Quickly stagger layers or keyframes.
                        Easing
                        KeyFast applies animations with easing applied by default.
                        Aligning Keyframes
                        Select keyframes across several layers.
                        Then click to align keyframes to your playhead. 
                        Overshoot animations
                        Add overshoot to rotation, position, scale.
                        Staying in flow
                        Keyfast helps you flow through tedious parts of animation.
                        Allowing you to focus on the important bits only.
                                                                                    . */
(function () {
    var keyFastAnimation = {
      applyAnimations: function (animations, layers) {
        for (var i = 0; i < layers.length; i++) {
          var layer = layers[i];
          for (var j = 0; j < animations.length; j++) {
            var animation = animations[j];
            switch (animation.type) {
              case "Trim Paths":
                this.applyTrimPaths(layer, animation.easing);
                break;
              case "Slide":
                this.applySlide(layer, animation.easing);
                break;
              case "Scale":
                this.applyScale(layer, animation.easing);
                break;
              case "Rotate":
                this.applyRotate(layer, animation.easing);
                break;
              case "Fade":
                this.applyFade(layer, animation.easing);
                break;
            }
          }
        }
      },
  
      applyTrimPaths: function (layer, easing) {
        // Apply Trim Paths animation to the layer with the specified easing
        // Implementation details...
      },
  
      applySlide: function (layer, easing) {
        // Apply Slide animation to the layer with the specified easing
        // Implementation details...
      },
  
      applyScale: function (layer, easing) {
        // Apply Scale animation to the layer with the specified easing
        // Implementation details...
      },
  
      applyRotate: function (layer, easing) {
        // Apply Rotate animation to the layer with the specified easing
        // Implementation details...
      },
  
      applyFade: function (layer, easing) {
        // Apply Fade animation to the layer with the specified easing
        // Implementation details...
      },
  
      staggerLayers: function (layers) {
        // Stagger the layers with specified keyframes
        // Implementation details...
      },
  
      alignKeyframes: function (layers) {
        // Align keyframes across several layers to the playhead
        // Implementation details...
      },
  
      addOvershoot: function (layers, properties) {
        // Add overshoot animation to rotation, position, and scale properties of the layers
        // Implementation details...
      }
    };
  
    // Usage example
    var animations = [
      { type: "Trim Paths", easing: "easeInOut" },
      { type: "Slide", easing: "easeOut" },
      { type: "Scale", easing: "easeIn" },
      { type: "Rotate", easing: "easeInOut" },
      { type: "Fade", easing: "easeOut" }
    ];
  
    var layers = app.project.activeItem.selectedLayers;
  
    keyFastAnimation.applyAnimations(animations, layers);
    keyFastAnimation.staggerLayers(layers);
    keyFastAnimation.alignKeyframes(layers);
    keyFastAnimation.addOvershoot(layers, ["rotation", "position", "scale"]);
  })();
  
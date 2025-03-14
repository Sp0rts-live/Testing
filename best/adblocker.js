
           // Initialize the BlockAdBlock library
           var blocker = new BlockAdBlock({
               checkOnLoad: true,  // Check for ad blockers when the page loads
               resetOnEnd: true    // Reset the detection after it's been triggered once
           });

           // Define actions to be taken when an ad blocker is detected
           blocker.onDetected(function() {
               // Display a message to the user or take other actions
               alert('It seems you have an ad blocker enabled. Please consider disabling it to support our website.');
           });

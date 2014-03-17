/* Portions of Code Borrowed From: http://jsfiddle.net/7C76W/ */
 
(function() {
 
    var CMD        = 8,
        modifiers  = 0,
        gKey       = 71,
        clmnKey    = 186,
        fullKey    = 222;
        
    var grid = document.getElementById("grid"),
        page  = document.body,
        g    = grid.classList;
    
    if (!grid){ console.error("ERROR: Grid.js couldn't find grid markup!" ); return; }
    if (!page){ console.error("ERROR: Grid.js couldn't find the body tag!"); return; }
    
    function initGrid(){
      grid.style.height = page.scrollHeight;
      g.toggle("hide");
    }
 
    function modifierCode(event) {
        switch (event.keyCode) {
        case 91:
        case 93:
            return CMD;
        default:
            return 0;
        }
    }
 
    document.addEventListener('keydown', function(e) {
      // Grab Code Value
        var modifier = modifierCode(event);
 
        // Check Key Value
        if (modifier !== 0) {
            modifiers = modifiers | modifier; // add to the bitmask "stack"
        } else {
          if (modifiers & CMD){
            var updated = false;
            if ((e.keyCode? e.keyCode : e.charCode) == gKey   ) { g.toggle("hide");     updated = true; }
            if ((e.keyCode? e.keyCode : e.charCode) == clmnKey) { g.toggle("columns");  updated = true; }
            if ((e.keyCode? e.keyCode : e.charCode) == fullKey) { g.toggle("full");     updated = true; }
            
            if (updated){ e.preventDefault(); e.stopPropagation(); }
          }
        }
    });
 
    document.addEventListener('keyup', function(event) {
      modifiers = modifiers & ~modifierCode(event); // remove from the stack
    });
    
    console.log("Grid Toggle Loaded & Ready");
    
    initGrid();

}());
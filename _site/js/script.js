!function(){function a(){h.style.height=i.scrollHeight,j.toggle("hide")}function b(a){switch(a.keyCode){case 91:case 93:return c;default:return 0}}var c=8,d=0,e=71,f=186,g=222,h=document.getElementById("grid"),i=document.body,j=h.classList;return h?i?(document.addEventListener("keydown",function(a){var h=b(event);if(0!==h)d|=h;else if(d&c){var i=!1;(a.keyCode?a.keyCode:a.charCode)==e&&(j.toggle("hide"),i=!0),(a.keyCode?a.keyCode:a.charCode)==f&&(j.toggle("columns"),i=!0),(a.keyCode?a.keyCode:a.charCode)==g&&(j.toggle("full"),i=!0),i&&(a.preventDefault(),a.stopPropagation())}}),document.addEventListener("keyup",function(a){d&=~b(a)}),console.log("Grid Toggle Loaded & Ready"),void a()):void console.error("ERROR: Grid.js couldn't find the body tag!"):void console.error("ERROR: Grid.js couldn't find grid markup!")}(),console.log("rock");
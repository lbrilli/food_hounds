!function(){"use strict";!function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var e=function(){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=285,this.drawCannon(this.pos),this.moveCannon=this.moveCannon.bind(this),window.addEventListener("keydown",this.moveCannon,!1)}var t,o;return t=e,(o=[{key:"drawCannon",value:function(n){var e=document.getElementById("board").getContext("2d"),t=new Image(30,30);t.addEventListener("load",(function(){e.drawImage(t,n,570,30,30)}),!1),t.src="./src/styles/cannon.png"}},{key:"moveCannon",value:function(n){"ArrowLeft"===n.key?(this.pos-=30,this.pos<0&&(this.pos=this.pos%600)):"ArrowRight"===n.key&&(this.pos+=30),this.eraseCannon(),this.drawCannon(this.pos)}},{key:"eraseCannon",value:function(){var n=document.getElementById("board");n.getContext("2d").clearRect(0,570,n.width,n.height)}}])&&n(t.prototype,o),e}();document.addEventListener("DOMContentLoaded",(function(n){var t,o,a;document.getElementById("board").getContext("2d"),a=document.getElementById("board").getContext("2d"),(t=new Image(30,30)).addEventListener("load",(function(){a.drawImage(t,0,0,30,30)}),!1),t.src="./src/styles/Lucy.png",(o=new Image(30,30)).addEventListener("load",(function(){a.drawImage(o,30,0,30,30)}),!1),o.src="./src/styles/Cooper.png",new e}))}()}();
//# sourceMappingURL=main.js.map
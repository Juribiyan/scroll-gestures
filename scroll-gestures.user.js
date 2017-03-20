// ==UserScript==
// @name         Scroll Gestures
// @namespace    http://juribiyan.github.com
// @version      2.0
// @description  Scroll to top or bottom using RMB+scroll
// @author       Snivy
// @match         *://*/*
// @grant        none
// ==/UserScript==

var rmbd

document.body.onmousedown = function (e) {
  if(e.button == 2) 
    rmbd = true
} 

document.body.oncontextmenu = function (e) {
  if(rmbd === 1) {
    e.preventDefault();
  }
  rmbd = false
} 

window.onmousewheel = function(ev) {
  if(rmbd) {
    ev.preventDefault()
    if(ev.wheelDelta > 0) 
      scroll(0, 0)
    else if(ev.wheelDelta < 0) 
      scroll(0, document.body.scrollHeight)
    rmbd = 1
  }
}

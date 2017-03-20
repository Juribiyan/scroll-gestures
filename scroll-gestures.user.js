// ==UserScript==
// @name         Scroll Gestures
// @namespace    http://juribiyan.github.com
// @version      3.0
// @description  Scroll to top or bottom using RMB+scroll
// @author       Snivy
// @match         *://*/*
// @grant        none
// ==/UserScript==

var rmbd, returnTo = false

document.body.onmousedown = function (e) {
  if(e.button == 2) 
    rmbd = true
} 

document.body.oncontextmenu = function (e) {
  if(rmbd === 1) {
    e.preventDefault()
  }
  rmbd = false
} 

window.onmousewheel = function(ev) {
  if(rmbd) {
    ev.preventDefault()
    var currentPosition = document.documentElement.scrollTop
    , atTop = currentPosition === 0
    , atBottom = currentPosition === (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    , atEitherEnd = atTop || atBottom
    if(ev.wheelDelta > 0) {
      if (atBottom && returnTo) {
        scroll(0, returnTo)
      }
      else {
        if (!atEitherEnd)
          returnTo = currentPosition
        scroll(0, 0)
      }
    }
    else if(ev.wheelDelta < 0) {
      if (atTop && returnTo) {
        scroll(0, returnTo)
      }
      else {
        if (!atEitherEnd)
          returnTo = currentPosition
        scroll(0, document.body.scrollHeight)
      }
    }
    rmbd = 1
  }
}

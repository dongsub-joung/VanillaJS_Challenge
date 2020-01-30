const title = document.querySelector("h2");

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  mouseEnter: function() {
    title.style.color = colors[0];
    title.innerHTML = "The Mouse is here!";
  },
  mouseLeave: function() {
    title.style.color = colors[1];
    title.innerHTML = "The Mouse is gone";
  },
  rightClick: function() {
    title.style.color = colors[2];
    title.innerHTML = "That was a right click!";
  },
  resized: function() {
    title.style.color = colors[3];
    title.innerHTML = "You just resized!";
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.resized);
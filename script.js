"use strict";

/**=============================================================
*                          SELECTORS                            
==============================================================**/
const landing = document.querySelector(".landing");
const categoryImg = document.querySelector(".category-image");
const viewRef = document.querySelector(".btn-view-all-reference");

/**=============================================================
*                          EVENTS                            
==============================================================**/

/** landing -> category -> show
--------------------------------------------------------------**/
landing.addEventListener("click", function (e) {
  if (!e.target.classList.contains("category")) {
    return;
  }

  document.querySelectorAll(".category").forEach(function (category) {
    category.classList.remove("expanded");
    category.classList.add("minimized");
  });
  e.target.classList.add("expanded");

  // change category image
  const imgPath = e.target.dataset.img;
  categoryImg.src = imgPath;
});

/** references -> show all refs
--------------------------------------------------------------**/
viewRef.addEventListener("click", function () {
  // check if reference is already expanded
  if (viewRef.textContent === "Свернуть") {
    // for all ref items that suppose to be hidden add hidden class
    hiddenRefs.forEach(function (refItem) {
      refItem.classList.add("hidden");
    });

    // update button
    viewRef.textContent = "Посмотреть все референсы";
  } else {
    // get all ref items that suppose to be hidden
    hiddenRefs = document.querySelectorAll(".hidden");

    // for all hidden items remove hidden class
    hiddenRefs.forEach(function (refItem) {
      refItem.classList.remove("hidden");
    });

    // update button
    viewRef.textContent = "Свернуть";
  }
});

/**======================================================
 *                   MAIN                           
=======================================================**/
let hiddenRefs;

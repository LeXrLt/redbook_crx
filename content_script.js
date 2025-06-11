function extractAndPrintText() {
  const elDesc = document.getElementById('detail-desc');
  if (elDesc) {
    console.log("Found text (detail-desc):", elDesc.innerText);
  } else {
    console.log("Element with ID 'detail-desc' not found.");
  }

  const elTitle = document.getElementById('detail-title');
  if (elTitle) {
    console.log("Found text (detail-title):", elTitle.innerText);
  } else {
    console.log("Element with ID 'detail-title' not found.");
  }

  const imgContainers = document.querySelectorAll('div.img-container');
  if (imgContainers.length === 0) {
    console.log("No elements with class 'img-container' found.");
  } else {
    imgContainers.forEach(containerDiv => {
      const images = containerDiv.querySelectorAll('img.note-slider-img');
      if (images.length === 0) {
        console.log("No images with class 'note-slider-img' found in a 'img-container'.");
      } else {
        images.forEach(img => {
          if (img.src) {
            console.log("Found image src:", img.src);
          } else {
            console.log("Found an image with class 'note-slider-img' but it has no src.");
          }
        });
      }
    });
  }
}

// Call the function to capture static content
extractAndPrintText();

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
  console.log("DOM changed, re-extracting text...");
  extractAndPrintText();
});

// Configure and start the observer
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log("Content script loaded and observer started.");

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

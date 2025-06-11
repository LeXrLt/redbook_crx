function extractAndPrintText() {
  const elements = document.querySelectorAll('.title, .tag, .note-text');
  if (elements.length === 0) {
    console.log("No elements with class 'title', 'tag', or 'note-text' found.");
    return;
  }
  elements.forEach(element => {
    console.log("Found text:", element.innerText);
  });
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

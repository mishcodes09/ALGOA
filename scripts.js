function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

//form submissions
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  alert("Form submitted successfully!");
}

//JavaScript file that handles basic interactions on all html pages:
// such as button clicks, form submissions, and navigation.


//i'll make this more complex later, but for now, this is a simple script that handles button clicks and form submissions.
//button clicks
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

//form submissions
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Form submitted successfully!');
}
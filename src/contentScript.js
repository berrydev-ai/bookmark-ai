chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "scrape") {
        let data = document.body.innerText;  // Example: scrape all text
        fetch(request.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: data })
        }).then(response => response.json())
          .then(result => console.log('Data sent successfully'))
          .catch(error => console.error('Error sending data', error));
    }
});

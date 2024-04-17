chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: request.data})
    }).then(response => response.json())
      .then(data => console.log('Data successfully sent to the API', data))
      .catch(error => console.error('Error sending data to the API', error));
});

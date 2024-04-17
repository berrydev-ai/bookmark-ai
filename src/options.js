document.getElementById('saveEndpoint').addEventListener('click', function() {
    const endpoint = document.getElementById('endpointConfig').value;
    chrome.storage.local.set({ 'apiEndpoint': endpoint }, function() {
        console.log('Endpoint is set to ' + endpoint);
    });
});

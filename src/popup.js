document.getElementById('scrapeButton').addEventListener('click', function() {
    const endpoint = document.getElementById('apiEndpoint').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrape", endpoint: endpoint });
    });
});

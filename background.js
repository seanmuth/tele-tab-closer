function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/tele\.astronomer\.cloud\/.+?success/) || tab.url.match(/https:\/\/tele\.gcp0001\.us\-east4\.astronomer\.io\/.+?success/)) {
    setTimeout(() => {
      chrome.tabs.remove(tabId, _ => chrome.runtime.lastError);
    }, 500) // half-second timeout
  }
}

chrome.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);

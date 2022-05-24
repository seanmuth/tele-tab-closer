function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/tele\.astronomer\.cloud\/.+?success/)) {
    setTimeout(() => {
      chrome.tabs.remove(tabId, _ => chrome.runtime.lastError);
    }, 5000)
  }
}

chrome.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);

function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/.+?\.zoom\.us\/.+?status=success/)) {
    setTimeout(() => {
      chrome.tabs.remove(tab.id)
    }, 2000)
  }
}

chrome.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);

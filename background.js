function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/.+?\.zoom\.us\/.+?status=success/)) {
    setTimeout(() => {
      browser.tabs.remove(tab.id)
    }, 2000)
  }
}

browser.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);

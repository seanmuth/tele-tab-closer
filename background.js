function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/.+?\.zoom\.us\/.+?status=success/)) {
    browser.tabs.remove(tab.id);
  }
}

browser.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);

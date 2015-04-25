chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Adapating ' + tab.url + ' to color blind!');
  chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"'
  });
  chrome.tabs.insertCSS({
    code: 'body {-webkit-filter: hue-rotate(180deg);}'
  });
});

chrome.tabs.onCreated.addListener(function(tab){
    if (tab.url == 'chrome://newtab/') {
        chrome.storage.sync.get({
            address: 'chrome://newtab/'
        }, function(items) {
            console.log(items.address);
            chrome.tabs.update({ url: items.address });
        });
    }
})
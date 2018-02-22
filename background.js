chrome.tabs.onCreated.addListener(function(tab){
    if (tab.url == 'chrome://newtab/') {
        var newURL = "http://localhost:5000";
        chrome.tabs.update({ url: newURL });
    }
})
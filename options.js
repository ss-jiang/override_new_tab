function save_options() {
    var link = document.getElementById('link').value;
    console.log(link);
    chrome.storage.sync.set({
        address: `http://${link}`
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}
  
function restore_options() {
    chrome.storage.sync.get({
        address: 'chrome://newtab/'
    }, function(items) {
        document.getElementById('link').value = items.address;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
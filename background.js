chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['contentScript.js'] 
    });
});

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     if (tab.title && tab.title.includes("Uniware Script Edit")) {
//         console.log("tab id : " + tabId + " and tab : " + JSON.stringify(tab));
//         chrome.scripting.executeScript({
//             target: {tabId: tabId},
//             files: ['contentScript.js']
//         });
//     }
//   });
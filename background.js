function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://wordlists.azurewebsites.net/?listName=Recent&word=" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Add '%s' to your wordlist ", 
  contexts:["selection"], 
  onclick: getword
});
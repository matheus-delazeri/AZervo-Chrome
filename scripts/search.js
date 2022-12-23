const azervoUrl = "https://azervo.herokuapp.com"

function action(info, tab)
{
    const { menuItemId } = info
    if (menuItemId === "azervo-account") {
        chrome.tabs.create({url: azervoUrl + "/user/account"})
    } else if (menuItemId === "azervo-search") {
        chrome.tabs.create({
            url: azervoUrl + "/search/results/?title=" + info.selectionText
        });
    }
}

chrome.contextMenus.create({
    id: "azervo-search",
    title: "Buscar: %s",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "azervo-account",
    title: "Minha conta",
    contexts: ["action"]

})

chrome.contextMenus.onClicked.addListener(action)
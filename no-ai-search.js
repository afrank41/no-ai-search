const pattern = "https://www.google.com/search*";

function redirect(requestDetails) {
    let url = new URL(requestDetails.url);
    if (!url.searchParams.has('udm')) {
        url.searchParams.append('udm', '14');
        return {redirectUrl: url.toString()};
    }
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: [pattern] },
    ["blocking"]
);
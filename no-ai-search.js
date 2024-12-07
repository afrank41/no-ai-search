const pattern = "https://www.google.com/search*";

function redirect(requestDetails) {
    let baseUrl = new URL(requestDetails.url);

    // Append udm=14 and redirect
    if (!baseUrl.searchParams.has('udm')) {
        baseUrl.searchParams.append('udm', '14');
        let newUrl = baseUrl.toString();

        // Delete initial search URL from browser history
        browser.history.deleteUrl({ url: requestDetails.url });

        return { redirectUrl: newUrl };
    }
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: [pattern] },
    ["blocking"]
);
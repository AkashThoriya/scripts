function getData(XPath) {

    // Get a reference to the HTML document
    var doc = document;

    // Create an array to store the data
    var data = [];

    // Use the XPath expression to find all the 'a' tags with parent of 'blog-post-details' class
    var elements = doc.evaluate(XPath, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    // Loop through the elements and extract the text content
    for (var i = 0; i < elements.snapshotLength; i++) {
    var element = elements.snapshotItem(i);
    data.push(element.textContent);
    }

    return data;
}

// brands.live
let data = getData("//div[@class='blog-post-details']/h3/a/text()");
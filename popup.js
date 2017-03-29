var elements = document.getElementsByTagName('*');

for (var i=0; i<elements.length; i++) {
    var element = elements[i];
    for (var j=0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Trump|Kushner|Republican/gi, function replacer(word) {
                return word.replace('r', '\u044F').replace('R', '\u042F')thu;
            });

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

var replacements = [
    ['Cryptography', 'Mathematics'],
    ['cryptography', 'mathematics'],
    ['Crypto', 'Math'],
    ['crypto', 'math'],
    ['Encryption', 'Use of math'],
    ['encryption', 'use of math'],
    ['Encrypted', 'Mathed'],
    ['encrypted', 'mathed'],
    ['Cryptographer', 'Mathematician'],
    ['cryptographer', 'mathematician'],
];

for (i = 0; i < replacements.length; i++) {
    replacements[i][0] = new RegExp('\\b' + replacements[i][0] + '\\b', 'g');
}

function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType)
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child)
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;

    for (i = 0; i < replacements.length; i++) {
        v = v.replace(replacements[i][0], replacements[i][1]);
    }

    textNode.nodeValue = v;
}

walk(document.body);

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
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

	v = v.replace(/\bCryptography\b/g, "Mathematics");
	v = v.replace(/\bcryptography\b/g, "mathematics");
	v = v.replace(/\bCrypto\b/g, "Math");
	v = v.replace(/\bcrypto\b/g, "math");
	v = v.replace(/\bEncryption\b/g, "Math problems");
	v = v.replace(/\bencryption\b/g, "math problems");
	v = v.replace(/\bEncrypted\b/g, "Math-using");
	v = v.replace(/\bencrypted\b/g, "math-using");

	textNode.nodeValue = v;
}



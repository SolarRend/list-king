// ADD NEW ITEM TO END OF LIST
var kaleItem = document.createElement("LI");
var kaleText = document.createTextNode("kale");
kaleItem.appendChild(kaleText);
var parent = document.getElementById("one").parentElement;
parent.insertBefore(kaleItem, document.getElementById("one"));


// ADD NEW ITEM START OF LIST
var creamItem = document.createElement("LI");
var creamText = document.createTextNode("cream");
creamItem.appendChild(creamText);
var parent = document.getElementById("one").parentElement;
parent.append(creamItem);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var itemList = document.getElementsByTagName("LI");

for(var i = 0; i < itemList.length; i++) {
   itemList[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header2 = document.getElementById("header").nextSibling.nextSibling;
console.log(header2.textContent);
header2.textContent =  header2.textContent + " " + itemList.length;
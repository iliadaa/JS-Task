// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

// Create a new list item when clicking on the "Shto" button
function newElement() {

    var li = document.createElement("li");
    var iconText = document.createElement("div")
    iconText.className = "icon-text";
    var img = document.createElement("img")
    var personName = document.createElement("div")
    personName.className = "person-name";
    var personCategory = document.createElement("div")
    personCategory.className = "person-category";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"

    li.appendChild(iconText);
    iconText.appendChild(img)
    iconText.appendChild(personName)

    var inputValue = document.getElementById("input-name").value;
    var perdoruesi = document.getElementById('perdoruesi').value

    //Save items in local storage
    const items = { name: inputValue, category: perdoruesi };
    localStorage.setItem('items', JSON.stringify(items));

    //get items 
    const storeditems = JSON.parse(localStorage.getItem('items'));

    var t = document.createTextNode(storeditems.name);
    var personSelect = document.createTextNode(storeditems.category);

    personName.appendChild(t)
    personName.appendChild(personCategory)
    personCategory.appendChild(personSelect)

    // create the validation
    if (inputValue == "" || inputValue.length < 2) {
        alert("Field is not 2 characters minimum!");

    } else {
        document.getElementById("list-perdoruesit").appendChild(li);
    }

    document.getElementById("input-name").value = "";
    li.classList.add("list-itm");

    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }


    // const items = { name: inputValue, category: perdoruesi };
    // localStorage.setItem('items', JSON.stringify(items));

    console.log(storeditems)
}

function search() {
    let input = document.getElementById('searchInput').value
    input = input.toLowerCase();
    let itemShow = document.getElementsByClassName('list-itm');
    for (i = 0; i < itemShow.length; i++) {
        if (!itemShow[i].innerHTML.toLowerCase().includes(input)) {
            itemShow[i].style.display = "none";
        }
        else {
            itemShow[i].style.display = "list-itm";
        }
    }
}



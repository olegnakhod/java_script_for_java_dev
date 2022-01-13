function addElementToTag() {
    let counter = createCounterWithObject();
    let elementsLi = document.getElementById('exerciceOne').querySelectorAll('li');
    for (let i = 0; i < elementsLi.length; i++) {
        let currentElement = elementsLi[i];
        currentElement.innerHTML = counter.getNext();
    }
}

function createCounterWithObject() {
    let currentValue = 1;
    return {
        getNext: function () {
            return currentValue++;
        }
    }
}

function addElement() {
    addElementToTag();
    let elementsLi = document.getElementById('exerciceOne').querySelectorAll('li');
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<p> number of elements "li" in document: ${elementsLi.length} </p>`;
    document.body.prepend(newDiv);
}

function changeElement() {
    let elementsWithLinks = document.getElementById('exerciceTwo').querySelectorAll("a");
    for (let i = 0; i < elementsWithLinks.length; i++) {
        let currentElement = elementsWithLinks[i];
        let attribute = currentElement.getAttribute('href')
        if (attribute.includes('http://') || attribute.includes('ftp://')) {
            if (!attribute.includes('http://internal.com')) {
                currentElement.classList.add('external-red');
            }
        }
    }
}
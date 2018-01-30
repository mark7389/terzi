var basis = (function () {

    function setup() {

        console.log('Terzi: Rolls: "Document loaded."');

        var logo = document.createElement('img');
        logo.src = 'images/terzi.logo.svg';
        logo.alt = 'This image contains Terzi\'s logo.';

        var title = {};
        title.element = document.createElement('h1');
        title.element.className = 'txt-l';
        title.text = document.createTextNode("Terzi: Introducing the Prototype of Rolls");
        title.element.appendChild(title.text);

        var description = {};
        description.element = document.createElement('p');
        description.element.className = 'txt-m';
        description.text = document.createTextNode("A record-keeping system");
        description.element.appendChild(description.text);

        var header = document.createElement('header');
        header.insertAdjacentElement('beforeend', logo);
        header.insertAdjacentElement('beforeend', title.element);
        header.insertAdjacentElement('beforeend', description.element);

        var roll = document.createElement('article');
        roll.insertAdjacentElement('beforeend', header);

        document.body.insertAdjacentElement('beforeend', roll);

    }

    return {

        setup: setup

    };

})();

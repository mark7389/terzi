class SSSearch extends HTMLElement {

    constructor() {

        super();

        var shadow = this.attachShadow({
            mode: 'open'
        });

        var searchForm = document.createElement('form');

        var searchButton = document.createElement('input');

        var keywordsInput = document.createElement('input');

        var recordTypesFieldset = document.createElement('fieldset');

        var jobsLabel = document.createElement('label');
        var jobsCheckbox = document.createElement('input');

        var candidatesLabel = document.createElement('label');
        var candidatesCheckbox = document.createElement('input');

        var clientsLabel = document.createElement('label');
        var clientsCheckbox = document.createElement('input');

        searchButton.id = 'ss-search-button';
        searchButton.type = 'submit';
        searchButton.value = 'Search';

        keywordsInput.id = 'ss-search-keywords';
        keywordsInput.type = 'text';
        keywordsInput.placeholder = 'keywords ...';

        jobsCheckbox.id = 'ss-search-jobs-checkbox';
        jobsCheckbox.type = 'checkbox';
        jobsCheckbox.checked = true;

        jobsLabel.appendChild(jobsCheckbox);

        candidatesCheckbox.id = 'ss-search-candidates-checkbox';
        candidatesCheckbox.type = 'checkbox';
        candidatesCheckbox.checked = true;

        candidatesLabel.appendChild(candidatesCheckbox);

        clientsCheckbox.id = 'ss-search-clients-checkbox';
        clientsCheckbox.type = 'checkbox';
        clientsCheckbox.checked = true;

        clientsLabel.appendChild(clientsCheckbox);

        recordTypesFieldset.appendChild(jobsLabel);
        recordTypesFieldset.appendChild(candidatesLabel);
        recordTypesFieldset.appendChild(clientsLabel);

        searchForm.appendChild(searchButton);
        searchForm.appendChild(keywordsInput);
        searchForm.appendChild(recordTypesFieldset);

        shadow.appendChild(searchForm);

    }

}

customElements.define('ss-search', SSSearch);

class HomePage {
  get searchButton() {
    return '#search-toggle';
  }

  get homeLogo() {
    return '.custom-logo-link';
  }

  get searchTextbox() {
    return '#search-form-2';
  }

  get searchSubmitButton() {
    return '#header-search > form > .search-submit';
  }

  get newsletterLink() {
    return 'Newsletter';
  }
}

module.exports = new HomePage();

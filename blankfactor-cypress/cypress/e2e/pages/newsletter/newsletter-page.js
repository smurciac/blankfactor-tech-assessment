class NewsletterPage {
  get emailInput() {
    return '[name="email"]';
  }

  get submitButton() {
    return '[type="submit"]';
  }
}

module.exports = new NewsletterPage();

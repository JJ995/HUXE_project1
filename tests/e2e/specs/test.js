// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('#app', 5000)
        .waitForElementVisible('.login__box',2000)
        .assert.containsText('button', 'Login')
        .click('button')
        .waitForElementVisible('.auth0-lock-widget-container', 5000)
        .pause(2000)
        .setValue('input[name=email]', 'dietrich.daniel1@gmail.com')
        .setValue('input[name=password]', 'asdf123@')
        .pause(2000)
        .click('button[type=submit]')
        .pause(5000)
        .click('button')
        .pause(8000)
        .end()
  }
}

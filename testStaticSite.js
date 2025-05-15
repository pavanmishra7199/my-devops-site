<<<<<<< HEAD
const { Builder, By, until } = require('selenium-webdriver');

(async function testWeatherForecast() {
  // Launch Chrome
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    // Open your website
    await driver.get('http://127.0.0.1:5500'); // <-- change if your live-server shows a different URL

    // Step 1: Check page title
    await driver.wait(until.titleIs('Weather Forcast'), 5000);
    console.log('✅ Title is correct!');

    // Step 2: Find the search bar and type "London"
    let searchBar = await driver.findElement(By.css('.search-bar'));
    await searchBar.sendKeys('London');
    console.log('✅ Entered "London" in search bar!');

    // Step 3: Click the search button
    let searchButton = await driver.findElement(By.css('.search button'));
    await searchButton.click();
    console.log('✅ Clicked search button!');

    // Step 4: (Optional) Wait for city name update
    await driver.wait(until.elementLocated(By.css('.city')), 5000);
    let cityElement = await driver.findElement(By.css('.city'));
    let cityName = await cityElement.getText();

    console.log(`🌎 Updated City Name: ${cityName}`);

  } catch (error) {
    console.error('❌ Test Failed:', error);
  } finally {
    // Close Chrome after test
    await driver.quit();
  }
})();
=======
const { Builder, By, until } = require('selenium-webdriver');

(async function testWeatherForecast() {
  // Launch Chrome
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    // Open your website
    await driver.get('http://127.0.0.1:5500'); // <-- change if your live-server shows a different URL

    // Step 1: Check page title
    await driver.wait(until.titleIs('Weather Forcast'), 5000);
    console.log('✅ Title is correct!');

    // Step 2: Find the search bar and type "London"
    let searchBar = await driver.findElement(By.css('.search-bar'));
    await searchBar.sendKeys('London');
    console.log('✅ Entered "London" in search bar!');

    // Step 3: Click the search button
    let searchButton = await driver.findElement(By.css('.search button'));
    await searchButton.click();
    console.log('✅ Clicked search button!');

    // Step 4: (Optional) Wait for city name update
    await driver.wait(until.elementLocated(By.css('.city')), 5000);
    let cityElement = await driver.findElement(By.css('.city'));
    let cityName = await cityElement.getText();

    console.log(`🌎 Updated City Name: ${cityName}`);

  } catch (error) {
    console.error('❌ Test Failed:', error);
  } finally {
    // Close Chrome after test
    await driver.quit();
  }
})();
>>>>>>> 546b974df132f7f472bcec3024e1d907ed6ceb7e

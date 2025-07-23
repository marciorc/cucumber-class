const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const assert = require('assert')

let driver

Before(async () => {
    driver = await new Builder().forBrowser('chrome').build()
})

After(async () => {
    await driver.quit()
})

Given('que eu acesse a página de login', async () => {
    await driver.manage().window().maximize()
    await driver.get('http://localhost:4000')
})

When('informo as credenciais válidas', async (dataTable) => {
    const credenciais = dataTable.rowsHash()
    await driver.findElement(By.id('username')).sendKeys(credenciais.usuario)
    await driver.findElement(By.id('senha')).sendKeys(credenciais.senha)
    await driver.findElement(By.css('#login-section > button')).click()
})

Then('eu devo ser redirecionado para a página de transferência', async () => {
    await driver.wait(until.elementLocated((By.css('#app-section > div:nth-child(1) > div > h4')), 3000))
    const titulo = await driver.findElement(By.css('#app-section > div:nth-child(1) > div > h4')).getText()

    assert.strictEqual('Realizar Transferência', titulo)
})
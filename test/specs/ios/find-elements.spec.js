describe('find elements ios', () => {
  it('find by acc id', async () => {
    await $('~Alert Views').click()
    await $('~Simple').click()
    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })
  it('find by tag', async () => {
    const elements = await $$('XCUIElementTypeStaticText')
    for (const el of elements) {
      console.log(await el.getText())
    }
  })
  it('xpath', async () => {
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click()
    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })
  it('class chain', async () => {
    const alertViews = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
    await $(`-ios class chain:${alertViews}`).click()
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click()
    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })
  it('predicate string', async () => {
    const alertViews = 'value BEGINSWITH[c] "alert"'
    await $(`-ios predicate string:${alertViews}`).click()
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click()
    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })
  it.only('search exercise', async () => {
    await $('~Search').click()
    await $('~Default').click()
    const inputField = await $('-ios predicate string:type == "XCUIElementTypeSearchField"')
    await inputField.addValue('some text')
    await $('~Clear text').click()
    await expect(inputField).not.toHaveAttr("value")

  })
})
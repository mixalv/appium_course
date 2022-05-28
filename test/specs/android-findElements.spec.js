describe('android tests for finding elements', () => {
  it('test app element', async () => {
    const appElement = await $('~App')
    await appElement.click()
    const actionBar = await $('~Action Bar')
    await expect(actionBar).toBeExisting()
  })

  it('class locator', async () => {
    const classElement = await $('android.widget.TextView')
    console.log(await classElement.getText())
    await expect(classElement).toHaveText('API Demos')

  })

  xit('xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
    await $('//android.widget.TextView[@text="Command two"]').click()
    const textAssertion = await $('//android.widget.TextView')
    await expect(textAssertion).toHaveText('You selected: 1 , Command two')
  })

  it('find by UiAutomator', async () => {
    await $('android=new UiSelector().textContains("Alert")').click()
  })

  it('find multiple elem', async () => {
    const expectedText = [
      "API Demos",
     "Access'ibility",
     "Accessibility",
     "Animation",
     "App",
     "Content",
     "Graphics",
     "Media",
     "NFC",
     "OS",
     "Preference",
     "Text",
     "Views" ]
    let actualText = []
    const textList = await $$('android.widget.TextView')

    for(const e of textList) {
      actualText.push(await e.getText()) 
    }
    await expect(actualText).toEqual(expectedText)
    
  })

  it.only('input field', async () => {
    const value = 'Canada'
    await $('~Views').click()
    await $('~Auto Complete').click()
    await $('~1. Screen Top').click()
    const textField = await $('android.widget.EditText')
    await textField.setValue(value)
    await expect(textField).toHaveText(value)
  })
})
describe('native tests', () => {
  it('package and activity', async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

    // await driver.pause(3000)

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
  })

  it('dialog boxes', async () => {
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
    await $('~OK Cancel dialog with a message').click()
    await driver.acceptAlert()
    // await driver.dismissAlert()
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()

  })

  it('scrolling', async () => {
    await $('~App').click()
    await $('~Activity').click()
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
    await expect($('~Secure Dialog')).toExist()
  })

  it('horizontal scrolling', async () => {
    await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await driver.pause(3000)
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
  })

  it.only('scroll task with date picker', async () => {
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")
    const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
    await $('~change the date').click()
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await $('//*[@text="10"]').click()
    await $('//*[@resource-id="android:id/button1"]').click()
    const pickedDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
    await expect(pickedDate).not.toBe(currentDate)
  })


})
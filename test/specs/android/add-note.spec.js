describe('Add notes', () => {
  it('skip button', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
      .click()
  })

  it('add and delete a new note', async () => {
    const title = 'some title'
    const text = 'some text\ntext on next line'
    await $('//*[@text="Add note"]').click()
    await $('//*[@text="Text"]').click()
    await expect($('//*[@text="Editing"]')).toBeDisplayed() 
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
      .addValue(title)
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
      .addValue(text)
    await driver.back()
    await driver.back()
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText(text)
    await driver.back()
    await $(`//*[@text="${title}"]`).click()
    await $('~More').click()
    await $('//*[@text="Delete"]').click()
    await driver.acceptAlert()
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
    await $('//*[@text="Trash Can"]').click()
    await driver.pause(5000)
    await expect($(`//*[@text="${title}"]`)).toBeDisplayed()


  })
})
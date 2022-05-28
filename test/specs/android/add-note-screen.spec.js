const addNoteScreen = require("../../screenobjects/android/add-note.screen")
const deleteNoteScreen = require("../../screenobjects/android/delete-note.screen")

describe('Add notes', () => {
  it('skip button', async () => {
    await addNoteScreen.skipButton
      .click()
  })

  it('add and delete a new note', async () => {
    const title = 'some title'
    addNoteScreen.noteTitle = title
    const text = 'some text\ntext on next line'
    await addNoteScreen.addNoteBtn.click()
    await addNoteScreen.textBtn.click()
    await expect(addNoteScreen.editingText).toBeDisplayed() 
    await addNoteScreen.editTitleField
      .addValue(title)
    await addNoteScreen.editNoteField
      .addValue(text)
    await driver.back()
    await driver.back()
    await expect(addNoteScreen.editBtn).toBeDisplayed()
    await expect(addNoteScreen.viewNote).toHaveText(text)
  })

  it.only('delete note', async () => {
    await deleteNoteScreen.skipTutorial()
    await deleteNoteScreen.addNewNote('sp title', 'sp text\n new like')
    await driver.back()
    await deleteNoteScreen.elementByTitle.click()
    await deleteNoteScreen.moreBtn.click()
    await deleteNoteScreen.deleteBtn.click()
    await driver.acceptAlert()
    await deleteNoteScreen.iconNav.click()
    await deleteNoteScreen.trashCanBtn.click()
    await expect(deleteNoteScreen.elementByTitle).toBeDisplayed()
  })
})
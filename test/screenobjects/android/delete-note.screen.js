const addNoteScreen = require("./add-note.screen")

class DeleteNoteScreen {
  async skipTutorial() {
    await addNoteScreen.skipButton.click()
  }
  async addNewNote(title, text) {
    addNoteScreen.noteTitle = title
    this.title = title
    await addNoteScreen.addNoteBtn.click()
    await addNoteScreen.textBtn.click()
    await expect(addNoteScreen.editingText).toBeDisplayed() 
    await addNoteScreen.editTitleField
      .addValue(title)
    await addNoteScreen.editNoteField
      .addValue(text)
    await addNoteScreen.saveNote()
    await expect(addNoteScreen.editBtn).toBeDisplayed()
    await expect(addNoteScreen.viewNote).toHaveText(text)
  }
  get elementByTitle () {
    return $(`//*[@text="${this.title}"]`)
  }
  get deleteBtn () {
    return $('//*[@text="Delete"]')
  }
  get iconNav () {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
  }
  get trashCanBtn () {
    return $('//*[@text="Trash Can"]') 
  }
  get moreBtn () {
    return $('~More')
  }
}

module.exports = new DeleteNoteScreen()
class AddNoteScreen {
  set noteTitle (title) {
    this.title = title
  }

  async saveNote() {
    await driver.back()
    await driver.back()
  }
  get skipButton () {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
  }
  get addNoteBtn () {
    return $('//*[@text="Add note"]')
  }
  get textBtn () {
    return $('//*[@text="Text"]')
  }
  get editingText () {
    return $('//*[@text="Editing"]')
  }
  get editTitleField() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
  }
  get editNoteField () {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
  }
  get editBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
  }
  get viewNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
  }
  get elementByTitle () {
    return $(`//*[@text="${this.title}"]`)
  }
}

module.exports = new AddNoteScreen()
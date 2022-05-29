class ListScreen {
    get createListBtn () {
        return $('//*[@value="Create list"]')
    }
    get listNameInput () {
        return $('//*[@value="List Name"]')
    }
    get creagteBtn () {
        return $('~Create')
    }
    listNameField(name) {
        return $(`~${name}`)
    }
}

module.exports = new ListScreen()
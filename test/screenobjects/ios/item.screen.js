class ItemScreen {
    get createItmBtn () {
        return $('//XCUIElementTypeStaticText[@name="Create item"]')
    }
    get titleInput () {
        return $('//*[@value="Title"]')
    }
    get dueInput () {
        return $('//*[@value="Due"]')
    }
    get datePicker () {
        return $('~Date Picker')
    }
    get anyScreen () {
        return $('//XCUIElementTypeAlert[@name="Add To Do"]')
    }
    itemNameField (name) {
        return $(`~${name}`)
    }
}

module.exports = new ItemScreen()
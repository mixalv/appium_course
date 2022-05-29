const itemScreen = require("../../screenobjects/ios/item.screen")
const listScreen = require("../../screenobjects/ios/list.screen")

describe('item', () => {
    it('create item', async () => {
        await listScreen.createListBtn.click()
        await listScreen.listNameInput.addValue("Things to do")
        await listScreen.creagteBtn.click()
        await expect(await listScreen.listNameField('Things to do')).toBeExisting()
        await listScreen.listNameField('Things to do').click()

        await itemScreen.createItmBtn.click()
        await itemScreen.titleInput.addValue('some title')
        await itemScreen.dueInput.click()
        await itemScreen.datePicker.click()
        await itemScreen.itemNameField('30').click()
        await itemScreen.anyScreen.click()
        await itemScreen.itemNameField('Create').click()
        await expect(await itemScreen.itemNameField('some title')).toBeExisting()
        await expect(await itemScreen.itemNameField('Due Tomorrow')).toBeExisting()

    })
})
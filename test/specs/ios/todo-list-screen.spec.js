const ListScreen = require('../../screenobjects/ios/list.screen')

describe('todo list', () => {
    it('create list', async () => {
        await ListScreen.createListBtn.click()
        await ListScreen.listNameInput.addValue("Things to do")
        await ListScreen.creagteBtn.click()
        await expect(await ListScreen.listNameField('Things to do')).toBeExisting()
    })
})
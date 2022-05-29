describe('todo list', () => {
    it('create list', async () => {
        await $('//*[@value="Create list"]').click()
        await $('//*[@value="List Name"]').addValue("Things to do")
        await $('~Create').click()
        await expect(await $('~Things to do')).toBeExisting()
    })
})
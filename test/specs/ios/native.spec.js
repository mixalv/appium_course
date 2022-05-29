describe('ios native features', () => {
    it('alert box', async () => {
        await $('~Alert Views').click()
        await $('~Okay / Cancel').click()

        console.log(await driver.getAlertText())

        await driver.acceptAlert()
        await expect($('~OK')).not.toExist()
    })
    it('scrollable', async () => {
        await driver.execute('mobile: scroll', {direction: "down"})
        await driver.execute('mobile: scroll', {direction: "up"})
        await $('~Picker View').click()

        const redPicker = await $('~Red color component value')
        await driver.execute('mobile: scroll', {
            element: redPicker.elementId,
            direction: "down"
        })
        await driver.pause(2000)
    })
    it.only('picker view', async () => {
        await $('~Picker View').click()
        const redPicker = await $('~Red color component value')
        const greenPicker = await $('~Green color component value')
        const bluePicker = await $('~Blue color component value')
        await redPicker.addValue('125')
        await greenPicker.addValue('0')
        await bluePicker.addValue('125')
        await driver.pause(2000)
    })
})
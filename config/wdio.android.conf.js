const path = require('path')
const {config} = require('./wdio.shared.conf')

config.port = 4723
config.services = ['appium']
config.specs = [
  './test/specs/android/add-note-screen*.js'
]
config.capabilities = [
          {
        platformName: "Android",
        "appium:deviceName": "Pixel_4_API_30",
        "appium:platformVersion": "11.0",
        "appium:automationName": "UiAutomator2", 
        "appium:app": path.join(process.cwd(), "app\\android\\ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
        // "appium:app": "C:/Users/AndUser.DESKTOP-SOGF67O/Desktop/appium/webdriverio-appium/app/android/ApiDemos-debug.apk"
    }
]
exports.config = config
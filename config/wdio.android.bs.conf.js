const {config} = require('./wdio.shared.conf')
require('dotenv').config()

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY
config.services = ['browserstack']
config.specs = [
  './test/specs/android/add-note-screen*.js'
]
config.capabilities = [
          {
        platformName: "Android",
        "appium:deviceName": "Google Pixel 3",
        "appium:platformVersion": "9.0",
        "appium:automationName": "UiAutomator2", 
        "appium:app": "bs://3381f3957432374dff54d4378470c75b8d803752",
        "appium:autoGrantPermissions": true
        // "appium:app": "C:/Users/AndUser.DESKTOP-SOGF67O/Desktop/appium/webdriverio-appium/app/android/ApiDemos-debug.apk"
    }
]
exports.config = config
const path = require('path')
const {config} = require('./wdio.shared.conf')

config.port = 4723
config.services = ['appium']

config.specs = [
  './test/specs/ios/todo-list-screen*.js'
]
config.capabilities = [
  {
    platformName: "ios",
    "appium:deviceName": "iPhone 13 mini",
    "appium:platformVersion": "15.5",
    "appium:automationName": "XCUITest", 
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app/MVCTodo.app"),
    "appium:autoGrantPermissions": true
}
]
exports.config = config
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BackgroundinCucumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "",
  "description": "As a user\r\nI want to be able to add new clients in the system\r\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature"
});
formatter.background({
  "line": 26,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 27,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 10170706925,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 447698295,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign up a new user",
  "description": "",
  "id": ";sign-up-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "she provides the first name as Sukesh",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "she provides the last name as Kumar",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "she provides the email as validemaillllll@aq.com",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "she provides the password as password",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "she provides the confirm password again as password",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "SignupPageSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "duration": 109025057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "SignupPageSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "duration": 76690482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validemaillllll@aq.com",
      "offset": 26
    }
  ],
  "location": "SignupPageSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "duration": 118333024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "SignupPageSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 77368558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "SignupPageSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "duration": 75840410,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.she_signs_up()"
});
formatter.result({
  "duration": 1824588307,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 103067832,
  "status": "passed"
});
formatter.background({
  "line": 26,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 27,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 870535354,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 50127317524,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign up\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027DES000291\u0027, ip: \u0027192.168.50.97\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\mzeronpa\\AppData\\Local\\Temp\\scoped_dir5896_28646}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d50ab4334e61bba87b4f0ca9f9fae850\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pagesClasses.LandingPage.she_chooses_to_sign_up(LandingPage.java:24)\r\n\tat steps.LandingPageSteps.she_chooses_to_sign_up(LandingPageSteps.java:11)\r\n\tat ✽.When she chooses to sign up(BackgroundinCucumber.feature:28)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 50,
  "name": "Data driving new user sign-up",
  "description": "",
  "id": ";data-driving-new-user-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "she provides the first name as Sukesh",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "she provides the last name as Kumar",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "she provides the email as validemailll@aq.com",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "she provides the password as password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "she provides the confirm password again as password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "SignupPageSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "SignupPageSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "validemailll@aq.com",
      "offset": 26
    }
  ],
  "location": "SignupPageSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "SignupPageSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "SignupPageSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupPageSteps.she_signs_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("NewClientWorkflow.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "As a user\nI want to be able to add new clients in the system\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@simple"
    },
    {
      "line": 1,
      "name": "@TaggedAgain2"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Sign up a new user",
  "description": "",
  "id": ";sign-up-a-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@simple-signup"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "she provides the first name as Sukesh",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she provides the last name as Kumar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she provides the email as validemailtuculo5@aq.com",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she provides the password as password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she provides the confirm password again as password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 750744609,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 50050476281,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign up\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027DES000291\u0027, ip: \u0027192.168.50.97\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\mzeronpa\\AppData\\Local\\Temp\\scoped_dir5896_28646}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d50ab4334e61bba87b4f0ca9f9fae850\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pagesClasses.LandingPage.she_chooses_to_sign_up(LandingPage.java:24)\r\n\tat steps.LandingPageSteps.she_chooses_to_sign_up(LandingPageSteps.java:11)\r\n\tat ✽.When she chooses to sign up(NewClientWorkflow.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "SignupPageSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "SignupPageSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "validemailtuculo5@aq.com",
      "offset": 26
    }
  ],
  "location": "SignupPageSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "SignupPageSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "SignupPageSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupPageSteps.she_signs_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("NewClientWorkflowWithTags.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 22,
  "name": "",
  "description": "As a user\r\nI want to be able to add new clients in the system\r\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 21,
      "name": "@Signup"
    },
    {
      "line": 21,
      "name": "@TaggedAgain"
    }
  ]
});
formatter.background({
  "line": 27,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 28,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 1523811917,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 50011376522,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign up\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027DES000291\u0027, ip: \u0027192.168.50.97\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\mzeronpa\\AppData\\Local\\Temp\\scoped_dir5896_28646}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d50ab4334e61bba87b4f0ca9f9fae850\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pagesClasses.LandingPage.she_chooses_to_sign_up(LandingPage.java:24)\r\n\tat steps.LandingPageSteps.she_chooses_to_sign_up(LandingPageSteps.java:11)\r\n\tat ✽.When she chooses to sign up(NewClientWorkflowWithTags.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "Sign up a new user",
  "description": "",
  "id": ";sign-up-a-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Signup-Simple"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "she provides the first name as Sukesh",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "she provides the last name as Kumar",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "she provides the email as pruebaBackGroun@aq.com",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "she provides the password as password",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "she provides the confirm password again as password",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "SignupPageSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "SignupPageSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pruebaBackGroun@aq.com",
      "offset": 26
    }
  ],
  "location": "SignupPageSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "SignupPageSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "SignupPageSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupPageSteps.she_signs_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 27,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 28,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "StartingSteps.setup()"
});
formatter.result({
  "duration": 1569531052,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageSteps.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 50046404288,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign up\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027DES000291\u0027, ip: \u0027192.168.50.97\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\mzeronpa\\AppData\\Local\\Temp\\scoped_dir5896_28646}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d50ab4334e61bba87b4f0ca9f9fae850\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:34)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pagesClasses.LandingPage.she_chooses_to_sign_up(LandingPage.java:24)\r\n\tat steps.LandingPageSteps.she_chooses_to_sign_up(LandingPageSteps.java:11)\r\n\tat ✽.When she chooses to sign up(NewClientWorkflowWithTags.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 52,
  "name": "Data driving new user sign-up",
  "description": "",
  "id": ";data-driving-new-user-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Signup"
    },
    {
      "line": 21,
      "name": "@TaggedAgain"
    },
    {
      "line": 41,
      "name": "@Signup-DataDriven"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "she provides the first name as Sukesh",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "she provides the last name as Kumar",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "she provides the email as pruebaBackGroun1@aq.com",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "she provides the password as password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "she provides the confirm password again as password",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sukesh",
      "offset": 31
    }
  ],
  "location": "SignupPageSteps.she_provides_the_first_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kumar",
      "offset": 30
    }
  ],
  "location": "SignupPageSteps.she_provides_the_last_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pruebaBackGroun1@aq.com",
      "offset": 26
    }
  ],
  "location": "SignupPageSteps.she_provides_the_email_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "SignupPageSteps.she_provides_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 43
    }
  ],
  "location": "SignupPageSteps.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupPageSteps.she_signs_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
});
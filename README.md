# @clouudsoftware/environment  
  
Simple wrapper around `process.env` to provide the environment variable in the right Type depending on the method called.

This package doesn't dictate how the environment variables are set, it's purpose is to simply get them - during runtime - in the right Type
  
## **Available Methods**  
* asArray()  
* asBoolean()  
* asJson()  
* asNumber()  
  
## **Usage**

#### asArray()

#### asBoolean()

#### asJson()

#### asNumber()
If the value does not convert to a number, you will received a TypeError

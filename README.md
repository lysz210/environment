# @clouudsoftware/environment  
  
Simple wrapper around `process.env` to provide the environment variable in the right Type depending on the method called.

This package doesn't dictate how environment variables become defined, it's purpose is to simply get them - during runtime - in the right Type
  
## **Available Methods**  
* asArray()  
* asBoolean()  
* asJson()  
* asNumber()  
  
## **Usage**

#### asArray(key, separator)
By default, the separator (second parameter) is `,`. You can pass in any value you like here as long as it is a valid string.

Take the string `'one,two,three,four,five'` as our starting position, and let's say it's behind `process.env['numberArray']` calling the method `asArray('numberArray')` will reutrn a result of:
```
[
  'one',
  'two',
  'three',
  'four',
  'five
]
```
Since we used commas as the separator we didn't need to define it as the second parameter as it takes a comma as the default value. 

#### asBoolean(key)
If the value is any of the below, you will receive `true`, otherwise `false` will be returned
* true
* 1
* y
* Y


#### asJson(key)
If the value does not convert to a JSON object, you will receive a TypeError


#### asNumber(key)
If the value does not convert to a number, you will receive a TypeError

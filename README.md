# react-native-checkbox-green
Checkbox green component for React native

##Installation:

Install the component through npm using:

```
npm install react-native-checkbox-green --save
```


##Example:
```js
<CheckBox
  checked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/>
```

##Props:

- `checked` : initial checked value
- `onChange` : callback function that will be invoked with the toggled checked property as argument.

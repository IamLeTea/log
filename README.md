# Log

[![npm version](https://badge.fury.io/js/%40letea%2Flog.svg)](https://badge.fury.io/js/%40letea%2Flog)

A console with label for Browser.

[Live Demo](https://codesandbox.io/s/flamboyant-elbakyan-juqdb?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
npm install @letea/log
```

## Usage

```js
import Log from "@letea/log";

const log = new Log({
  label: "Log 1"
});
log.print("This is a print message");

const log2 = new Log({
  label: "Log 2",
  labelBackgroundColor: "#c00"
});
log2.warn("This is a warn message.");

const log3 = new Log({
  label: "Log 3",
  labelBackgroundColor: "#0a0"
});
log3.error("This is a error message.");
````

### Options

```js
{
  label: string,
  labelBackgroundColor: string, // color format
  messageColor: string          // color format
}
```

## Result

### Light Mode

<img src="https://i.imgur.com/RJ91r0r.png" alt="" /> 

### Dark Mode

<img src="https://i.imgur.com/BYhrVY0.png" alt="" /> 

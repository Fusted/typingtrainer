# Simple typing trainer

## [Demo](https://fusted.ru/)

## Available Scripts

#### Staring project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

To change port edit  `port` in `.env`  

#### Building project

You must change `homepage` in `package.json` to your domain before you build, then run

### `npm run build`

## Code style

1. **Do not** use realative paths if file not in parent directory.

```js
import test from "../../test.js" // bad
import test from "../test.js" // good
import test from "src/test/test.js" //good
import test from "./test.js" //good
```

Chage aliases in `tsconfig.json` to make paths shorter

2. **Use** ternary operator if it possible

```js
// bad
if (isCursor) {
    return cn(className, styles.active)
} else {
    return className
}

// good
return isCursor ? cn(className, styles.active) : className
```

```js
// bad
let test
if (a) {
    test = 1
} else {
    test = 2
}

// good
const test = a ? 1 : 2
```

3. #### Import rules

```js
import styles from "./typingArea.module.scss" // first line is css file
// 1 space after css
import React from "react" // external deps
import { useQueryParam, StringParam } from "use-query-params"
import { useAction, useAtom } from "@reatom/npm-react"
import { languageAtom, setLanguageAction } from "atoms/config" // internal deps
import { disposeAction } from "atoms/dispose"
import { type Lang, langs } from "services/languages"
import Select from "packages/Select" // internal components
```

# KuroFramework Standard Plugin

`@kuro-chan/standard-plugin` is a plugin for [KuroFramework](https://www.npmjs.com/package/@kuro-chan/framework).

## Installation

```bash
yarn add @kuro-chan/standard-plugin
# or
npm install @kuro-chan/standard-plugin
```

```TypeScript
import { Bot } from '@kuro-chan/framework'
import { StandardPlugin } from '@kuro-chan/standard-plugin'

const bot = new Bot({
  plugins: [
    new StandardPlugin()
  ]
})
```

import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { GlobalStyle } from '../src/index'

addDecorator(story => (
  <div>
    {story()}
    <GlobalStyle />
  </div>
))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

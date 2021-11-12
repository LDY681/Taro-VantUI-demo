import Vue from 'vue'
import './app.less'
/** import customized components */
import ActionSheet from './components/action-sheet'
import Button from './components/button'
import Image from './components/image'

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

// Register customized components
Vue.component(ActionSheet.name, ActionSheet)
Vue.component(Button.name, Button)
Vue.component(Image.name, Image)

export default App

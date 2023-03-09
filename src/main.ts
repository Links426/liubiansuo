import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'uno.css'
import './assets/iconfont/iconfont.css'

//导入mock

import SvgIcon from './components/SvgIcon.vue'
import './assets/iconfont/iconfont.js'
import router from './router/index'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router)
app.mount('#app')

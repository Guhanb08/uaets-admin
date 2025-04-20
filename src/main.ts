import { createApp } from 'vue'

import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@vuepic/vue-datepicker/dist/main.css'
import '@styles/styles.scss'
import { registerLicense } from '@syncfusion/ej2-base';

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE );
// Mount vue app
app.mount('#app')

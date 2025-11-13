import { defineCustomElement } from 'vue'
import App from './App.vue'

const AppComponent = defineCustomElement(App)

customElements.define('my-app-component', AppComponent)
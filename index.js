import {
  html,
  LitElement
} from 'lit-element'
import {
  store
} from './src/redux/store.js'
import {
  connect
} from 'pwa-helpers'
import {
  addOne,
  minusOne
} from './src/redux/actions.js'
import '@vaadin/vaadin-button'
import style from './styles/styles.css'

class CounterView extends connect(store)(LitElement) {

  static get properties() {
    return {
      count: {
        type: Number
      }
    }
  }

  stateChanged(state) {
    this.count = state.count
  }

  render() {
    return html `
      <style>
        ${style}
      </style>
      <div class="counter">
        <h1>Count: ${this.count}</h1>
        <button class="my-button" @click="${this.plusOne}">Add One</button>
        <button class="my-button" @click="${this.lessOne}">Minus One</button>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }

  plusOne() {
    store.dispatch(addOne(this.count))
  }

  lessOne() {
    store.dispatch(minusOne(this.count))
  }
}

customElements.define('counter-view', CounterView)
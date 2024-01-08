import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import { Provider } from 'react-redux'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<Theme>
<BrowserRouter>
      <App />
    </BrowserRouter>
</Theme>
   
  </Provider>
)

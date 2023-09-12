import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Redux/store.js'
// import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const queryClient = new QueryClient()
let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient} >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

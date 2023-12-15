import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { render } from 'react-dom'
import { WishlistContextProvider } from './context/WishlistContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <WishlistContextProvider>
      <FilterProvider>
          <App />
      </FilterProvider>
    </WishlistContextProvider>
  </AuthContextProvider>
)

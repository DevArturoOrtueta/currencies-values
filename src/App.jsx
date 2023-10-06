import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getFrom } from './hooks/getFrom'

function App() {
  console.log(getFrom('https://api.frankfurter.app/latest?from=USD'))
}

export default App

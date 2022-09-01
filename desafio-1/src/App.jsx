import { useState } from 'react'

import logoImg from './assets/Logo.png'
import plusImg from './assets/plus.png'
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img src={logoImg} alt="logo" />
      </header>

      <body>
        <form>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type="submit">
            Criar
            <img src={plusImg} alt="adicionar" />
          </button>
        </form>
      </body>
    </div>
  )
}

export default App

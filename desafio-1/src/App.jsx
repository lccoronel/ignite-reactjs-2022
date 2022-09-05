import { useState } from 'react'

import logoImg from './assets/Logo.png'
import plusImg from './assets/plus.png'
import styles from './App.module.css'
import './global.css'
import { TitleWithCounter } from './components/TitleWithCounter'

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

        <div className={styles.taskInfoWrapper}>
          <TitleWithCounter title="Tarefas criadas" value={0} />
          <TitleWithCounter title="Concluidas" value={0} isCompletedTitle />
        </div>
      </body>
    </div>
  )
}

export default App

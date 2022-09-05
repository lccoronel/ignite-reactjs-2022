import { useState } from 'react'

import logoImg from './assets/Logo.png'
import plusImg from './assets/plus.png'
import styles from './App.module.css'
import { TitleWithCounter } from './components/TitleWithCounter'
import { EmptyList } from './components/EmptyList'
import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

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

        <div className={styles.tasksList}>
          {!tasks.length && <EmptyList />}
        </div>
      </body>
    </div>
  )
}

export default App

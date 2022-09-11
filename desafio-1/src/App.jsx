import { useMemo, useState } from 'react'

import logoImg from './assets/Logo.png'
import plusImg from './assets/plus.png'
import styles from './App.module.css'
import { TitleWithCounter } from './components/TitleWithCounter'
import { EmptyList } from './components/EmptyList'
import { TaskCard } from './components/TaskCard'
import './global.css'

function App() {
  const [description, setDescription] = useState('')
  const [tasks, setTasks] = useState([])

  const amountTasks = tasks.length

  function handleAddNewTask(event) {
    event.preventDefault()

    const newTask = { id: tasks.length + 1, description, checked: false }

    setTasks(prevValues => [...prevValues, newTask])
    setDescription('')
  }

  function handleCheckedTask(id) {
    const formattedTasks = tasks.map(task => {
      if (task.id === id) task.checked = !task.checked

      return task
    })

    setTasks(formattedTasks)
  }

  function handleDeleteTask(id) {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const amountCompletedTasks = useMemo(() => {
    return tasks.filter(task => task.checked === true).length
  }, [tasks])

  return (
    <div className={styles.wrapper}>
      <header>
        <img src={logoImg} alt="logo" />
      </header>

      <main>
        <form onSubmit={handleAddNewTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={description} 
            onChange={(v) => setDescription(v.target.value)} 
          />

          <button type="submit">
            Criar
            <img src={plusImg} alt="adicionar" />
          </button>
        </form>

        <div className={styles.taskInfoWrapper}>
          <TitleWithCounter title="Tarefas criadas" amountTasks={amountTasks} />
          <TitleWithCounter 
            title="Concluidas" 
            amountTasks={amountTasks} 
            amountCompletedTasks={amountCompletedTasks} 
            isCompletedTitle
          />
        </div>

        <div className={styles.tasksList}>
          {!tasks.length && <EmptyList />}

          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onCheckTask={handleCheckedTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App

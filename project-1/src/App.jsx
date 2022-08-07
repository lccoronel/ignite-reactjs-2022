import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Lucas" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem modi minima consequatur obcaecati dolorum eum illo beatae ea natus similique quisquam ex blanditiis, eligendi alias quasi asperiores, delectus nam!" 
          />
          <Post 
            author="Lilian" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem modi minima consequatur obcaecati dolorum eum illo beatae ea natus similique quisquam ex blanditiis, eligendi alias quasi asperiores, delectus nam!" 
          />
        </main>
      </div>
    </div>
  )
}

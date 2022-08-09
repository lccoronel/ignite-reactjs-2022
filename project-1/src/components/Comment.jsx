import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
   return (
      <div className={styles.comment}>
         <img src="https://avatars.githubusercontent.com/u/54275445?v=4" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Lucas Coronel</strong>
                     <time 
                        title='11 de maio as 08:13' 
                        dateTime='2022-05-11 08:13:00'
                     >
                        Cerca de 1h atrás
                     </time>
                  </div>
                  

                  <button title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>

               <p>Muito bom Devon, parabens!! 🚀</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>3</span>
               </button>
            </footer>
         </div>
      </div>
   )
}
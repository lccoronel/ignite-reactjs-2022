import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
   const [likeCount, setLikeCount] = useState(0)

   function handleLikeComment() {
      setLikeCount(likeCount + 1)
   }

   return (
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/54275445?v=4" />

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
                  

                  <button onClick={() => onDeleteComment(content)} title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   )
}
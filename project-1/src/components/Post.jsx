import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img 
                  src="https://avatars.githubusercontent.com/u/54275445?v=4" 
               />

               <div className={styles.authorInfol}>
                  <strong>Lucas Coronel</strong>
                  <span>Web developer</span>
               </div>
            </div>

            <time 
               title='11 de maio as 08:13' 
               dateTime='2022-05-11 08:13:00'
            >
               Publicado a 1h
            </time>
         </header>

         <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>
               Acabei de subir mais um projeto no meu portifa. É um projeto que 
               fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
            </p>

            <p>
               <a>👉 jane.design/doctorcare</a>
            </p>

            <p>
               <a>#novoprojeto #nlw #rocketseat</a>
            </p>
         </div>

         <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea placeholder='Deixe seu comentário' />

            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
         </div>
      </article>
   )
}

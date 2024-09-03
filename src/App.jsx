import { Post } from "./Post";
import { Header } from "./components/Hearder";
import './global.css'
import styles from './app.module.css'
import { SideBar } from "./components/SideBar";
export function App() {
  return (
  <div>
    <Header />
     <div className={styles.wrapper}>
      <SideBar/>
      <main>   
         <Post 
    author="Gabriel Monteiro" 
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga libero blanditiis veritatis eos modi ducimus animi, neque tempora minima amet architecto aut praesentium asperiores temporibus sunt voluptatem? Exercitationem, placeat."
         />
    <Post
    author="Onailia Oliveira"
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga libero blanditiis veritatis eos modi ducimus animi, neque tempora minima amet architecto aut praesentium asperiores temporibus sunt voluptatem? Exercitationem, placeat."
    />
    </main>
     </div>

  </div>
  )
}

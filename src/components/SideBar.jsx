 import styles from './Sidebar.module.css'
 export function SideBar(){
   return( <aside className={styles.sidebar}>
    <img
    className={styles.cover}
    src="https://images.unsplash.com/photo-1629904888099-00285934292b?q=60&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div className={styles.profile}>
    <strong>Gabriel Monteiro</strong>
    <span>Web Developer</span>
   </div>
  <footer>
     <a href="#">
         Editar seu perfil
     </a>
   </footer>
    </aside>);
 }
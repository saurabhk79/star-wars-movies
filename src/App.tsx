import styles from "./app.module.css"
import Searchbar from "./components/Searchbar"

const App = ()=> {
  return (
    <div className={styles.app}>
      <Searchbar />
    </div>
  )
}

export default App
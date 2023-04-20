
import "./App.css"
import { TwiterFollowCard } from "./TwiterFollowCard"

function App() {
  return(
    <section className="App">
      <TwiterFollowCard 
        isFollowing={false} 
        userName="midudev" 
        name="Armando Alvarez"/>
      <TwiterFollowCard 
        isFollowing 
        userName="pheralb" 
        name="Pablo Hernandez"/>
      <TwiterFollowCard 
        isFollowing 
        userName="elonmusk" 
        name="Elon Musk"/>
    </section>
  )
}

export default App

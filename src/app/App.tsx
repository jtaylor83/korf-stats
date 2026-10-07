import { MatchSetup } from '../features/matches/components/MatchSetup'
import './App.css'


function App() {
  

  return (
    <main className="app">  
    <div className="app-header">
      <h1>Welcome to Korf Stats</h1>
      <p>Track your korfball team's stats with ease!</p>
    </div>
    <MatchSetup />
    </main>
  )
}

export default App
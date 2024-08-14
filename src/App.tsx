import './App.css'
import BellroyHeader from './components/BellroyHeader'
import GridComponent from './components/Grid/GridComponent'

function App() {
  return (
    <>
    <BellroyHeader/>
    <div className='content'>
      <GridComponent/>
    </div>
    </>
  )
}

export default App

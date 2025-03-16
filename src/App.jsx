
import { useContext } from 'react'
import './App.css'
import InstructionsComponent from './components/InstructionsComponent.jsx'
import WelcomeComponent from './components/WelcomeComponent.jsx'
import { AppContext } from './AppContext.jsx'
import QuestionsComponent from './components/QuestionsComponent.jsx'
import FinishComponent from './components/FinishComponent.jsx'

function App() {
  const {componentsIndex} = useContext(AppContext);

  const componentsMap = {
    0: <WelcomeComponent />,
    1: <InstructionsComponent />,
    2: <QuestionsComponent />,
    3: <FinishComponent />
  };

  return (
    <div className='flex items-center justify-center w-full h-screen p-4 bg-green-100'>
      {componentsMap[componentsIndex]}
    </div>
  )
}

export default App

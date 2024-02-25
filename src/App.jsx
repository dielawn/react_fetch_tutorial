import './App.css'
import { Image } from './Fetch'
import Fetch from './AnotherFetch'
import { QueriedResponse } from './GraphQL'
import QueryTutorial from './UseQuery'


function App() {
 
 
  return (
   <div>
    {/* <QueriedResponse /> site is down*/}
    <QueryTutorial />
    <Fetch />
    <Image index='0'/>
    <Image index='420'/>
    <Image index='69'/>
   </div>
  )
}

export default App

import './App.css'
import Greeting from "./Greeting.jsx"
import ProfileCard from "./ProfileCard.jsx"
import Status from './Status.jsx'
import Counter from './Counter.jsx'
import FetchApi from './FetchApiComp.jsx'
import NavBar from './NavBar.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import ContactUs from './ContactUs.jsx'
import AboutUs from './AboutUs.jsx'
import Likebtn from './Likebtn.jsx'
import State from './State.jsx'
import ColorPicker from './Colorpicker.jsx'
import TextInput from './Textinput.jsx'
import ToggleSwitch from './Toggle.jsx'
import TodoList from './Todolist.jsx'
import UserList from './Fetchapi.jsx'
function App() {

  return (
   <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    <Likebtn/>
    <State/>
    <ColorPicker/>
    <TextInput/>
    <ToggleSwitch/>
    <Greeting name="Harsh Dangi"/>
    <Counter/>
    <Status state={true}/>
    <UserList/>
    <FetchApi/>
   </>
  )
}

export default App

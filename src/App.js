import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/sb-admin-2.css'
import Login from './Login';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Members from './Members';
import Membersview from './Membersview';
import Editmember from './Editmember';
import Createmember from './Createmember'
import Books from './Books';
import Bookview from './Booksview';
import Editbook from './Editbook';
import Createbook from './Createbook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} ></Route>
        <Route path='/Portal' element={<Portal></Portal>} >
          <Route path='Dashboard' element={<Dashboard></Dashboard>} ></Route>
          <Route path='Members' element={<Members></Members>} ></Route>
          <Route path='Members/:id' element={<Membersview></Membersview>}></Route>
          <Route path='Members/Edit/:id' element={<Editmember></Editmember>}></Route>
          <Route path='Create-Member' element={<Createmember></Createmember>}></Route>
          <Route path='Books' element={<Books></Books>}></Route>
          <Route path='Books/:id' element={<Bookview></Bookview>}></Route>
          <Route path='Books/Edit/:id' element={<Editbook></Editbook>}></Route>
          <Route path='Create-Book' element={<Createbook></Createbook>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

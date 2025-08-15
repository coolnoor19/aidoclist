
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import AddUserForm from './pages/manageUser/AddUser'
import UsersList from './pages/manageUser/UserList'
import AddWings from './pages/manageMasters/Wings'
import RoleType from './pages/manageMasters/RoleType'
import DocumentCategoryPage from './pages/manageDocument/DocumentCategory'
import AddDocumentForm from './pages/manageDocument/AddDocument'
import DocumentsList from './pages/manageDocument/DocumentList'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/user-list" element={<UsersList />} />
        <Route path="/wings" element={<AddWings/>} />
        <Route path="/role-type" element={<RoleType/>} />
        <Route path="/document-category" element={<DocumentCategoryPage/>} />
        <Route path="/add-document-new" element={<AddDocumentForm/>} />
        <Route path="/document-list" element={<DocumentsList/>} />


        {/* Add more routes for other pages */}
      </Routes>

    </div>
  )
}

export default App

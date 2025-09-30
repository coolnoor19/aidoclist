
// import { Routes, Route } from 'react-router-dom'
// import './App.css'
// import Dashboard from './components/Dashboard'
// import Navbar from './components/Navbar'
// import AddUserForm from './pages/manageUser/AddUser'
// import UsersList from './pages/manageUser/UserList'
// import AddWings from './pages/manageMasters/Wings'
// import RoleType from './pages/manageMasters/RoleType'
// import DocumentCategoryPage from './pages/manageDocument/DocumentCategory'
// import AddDocumentForm from './pages/manageDocument/AddDocument'
// import DocumentsList from './pages/manageDocument/DocumentList'
// // import Sidebar from './components/Sidebar'

// function App() {

//   return (
//     <div className=''>
//       <Navbar />
      
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/add-user" element={<AddUserForm />} />
//         <Route path="/user-list" element={<UsersList />} />
//         <Route path="/wings" element={<AddWings/>} />
//         <Route path="/role-type" element={<RoleType/>} />
//         <Route path="/document-category" element={<DocumentCategoryPage/>} />
//         <Route path="/add-document-new" element={<AddDocumentForm/>} />
//         <Route path="/document-list" element={<DocumentsList/>} />
//          {/* Add more routes for other pages */}
//       </Routes>

//     </div>
//   )
// }
// export default App


import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import AddUserForm from "./pages/manageUser/AddUser";
import UsersList from "./pages/manageUser/UserList";
import AddWings from "./pages/manageMasters/Wings";
import RoleType from "./pages/manageMasters/RoleType";
import DocumentCategoryPage from "./pages/manageDocument/DocumentCategory";
import AddDocumentForm from "./pages/manageDocument/AddDocument";
import DocumentsList from "./pages/manageDocument/DocumentList";
import SignIn from "./pages/auth/SignIn";
import AttachmentFlowlist from "./pages/Workflow Management/AttachmentFlowlist";
import AssignWorkflow from "./pages/Workflow Management/AssignWorkflow";
import UserHistory from "./pages/manageUser/UserHistory";
import Landing from "./pages/landing/Landing";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <Routes>
      <Route path="/landing" element= {<Landing/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      {/* Everything below uses the persistent Navbar + Sidebar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/user-list" element={<UsersList />} />
         <Route path="/user-history" element={<UserHistory />} />
        <Route path="/wings" element={<AddWings />} />
        <Route path="/role-type" element={<RoleType />} />
        <Route path="/document-category" element={<DocumentCategoryPage />} />
        <Route path="/add-document-new" element={<AddDocumentForm />} />
        <Route path="/document-list" element={<DocumentsList />} />
        <Route path="/assignment-workflow" element={<AssignWorkflow />} />
        <Route path="/attachment-flowlist" element={<AttachmentFlowlist />} />
      </Route>
    </Routes>
  );
}

export default App;




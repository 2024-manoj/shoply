import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard"
import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"


function App() {

  return (
    <>
    <div className="admindashboard-container">
      <div className="admindashboard-sidebar">
        <Sidebar />
      </div>
      
      <div className="admindashboard-content">
        <div className="admindashboard-header">
          <Header />
        </div>
        
        <div className="admindashboard-main">
          {/* Your main content goes here */}
          <AdminDashboard/>
        </div>
      </div>
    </div>
      <Routes>
        
        <Route path='/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App

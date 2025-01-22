import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/auth/Auth'
import { AuthProvider } from './context/AuthContext'
import Layout from './layout/Layout'
import Admin from './pages/admin/Admin'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Navigate to="/admin" replace />} />
            <Route path="admin" element={<Layout />}>
              <Route index element={<Admin />} />
            </Route>
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

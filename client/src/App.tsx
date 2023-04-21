import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from './constants/routePaths'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/homepage/HomePage'
import PageLayout from './pages/layouts/PageLayout'
import ProfilePage from './pages/ProfilePage'
import RequireAuth from './components/common/requireAuth/RequireAuth'
import AddNewPet from './pages/AddNewPet'
import './App.css'
import { useAuth } from './hooks/useAuth'
import LoginPage from './pages/login/Login'
import RegisterPage from './pages/register/Register'

function App() {
  const { ROOT, CONTACT, PROFILE, LOGIN, REGISTER, ADD_PET } = ROUTE_PATHS
  const { token } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={ROOT} element={<HomePage />} />
          <Route path={CONTACT} element={<ContactPage />} />
          <Route
            path={PROFILE}
            element={
              <RequireAuth token={token}>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={REGISTER} element={<RegisterPage />} />
          <Route
            path={ADD_PET}
            element={
              <RequireAuth token={token}>
                <AddNewPet />
              </RequireAuth>
            }
          />
          <Route element={<Navigate to={LOGIN} />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

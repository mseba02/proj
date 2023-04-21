import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/header/Header'

const PageLayout: FC = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
)

export default PageLayout

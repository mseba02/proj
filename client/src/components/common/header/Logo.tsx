import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { ROUTE_PATHS } from '../../../constants/routePaths'

const Logo: FC = () => {
  return (
    <div>
      <Link to={ROUTE_PATHS.ROOT}>
        <img src={logo} alt="Happy Paws" />
      </Link>
    </div>
  )
}

export default Logo

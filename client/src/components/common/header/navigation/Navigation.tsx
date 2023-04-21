import React, { FC } from 'react'
import { ROUTE_PATHS } from '../../../../constants/routePaths'
import { Link } from 'react-router-dom'

const Navigation: FC = () => {
  const { CONTACT, LOGIN } = ROUTE_PATHS

  return (
    <ul>
      <li>
        <Link to={CONTACT}>Contact</Link>
      </li>
      <li>
        <Link to={LOGIN}>Authenticate</Link>
      </li>
    </ul>
  )
}

export default Navigation

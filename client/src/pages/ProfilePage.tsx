import React, { FC, useEffect, useMemo, useState } from 'react'
import { useUpdateProfile } from '../hooks/forms/useUpdateProfile'
import { GET_USERS } from '../graphql/queries/user'
import { useQuery } from '@apollo/client'

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_USERS)
  const { onSubmit, register } = useUpdateProfile()
  console.log(data?.getUsers.users, 'data')
  return (
    <div>
      <h1 className="mb-6">Profile</h1>
      <form onSubmit={onSubmit}>{/*<ProfileList userInfo={userInfo} />*/}</form>
    </div>
  )
}

export default ProfilePage

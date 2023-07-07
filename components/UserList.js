import React from 'react'
import { connectionToDB } from '@/utils/database'
import User from '@/models/user'

const UserList = async () => {
    await connectionToDB()
    const d = await User.find()

    console.log(d)

  return (
    <div>UserList: Work in progress!!!</div>
  )
}

export default UserList
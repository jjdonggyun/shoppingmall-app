// 로그인 안 된 사람을 로그인 페이지로 이동시켜줌
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ( {isAuth} ) => {
  return (
    isAuth ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default ProtectedRoutes

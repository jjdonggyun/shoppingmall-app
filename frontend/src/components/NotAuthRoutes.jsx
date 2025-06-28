// 로그인이나 회원가입 등 후 메인 페이지로 리다이렉트 시켜줌
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const NotAuthRoutes = ({ isAuth }) => {
  return (
      isAuth ?  <Navigate to={'/'} /> : <Outlet />
  )
}

export default NotAuthRoutes

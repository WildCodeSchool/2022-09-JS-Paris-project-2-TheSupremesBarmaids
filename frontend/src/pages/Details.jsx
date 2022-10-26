import Footer from '@components/Footer'
import React from 'react'
import HeaderDetails from './Details/HeaderDetails'
import MainDetails from './Details/MainDetails'

function Details() {
  return (
    <div>
        <HeaderDetails />
        <MainDetails />
        <Footer />
    </div>
  )
}

export default Details
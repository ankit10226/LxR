import React from 'react'
import Page from '../../Components/UI/Page/Page'
import PageBody from '../../Components/UI/Page/PageBody' 
import Navbar from '../../Components/Includes/Navbar' 
import Body from '../../Components/Includes/Body'
import Footer from '../../Components/Includes/Footer'

const Index = () => {
  return (
    <Page>
      <PageBody>
        <Navbar />
          <Body />
        <Footer />
      </PageBody>
    </Page>
  )
}

export default Index

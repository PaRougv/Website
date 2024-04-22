//flex , justify-center and relative , absoulte , fixed 

import React from 'react'
import NavigationBar from './components/NavigationBar'
import HerosectionBar  from './sections/HerosectionBar'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import ServicesBar from './components/ServicesBar'
import SpecialOffer from './components/SpecialOffer'
import CustomerReviews from './components/CustomerReviews'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (<main className = "relative">
    <NavigationBar />
    <section className = "xl:padding-l wide:padding-r padding-b">
      <HerosectionBar />
    </section>
    <section className = "padding">
      <PopularProducts/>
    </section>
    <section className = "padding">
      <SuperQuality />
    </section>
    <section className = "padding-x">
      <ServicesBar/>
    </section>
    <section className = "padding">
      <SpecialOffer />
    </section>
    <section className = "bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className = "padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className = "bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>)
}

export default App
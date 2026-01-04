import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import Hero from './components/home/Hero'
import FeaturedItems from './components/home/FeaturedItems'
import CategoryGrid from './components/home/CategoryGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedItems />
        <CategoryGrid />
      </main>
      <Footer />
    </>
  )
}

export default App

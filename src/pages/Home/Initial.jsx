import { About, /*Contact,*/ Experience, Hero, Navbar,/* Stars,*/ Tech, Works, Footer } from '../../components'
/*import Footer from '../../components/Footer'*/
export const Initial = () => {
  return (
    <>
      <section className="relative z-0 bg-primary">
        <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </section>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Footer/>
      </section>
    </>
  )
}
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Stars, Tech, Works } from '../../components'
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
        <Feedbacks />
        <section className="relative z-0">
          <Contact />
          <Stars />
        </section>
      </section>
    </>
  )
}

import { Layout } from '../components/layouts'
import {
  Above,
  Projects,
  Services,
  Reviews,
  // Why,
  Contact
} from '../components/sections'

const HomePage = () => {
  return (
    <Layout>
      <Above />
      <Projects />
      <Services />
      <Reviews />
      {/* <Why /> */}
      <Contact />
    </Layout>
  )
}

export default HomePage

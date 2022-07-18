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
    <Layout title='▷ Miguel Armas - Desarrollador Web' home={false}>
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

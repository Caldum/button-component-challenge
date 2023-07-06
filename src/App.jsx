import { AppWrapper, Content } from './AppStyles'
import Buttons from './components/features/buttons/Buttons'
import Footer from './components/features/footer/Footer'
import Sidebar from './components/features/sidebar/Sidebar'

const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <Content>
        <Buttons />
        <Footer />
      </Content>
    </AppWrapper>
  )
}

export default App
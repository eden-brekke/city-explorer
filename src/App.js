import React from 'react'
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}
export default App;

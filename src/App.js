import React from "react";
import Header from './components/Header'
import CartContainer from './containers/CartContainer'
import MessageContainer from './containers/MessageContainer'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer';

class App extends React.Component {
  render() {
    return (
      <div>
         {/* Header  */}
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
             {/* Products  */}
              <ProductsContainer></ProductsContainer>
             {/* Message  */}
             <MessageContainer></MessageContainer>
             {/* Cart  */}
              <CartContainer></CartContainer>
          </div>
        </main>
        {/* Footer  */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CheckoutContainer from './CheckoutContainer';
import HomePage from './HomePage';
import ShopContainer from './ShopContainer';
import dummyData from '../ShopData';
// import dummyUser from '../UserData';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import ErrorPage from '../components/ErrorPage';

const randUser = {
  id: 100,
  name: "Sandra Wan",
  email: "sandra@example.com",
  isPremium: true
};

const MainContainer = () => {

  const [todaysDiscountCode, setClubDiscountCode] = useState("GOGOF")



  const [user, setUser] = useState(randUser);

  const [productList, setProductList] = useState(dummyData);
  const [basket, setBasket] = useState([]); 
  const [basketTotal, setBasketTotal] = useState(0)

  const addToBasket = (product) => {

    if( !basket.includes(product) ){
      product.quantity = 1;
      const basketCopy = [...basket, product];
      setBasket(basketCopy);
    }else{
      product.quantity += 1;
      const basketCopy = [...basket];
      setBasket(basketCopy);
    }
  }

  const removeFromBasket = (product) => {
    // Is quantity > 1
    // Yes.  decrement quanty by 1 and setBasket
    // No quantity === 1; splice object out of basket

    if(product.quantity === 1){
      console.log("DELETE as only one in basket");
      const basketCopy = [...basket];
      const index = basket.indexOf(product);
      basketCopy.splice(index, 1);
      setBasket(basketCopy);

    }else{
      // Decrement quantity
      product.quantity -= 1;
      const basketCopy = [...basket];
      setBasket(basketCopy);
    }

  }


  const calculateTotal = (basket) => {
    if(!basket) return;
    
    const total = basket.reduce( ( total, item ) =>  {
      return total + (item.price * item.quantity)
    }, 0);
    setBasketTotal(total);
  }


  const handleCheckout = () => {
    setBasket([]);
  }

  useEffect( () => {
    calculateTotal(basket);
  }, [basket]);



  return(
    <Router>

    <Header user={user} />

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route 
        path="/shop" 
        element={<ShopContainer 
          user={user} 
          basket={basket}
          basketTotal={basketTotal}
          productList={productList} 
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
        />} 
      />
      <Route path="/checkout" element={<CheckoutContainer 
        user={user} 
        basket={basket}
        basketTotal={basketTotal}
        removeFromBasket={removeFromBasket}
        handleCheckout={handleCheckout}
        />} 
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer  user={user} /> 
  </Router>
  )
}

export default MainContainer;
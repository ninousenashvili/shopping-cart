import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const products = ["Bag", "skirt", "dress", "t-shirt"];

function App() {
  const [items, setItems] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (product) => {
    setCartItems((prevCart) => {
      return [...prevCart, product];
    });
    // setCartItems([...cartItems, product]);
  };
  const handleRemove = (productIndex) => {
    const newCart = cartItems.filter((product, index) => {
      return productIndex !== index;
    });
    setCartItems(newCart);
  };
  return (
    <>
      <h1> Add products into your Cart</h1>

      {items.map((product) => {
        return (
          <>
            <Button
              onClick={() => {
                handleClick(product);
              }}
            >
              {product}
            </Button>
          </>
        );
      })}
      <h1> My Cart</h1>
      <CartContainer>
        {cartItems.map((cartItem, index) => {
          return (
            <List>
              {cartItem}
              <DeleteButton
                onClick={() => {
                  handleRemove(index);
                }}
              >
                delete
              </DeleteButton>
            </List>
          );
        })}
      </CartContainer>
    </>
  );
}

export default App;

const ButtonContainer = styled.div`
  width: 100%;
  display: Flex;
  flex-direction: row;
  gap: 30px;
  background-color: #a48080;
`;

const Button = styled.button`
  background-color: #77466b;
  color: white;
  text-align: center;
  width: 100px;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 30px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #77466b;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const List = styled.li`
  font-size: 18px;
  color: #77466b;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CartContainer = styled.ul`
  width: 400px;
  min-height: 200px;
  height: 100%;
  border: 3px solid violet;
  padding: 20px;
`;

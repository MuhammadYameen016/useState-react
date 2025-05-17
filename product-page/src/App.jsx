import { useState } from 'react'
import './App.css'

function App() {
  let desiFoodAPI = [
    {
      id: 1,
      name: "Chicken Biryani",
      category: "Rice",
      price: 300,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
    },
    {
      id: 2,
      name: "Nihari",
      category: "Curry",
      price: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eGke2YsN8tcfRy5ioPcLRGjDGCMezNAsOg&s"
    },
    {
      id: 3,
      name: "Haleem",
      category: "Curry",
      price: 250,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2xQ2kEtEqiYrOlatB7Kmhh5u0_IRBX_Htg&s"
    },
    {
      id: 4,
      name: "Chapli Kebab",
      category: "Snack",
      price: 180,
      image: "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_154637981.jpg"
    },
    {
      id: 5,
      name: "Pani Puri",
      category: "Snack",
      price: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R9MWic0uYtJIH_S09nZdHnJXjQWZ8GWU8Q&s"
    },
    {
      id: 6,
      name: "Aloo Paratha",
      category: "Breakfast",
      price: 80,
      image: "https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg"
    },
    {
      id: 7,
      name: "Mutton Karahi",
      category: "Curry",
      price: 500,
      image: "https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg"
    },
    {
      id: 8,
      name: "Seekh Kebab",
      category: "Snack",
      price: 200,
      image: "https://kfoods.com/images1/newrecipeicon/seekh-kabab_2852.jpg"
    },
    {
      id: 9,
      name: "Gulab Jamun",
      category: "Dessert",
      price: 120,
      image: "https://theartisticcook.com/wp-content/uploads/2024/10/Gulab-Jamun-with-Milk-Powder.jpg"
    },
    {
      id: 10,
      name: "Kheer",
      category: "Dessert",
      price: 150,
      image: "https://masalasecret.com/wp-content/uploads/2023/02/IMG_6142-scaled.jpg"
    }
  ]
    
  let [cart, updateCart] = useState(desiFoodAPI)
  let [button, updateButton] = useState('Load More ...')

  function load(){
    cart = [
      {
        id: 1,
        name: "Chicken Biryani",
        category: "Rice",
        price: 300,
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
      },
      {
        id: 2,
        name: "Nihari",
        category: "Curry",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eGke2YsN8tcfRy5ioPcLRGjDGCMezNAsOg&s"
      },
      {
        id: 3,
        name: "Haleem",
        category: "Curry",
        price: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2xQ2kEtEqiYrOlatB7Kmhh5u0_IRBX_Htg&s"
      },
      {
        id: 4,
        name: "Chapli Kebab",
        category: "Snack",
        price: 180,
        image: "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_154637981.jpg"
      },
      {
        id: 5,
        name: "Pani Puri",
        category: "Snack",
        price: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R9MWic0uYtJIH_S09nZdHnJXjQWZ8GWU8Q&s"
      },
      {
        id: 6,
        name: "Aloo Paratha",
        category: "Breakfast",
        price: 80,
        image: "https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg"
      },
      {
        id: 7,
        name: "Mutton Karahi",
        category: "Curry",
        price: 500,
        image: "https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg"
      },
      {
        id: 8,
        name: "Seekh Kebab",
        category: "Snack",
        price: 200,
        image: "https://kfoods.com/images1/newrecipeicon/seekh-kabab_2852.jpg"
      },
      {
        id: 9,
        name: "Gulab Jamun",
        category: "Dessert",
        price: 120,
        image: "https://theartisticcook.com/wp-content/uploads/2024/10/Gulab-Jamun-with-Milk-Powder.jpg"
      },
      {
        id: 10,
        name: "Kheer",
        category: "Dessert",
        price: 150,
        image: "https://masalasecret.com/wp-content/uploads/2023/02/IMG_6142-scaled.jpg"
      },
      {
        id: 11,
        name: "Anda Curry",
        category: "Curry",
        price: 420,
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg"
      },
      {
        id: 12,
        name: "Katakat",
        category: "meat",
        price: 550,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkfZayZZULP86XcWfvik5ktBqTREeQrxC6A&s"
      },
      {
        id: 13,
        name: "Paye",
        category: "Curry",
        price: 2120,
        image: "https://cdn-food.tribune.com.pk/gallery/tNCz9ztiO1l09O1KRGChdW8sw3JSXyzSPsoKNqTb.jpeg"
      },
      {
        id: 14,
        name: "Katakat",
        category: "meat",
        price: 550,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkfZayZZULP86XcWfvik5ktBqTREeQrxC6A&s"
      },
      ]
    updateCart(cart) 
    let button = 'Aur nahin hai bhai maal apne pas'
    updateButton(button)   
  }
  return (
    <>
    <div id='foodDiv'>
    {
        cart.map((value, index) => {
          return (
            <div key={index} id='cartBox'>
              <p><strong>Product ID:</strong> {value.id}</p>
              <p><strong>Title:</strong> {value.name}</p>
              <p><strong>Category:</strong> {value.category}</p>
              <p><strong>Price:</strong> {value.price}</p>
              <p><img src={value.image} alt='roti hai idhr' id='image'/></p>
            </div>
          )
        })
      }
      </div>
      <button onClick={load} id='button'> {button} </button>
    </>
  )
}

export default App
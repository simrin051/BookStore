import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Corporate Comedy",
    price: "222",
    rating: "3",
    categoryName: "Comedy",
    image: "https://images-na.ssl-images-amazon.com/images/I/51tGptezNyL._SX311_BO1,204,203,200_.jpg",
    quantity: 1
  },
  {
    _id: uuid(),
    title: "Roald Dahl",
    price: "566",
    rating: "2",
    categoryName: "Comedy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTQZUWmLhG3IPlVWiwQohmCiTVB-IT6jTiAuTkHUD&s"
  },
  {
    _id: uuid(),
    title: "Standup Comedy",
    price: "899",
    rating: "2",
    categoryName: "Comedy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CcsM-HhfQoqDMI_U4SP0iodYUwB9cxG1VdUia6Ee&s"
  },
  {
    _id: uuid(),
    title: "The GatsBy",
    price: "899",
    categoryName: "Fiction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHy1NTSm6u4bhO-onA1GXUKeAr7voPdkGYA&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "The tattooist",
    price: "999",
    rating: "2",
    categoryName: "Fiction",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561011770l/50980538._SX318_SY475_.jpg"
  },
  {
    _id: uuid(),
    title: "Calculating Stars",
    price: "699",
    rating: "1",
    categoryName: "Horror",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539850178l/36238876.jpg"
  },
  {
    _id: uuid(),
    title: "The Elementals Stars",
    price: "699",
    rating: "1",
    categoryName: "Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DqV4r9-_6yhiqmoXWhU0QKRzj6TWOoN4Vw&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "Stephen King",
    price: "699",
    rating: "3",
    categoryName: "Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gFJwF8snlqb7uSxhUWKATk1HzPvRfo6ZDQ&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "Memoirs of an Imaginary friend",
    price: "699",
    rating: "2",
    categoryName: "Horror",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lJibjPGJlKKMUettH9S7VntkskdsdphQ1A&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "You can win",
    price: "1000",
    rating: "3",
    categoryName: "Motivational",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yFhFOFzgyXzPlGTrUWY0jWBANWDpAxvBkg&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "Think & Grow Rich",
    price: "1000",
    rating: "4",
    categoryName: "Motivational",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXwU7SE3RxvYzagkrVuhjxB_QRZ_r_BwG0A&usqp=CAU"
  },
  {
    _id: uuid(),
    title: "Champion of Champions",
    price: "1000",
    rating: "5",
    categoryName: "Motivational",
    image: "https://images-na.ssl-images-amazon.com/images/I/51jqBzotXjL._SX325_BO1,204,203,200_.jpg"
  }

];

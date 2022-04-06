import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Corporate Comedy",
    price: "Rs 222",
    categoryName: "Comedy",
  },
  {
    _id: uuid(),
    title: "Roald Dahl",
    price: "Rs 566",
    categoryName: "Comedy",
  },
  {
    _id: uuid(),
    title: "Standup Comedy",
    price: "Rs 899",
    categoryName: "Comedy",
  },
  {
    _id: uuid(),
    title: "The GatsBy",
    price: "Rs 899",
    categoryName: "Fiction",
  },
  {
    _id: uuid(),
    title: "The tattooist",
    price: "Rs 999",
    categoryName: "Fiction",
  },
  {
    _id: uuid(),
    title: "Calculating Stars",
    price: "Rs 699",
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    title: "The Elementals Stars",
    price: "Rs 699",
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    title: "Stephen King",
    price: "Rs 699",
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    title: "Imaginary friend",
    price: "Rs 699",
    categoryName: "Horror",
  },
  {
    _id: uuid(),
    title: "You can do it",
    price: "Rs 1000",
    categoryName: "Motivational",
  },
  {
    _id: uuid(),
    title: "Think & Grow Rich",
    price: "Rs 1000",
    categoryName: "Motivational",
  },
  {
    _id: uuid(),
    title: "The Champions",
    price: "Rs 1000",
    categoryName: "Motivational",
  }

];

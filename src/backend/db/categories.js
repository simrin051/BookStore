import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcesFoiVQsb4vLMRQ3RTUURBU1S9mxmOVdQ&usqp=CAU"
  },
  {
    _id: uuid(),
    categoryName: "Motivational",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZ5Xw1Un8y50Pk8geNpa9_WK42vzLerwWyg&usqp=CAU"
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMpSf_GyZ1QxhGw8Chke5RvySIwoTxJMKtw&usqp=CAU"
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    description:
      "Meant to laugh and enjoy for both the character and readers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfBcrNZGZpsn3Ovt2NZbKloXz8hUk5-1nDA&usqp=CAU"
  }
];

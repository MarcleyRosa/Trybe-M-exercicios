export interface UserCredentials {
    email: string;
    password: string;
  }
  
  export interface IUser extends UserCredentials {
    name: string;
  }
  
  export interface User extends IUser {
    id: number;
  }

  export interface IPost {
    title: string;
    author: string;
    category: string;
    publicationDate: string;
  }

  export interface Post extends IPost {
    id: number;
  }

  export interface IProduct {
    name: string;
    brand: string;
    price: number;
    manufacturingDate: string;
    expirationDate: string;
  }
  
  export interface Product extends IProduct {
    id: number;
  }

  export interface IRestaurant {
    name: string;
    category: string;
    openingTime: string;
    closingTime: string;
  }
  
  export interface Restaurant extends IRestaurant {
    id: number;
  }
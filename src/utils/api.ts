import axios from 'axios';

const cookbookApiUrl = 'http://localhost:8081';

export type Ingredient = {
  name: string;
  amount: string;
  measurement: string;
};
export type Recipe = {
  recipeid?: string;
  title: string;
  img: string;
  instructions: string;
  ingredients: Ingredient[];
};

export default {
  getProfile: (token: string) => {
    const endpoint = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    };

    return axios.get(endpoint, request);
  },
  getRecipe: (recipeId: string) => {
    const endpoint = `${cookbookApiUrl}/recipe/${recipeId}`;
    const request = {
      method: 'GET',
      headers: {}
    };

    return axios.get(endpoint, request);
  },
  getRecipes: (tag?: string) => {
    let endpoint = `${cookbookApiUrl}/recipes`;
    if (tag && !["all", "All Categories", "Eat Again"].includes(tag)) {
      endpoint += `?tag=${tag}`;
      console.log(endpoint);
    }
    const request = {
      method: 'GET',
      headers: {}
    };

    return axios.get(endpoint, request);
  },
  putRecipe: (recipe: Recipe) => {
    const endpoint = `${cookbookApiUrl}/recipe`;
    const request = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return axios.put(endpoint, recipe, request);
  },
  getTags: () => {
    const endpoint = `${cookbookApiUrl}/tags`;
    const request = {
      method: 'GET',
      headers: {}
    };

    return axios.get(endpoint, request);
  }
};

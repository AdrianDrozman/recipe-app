import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CreateRecipe from "../components/Recipe/CreateRecipe";
import SearchRecipe from "../components/Recipe/SearchRecipe";
import RecipeList from "./Recipe/RecipeList";
import RecipeDetail from "./Recipe/RecipeDetail";
import Header from "../components/Header";

import Login from "../components/Auth/Login";
import ForgotPassword from "../components/Auth/ForgotPassword";
import useAuth from "../components/Auth/useAuth";
import firebase, { FirebaseContext } from "../firebase";

function App() {
  const user = useAuth();
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Header />

        <Switch>
          <div className="h-screen bg-gray-100">
            <div className=" mx-auto w-3/4 px-10">
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateRecipe} />

              <Route path="/search" component={SearchRecipe} />
              <Route path="/top" component={RecipeList} />
              <Route path="/new/:page" component={RecipeList} />
              <Route path="/recipe/:recipeId" component={RecipeDetail} />
            </div>
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
          </div>
        </Switch>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;

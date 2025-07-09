import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import Layout from './components/Layout';
import RecipeDetail from './pages/recipedetail';
import RecipeList from './pages/recipelist';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import Search from './pages/Search';


function App() {
  return (
    // <RecipeListProvider>
    <div className="App">
      {/* <Home /> */}
      <Router>
       
         
        <Routes>
           {/* Routes with layout and header */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recipe-listing" element={<RecipeList />} />
            <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
          </Route>

          {/* Routes without layout/header */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          
        
          {/* <Route path="/addfood" element={<AddFood />} />
          <Route path="/updatefood/:id" element={<AddFood />} />  */}
        </Routes>
       
      </Router>
      
    </div>
    // </RecipeListProvider>
  );
}

export default App;

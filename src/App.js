import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/PageNotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6aa9d8fa3a5d900d6bf59e667de57bc&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="moviebrowser/" exact>
          <Home />
        </Route>
        <Route path="moviebrowser/about" component={AboutView} />
        <Route path="moviebrowser/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

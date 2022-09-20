import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to The Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This project is part of the Udemy - The Ultimate 2022 Fullstack Web Development
							Bootcamp - React 201. It is a web page based on the <a href="https://www.themoviedb.org/"> www.themoviedb.org</a> API to create a movie search
							browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

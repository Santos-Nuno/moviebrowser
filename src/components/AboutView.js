import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              voluptates facilis expedita accusantium illo repudiandae laborum
              aspernatur architecto eos, atque soluta unde rerum id nihil sequi
              optio dolore doloremque iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

import "../styles/Home.css";
import img1 from "../../assets/img1.png";
// import Customnav from "../layout/customnavbar";
import team from "../../assets/team.jpg";
import youtube from "../../assets/youtube.png";
import opensource from "../../assets/opensource.jpg";
import TeamCard from "../utilities/TeamCard";
import Testimonials from "../utilities/Testimonials";

function Home() {
  return (
    <>
      <div className="Home" id="Home">
        <div className="parent">
          <div class="col-5 son">
            <div className="son__Para">
              <h3>
                <span>Codeflow</span>
              </h3>
              <h3> Learning must go on!</h3>
              <p>
                Codeflow is an organisatiom whose main motive is to empower
                student community by organising webinars, hackathons and open
                source events
              </p>
            </div>
          </div>
          <div class="col-7 daughter">
            <img src={img1} alt="loading" />
          </div>
        </div>
      </div>
      <div className="home__about">
        <div className="home__aboutInfo">
          <h3>
            <span>About</span> Us
          </h3>
          <p>An initiative to contribute to the Student community by providing opportunities, resources, and awareness about the possibilities in the field of software to students & professionals.</p>
        </div>
        <div className="home__aboutCards">
       <div className="home__aboutCards">
          <div className="home__aboutCard1">
            <img src={opensource} alt="thumbnail" />
            <h5>OpenSource</h5>
          </div>
          <div className="home__aboutCard1">
            <img src={team} alt="thumbnail" />
            <h5>Community building</h5>
          </div>
          <div className="home__aboutCard1">
            <img src={youtube} alt="thumbnail" />
            <h5>Events and Workshops</h5>
          </div>
        </div>
      </div>
      </div> 
     
  
    
      <Testimonials />
      <div className="home__team">
        <h3>
          <span>Core</span> Team
        </h3>
        <div className="home__teamCards">
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
          <TeamCard image={youtube} name="Abra ka dabra" position="(Unknown)" />
        </div>
        <div className="home__teamCardsContributor">
          <h3>
            <span>Top</span> Contributors
          </h3>
          <div className="home__teamCards">
            <TeamCard image={youtube} name="Abra ka dabra" />
            <TeamCard image={youtube} name="Abra ka dabra" />
            <TeamCard image={youtube} name="Abra ka dabra" />
            <TeamCard image={youtube} name="Abra ka dabra" />
            <TeamCard image={youtube} name="Abra ka dabra" />
            <TeamCard image={youtube} name="Abra ka dabra" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import img1 from "../../Assests/Images/home_page.jpg";
import img2 from "../../Assests/Images/manhole.png";
import img3 from "../../Assests/Images/manhole2.jpg";
import img4 from "../../Assests/Images/graph.png";
import img5 from "../../Assests/Images/lastmanhole.jpg";

function Home() {
  return (
    <>
      <div className="usercontainer">
        <h1 style={{ textAlign: "center" }}>Welcome to PedeProtect!</h1>
        <div style={{ textAlign: "center" }}>
          <img src={img1} alt="main" height={650} />
        </div>
        <div
          className="row"
          style={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
        >
          <div className="col-md-8">
            <h1>Pedestrians account for 50% of fatalities on city roads</h1>
            <div style={{ border: "2px solid #fece00", marginBottom: "2%" }} />
            <p>
              Pedestrians account for 50% of road accident fatalities in Mumbai
              over the past five years, according to data from the Mumbai
              Traffic Police. Experts attribute the high number of pedestrian
              deaths to obstructions on footpaths, forcing pedestrians to walk
              on the roads and cross at unmarked crossings. A recent report
              suggests installing pedestrian walkways, zebra crossings, and
              advance warning signs to improve pedestrian safety. Steps have
              already been taken to penalize helmetless riders, pillion riders,
              and drunk drivers.
            </p>
            <p>
              In Maharashtra, 2,894 pedestrians were killed out of the total
              7,232 deaths recorded in 6,764 road accidents in the year 2022.
            </p>
            <div style={{ border: "2px solid #fece00", marginBottom: "2%" }} />

            <p style={{ display: "flex" }}>
              <div style={{ display: "contents" }}>
                <img src={img2} height={236} width={300} alt="img2" />
              </div>
              <span style={{ marginLeft: "1%" }} />
              Experts believe that pedestrians are forced to walk on roads and
              cross at unmarked crossings posing a threat to them. “It is not
              that there are no footpaths in the city but there are so many
              obstructions on footpaths and the pedestrians prefer continuous
              stretch, forcing them to share the same road space as a vehicle
              making their life depend on the judgement of the driver,” said a
              traffic expert. During monsoon as the side strips of footpaths are
              often waterlogged, it makes it even more difficult for pedestrians
              to walk on the footpath which increases the risk of contact with
              speeding vehicles, he added.
            </p>

            <p>
              A recent report on speed observations, “slow down,” by a
              non-governmental organisation United Way along with the Mumbai
              traffic police and transport department, as the side strips of
              footpaths are often waterlogged, it makes it even more difficult
              for pedestrians to walk on the footpath, increasing, observed that
              pedestrians walked on the carriageway instead of the footpaths at
              several locations, as the footpaths were encroached upon.
              “Pedestrian walkways, zebra crossing markings and controlled
              pedestrian walkways must be installed with advance warning signs,”
              was one of the solutions suggested by United Way.
            </p>
            <div style={{ border: "2px solid #fece00", marginBottom: "2%" }} />

            <p style={{ display: "flex", marginRight: "1%" }}>
              “If one is walking, then for several reasons, including safety,
              they will always prefer to walk along a path that is ostensibly
              continuous. Unfortunately, when only a carriageway offers that
              continuity, it puts them at direct risk of a crash. This is a
              common scenario in Mumbai; therefore, pedestrians are the most
              vulnerable to road accidents. Mumbai streets have to be designed
              for pedestrians. Alongside saving lives, it will improve vehicular
              efficiency too,” said Dhawal Ashar, senior manager with the
              Integrated Transport team at the World Resources Institute (WRI).
              <div style={{ display: "contents" }}>
                <img src={img3} height={170} width={300} alt="img2" />
              </div>
            </p>
          </div>
          <div className="col-md-4" style={{ background: "#fece00" }}>
            <div style={{ marginTop: "2%" }}>
              <img src={img4} alt="img4" width={370} />
              <div style={{ marginTop: "2%" }}>
                <p>
                  MUMBAI: Pedestrians continue to be the most vulnerable to road
                  accidents in the city with data released by the Mumbai Traffic
                  Police revealing that walkers accounted for 50% of fatalities
                  on the city roads in the last five years.
                </p>
                <p>
                  According to police, in 2022, at least 272 people lost their
                  lives in road crashes across the city. The victims included
                  136 pedestrians. Traffic police officers said that although
                  the overall number of fatalities in road accidents has
                  decreased compared to previous years, the percentage of
                  pedestrians dying in these accidents remains high.
                </p>
                <p>
                  Traffic police officials said that in Mumbai 364 people had
                  died in 2021 in road crashes which included 44% of pedestrians
                  and 35% of two-wheeler riders after which steps like
                  penalising helmetless riders and pillion riders and imposing
                  seat belts were taken. “Every month at least 8,000 speeding
                  violations are recorded by traffic police. At least 242 drunk
                  drivers were penalised in the past three months after the use
                  of breath analysers was permitted after Covid restrictions
                  were lifted,” said a traffic police officer.
                </p>
              </div>
              <img src={img5} alt="img5`" width={370} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

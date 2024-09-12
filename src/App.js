import "./App.css";
import { useRef, useState } from "react";

// imported images/icons ====>
import questionomark from "./Assets/questionomark.png";
import plus from "./Assets/plus.png";
import rectangleimage from "./Assets/rectangleimage.png";
import leftarrow from "./Assets/leftarrow.png";
import rightarrow from "./Assets/rightarrow.png";
import image from "./Assets/image.jpg";

function App() {
  const [selectedTab, setSelectedTab] = useState("firsttab");

  const onTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const carouselContainer = useRef();
  const handleClick = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth / 3.18
        : container.scrollLeft + container.offsetWidth / 3.18;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="all">
          <div className="leftDiv"></div>
          <div className="rightDivs">
            <div className="rightUpDiv">
              <div className="left">
                <img src={questionomark} className="upicon" alt="" />
                <img src={rectangleimage} className="squareicon" alt="" />
              </div>
              <div className="mainContainer">
                <div className="upDivFrame">
                  <span className={`${selectedTab}`}></span>
                  <span
                    className={`upframebuttons ${
                      selectedTab !== "firsttab" && "notselected"
                    }`}
                    onClick={() => onTabChange("firsttab")}
                  >
                    About Me
                  </span>
                  <span
                    className={`upframebuttons ${
                      selectedTab !== "secondtab" && "notselected"
                    }`}
                    onClick={() => onTabChange("secondtab")}
                  >
                    Experiences
                  </span>
                  <span
                    className={`upframebuttons ${
                      selectedTab !== "thirdtab" && "notselected"
                    }`}
                    onClick={() => onTabChange("thirdtab")}
                  >
                    Recommended
                  </span>
                </div>
                <div className="upText">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been working at this awesome company for 3 years now.
                  <br />
                  <br />
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a.Hello! I’m Dave, your sales rep here from
                  Salesforce. I’ve been working at this awesome company for 3
                  years now.
                  <br />
                  <br />
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a.Hello! I’m Dave, your sales rep here from
                  Salesforce. I’ve been working at this awesome company for 3
                  years now.
                  <br />
                  <br />
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a.Hello! I’m Dave, your sales rep here from
                  Salesforce. I’ve been working at this awesome company for 3
                  years now.
                  <br />
                  <br />
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a.Hello! I’m Dave, your sales rep here from
                  Salesforce. I’ve been working at this awesome company for 3
                  years now.
                  <br />
                  <br />I was born and raised in Albany, NY& have been living in
                  Santa Carla for the past 10 years my wife Tiffany and my 4
                  year old twin daughters- Emma and Ella. Both of them are just
                  starting school, so my calender is usually blocked between
                  9-10 AM. This is a.
                </div>
              </div>
            </div>
            <div className="line"></div>

            <div className="rightDownDiv">
              <div className="left">
                <img src={questionomark} className="upicon" alt="" />
                <img src={rectangleimage} className="squareicon" alt="" />
              </div>
              <div className="mainContainer">
                <div className="downDivFrame">
                  <span className="gallerybtn">Gallery</span>
                  <div className="downbuttons">
                    <label className="label">
                      <input type="file" className="hidden" />
                      <div className="addimage">
                        <img src={plus} className="plus" alt="" />
                        ADD IMAGE
                      </div>
                    </label>
                    <div className="arrowbuttons">
                      <img
                        src={leftarrow}
                        onClick={() => handleClick("left")}
                        className="arrow"
                        alt=""
                      />
                      <img
                        src={rightarrow}
                        onClick={() => handleClick("right")}
                        className="arrow"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div ref={carouselContainer} className="imagesframe">
                  <img src={image} className="images" alt="" />
                  <img src={image} className="images" alt="" />
                  <img src={image} className="images" alt="" />
                  <img src={image} className="images" alt="" />
                  <img src={image} className="images" alt="" />
                </div>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

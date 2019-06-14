import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import fhhome from "./images/fhhome.png";
import echome from "./images/echome.png";
import js from "./images/js.png";
import html from "./images/html.png";
import css from "./images/css.jpg";
import sql from "./images/sql.png";
import node from "./images/node.jpg";
import react from "./images/react.png";
import ruby from "./images/ruby.png";
import python from "./images/python.png";
import java from "./images/java.png";
import thomas from "./images/ThomasPerez.jpg";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="videoloop">
          <video className="videoloop2" autoPlay loop muted>
            <source
              className="video"
              src="https://video.wixstatic.com/video/11062b_3e2f37c297534f9ead156265242fbca8/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mainSection">
          <div className="navBox">
            <div className="nav">
              <AnchorLink href="#mywork">MyWork</AnchorLink>
              <AnchorLink href="#skills">Skills</AnchorLink>
              <AnchorLink href="#currenltylearning">
                Currenlty Learning
              </AnchorLink>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </div>
          </div>
          <div className="bioBox">
            <div className="bio">
              <div className="bioHead">
                <h1>Thomas Perez</h1>
                <h3 className="full">Full Stack Web Developer</h3>
              </div>
              <p>
                I was born and raised in East New York Brooklyn. Ever since I
                was a child I always had a passion for computers, so much so
                that I taught myself how to take them apart and rebuild them up
                from scratch. After dropping out of college in order to work, I
                found myself in many dead end jobs. Thats when a friend of mine
                introduced me to coding.
              </p>
              <p>
                I joined Pursuit a 10-month fellowship to hone my skills in
                JavaScript, HTML5, CSS3, PostgresSQL, Node, and React. It was a
                tough journey but I can honestly say it was the best decision I
                made thus far in my life.
              </p>
              <p>
                With these new skills I plan to create a better future for my
                family and make apps that can help my community. Show everyone
                that anything is possible if you just put your mind to it.
              </p>
            </div>
          </div>
          <div className="bioPic">
            <img src={thomas} alt="" height="333px" width="320px" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mywork">
          <section id="mywork">
            <h2>My Work</h2>
            <div className="work">
              <img className="fhhome" src={fhhome} alt="" />
              <br />
              <br />
              <br />
              <img className="echome" src={echome} alt="" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="fhome">
                <h3>-Furever Home</h3>
                <p>
                  Furever Home is a web application that makes the adoption
                  process easier. Users can navigate through multiple shelters
                  and see all the animals ready for adoption. Users can
                  also fill out pre-approval forms that will be reviewed and
                  sent directly to the corresponding shelters. What makes
                  Furever Home unique is its community. Users can connect with
                  other pet owners and share their experiences and tips of
                  adopting. 
                </p>
                <a href="https://github.com/Jevit01/furever-home">Code</a> or{" "}
                <a href="http://capstone-furever-home.herokuapp.com/">Live</a>
              </div>
              <div className="ec">
                <h3>-Ear Candy</h3>
                <p>
                  EarCandy is a music review web application. This app allows
                  users to add a list of their favorite songs to be critiqued by
                  others. Users can search through songs by popularity or genre.
                  If they happen to like the song they can add it to their
                  favorites list that will show on their profile page.
                </p>
                <a href="https://github.com/Jevit01/EarCandy">Code</a> or{" "}
                <a href="http://ear-candy.herokuapp.com/">Live</a>
              </div>
            </div>
          </section>
        </div>
        <div className="skills">
          <section id="skills">
            <h2>Skills</h2>
            <div className="skill">
              <img
                className="js"
                src={js}
                alt=""
                height="209px"
                width="156px"
              />
              <img
                className="html"
                src={html}
                alt=""
                height="191px"
                width="191px"
              />
              <img
                className="css"
                src={css}
                alt=""
                height="191px"
                width="137px"
              />
              <img
                className="node"
                src={node}
                alt=""
                height="200px"
                width="191px"
              />
              <img
                className="sql"
                src={sql}
                alt=""
                height="204px"
                width="198px"
              />
              <img
                className="react"
                src={react}
                alt=""
                height="204px"
                width="204px"
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>
        <div className="current">
          <section id="currenltylearning">
            <h2>Currenlty Learning</h2>
            <div className="learning">
              <img
                className="ruby"
                src={ruby}
                alt=""
                height="200px"
                width="150px"
              />
              <img
                className="java"
                src={java}
                alt=""
                height="200px"
                width="150px"
              />
              <img
                className="python"
                src={python}
                alt=""
                height="200px"
                width="150px"
              />
            </div>
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>
        <div className="contact">
          <section id="contact">
            <h2>Contact Me!</h2>
          </section>
        </div>
        <ScrollUpButton EasingType="linear" />
      </div>
    );
  }
}

export default Home;

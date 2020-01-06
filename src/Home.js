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
import paper from "./images/paper.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import ho from "./images/ho.png";
import resume from "./resume/resume.pdf";
import ScrollUpButton from "react-scroll-up-button";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="videoloop">
          <video className="videoloop2" playsinline autoPlay loop muted>
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
            <img src={thomas} alt="" className="proPic" />
          </div>
          <div className="socialLinks">
            <a href="https://github.com/Jevit01">
              <img className="git" src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/thomas-i-perez/">
              <img className="in" src={linkedin} alt="" />
            </a>
            <a href={resume}>
              <img className="resume" src={paper} alt="" />
            </a>
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
        <div className="mywork">
          <section id="mywork">
            <br />
            <div className="work">
              <div className="w">
                <h2>My Work</h2>
              </div>
              <br />
              <img className="fhhome" src={fhhome} alt="" />
              <br />
              <img className="ho" src={ho} alt="" />
              <br />
              <img className="echome" src={echome} alt="" />
              <br />
              <div className="fhbox">
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
                  <div className="links">
                    <a
                      className="alink"
                      href="https://github.com/Jevit01/furever-home"
                    >
                      Code
                    </a>
                    <p className="or"> || </p>{" "}
                    <a
                      className="alink"
                      href="http://capstone-furever-home.herokuapp.com/"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="hobox">
                <div className="hod">
                  <h3>-Hidden Objects</h3>
                  <p>
                    Hidden Objects is a puzzle web application. The objective of
                    the game is to find all hidden items given in the word bank
                    within the time limit. If time runs out you will have to
                    restart from level 1. the higher the level the shorter the
                    time.
                  </p>
                  <div className="links">
                    <a
                      className="alink"
                      href="https://github.com/Jevit01/hiddenobjects"
                    >
                      Code{" "}
                    </a>
                    <p className="or"> || </p>{" "}
                    <a
                      className="alink"
                      href="https://jevit01.github.io/hiddenobjects/"
                    >
                      {" "}
                      Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="ecbox">
                <div className="ec">
                  <h3>-Ear Candy</h3>
                  <p>
                    EarCandy is a music review web application. This app allows
                    users to add a list of their favorite songs to be critiqued
                    by others. Users can search through songs by popularity or
                    genre. If they happen to like the song they can add it to
                    their favorites list that will show on their profile page.
                  </p>
                  <div className="links">
                    <a
                      className="alink"
                      href="https://github.com/Jevit01/EarCandy"
                    >
                      Code{" "}
                    </a>
                    <p className="or"> || </p>{" "}
                    <a className="alink" href="http://ear-candy.herokuapp.com/">
                      {" "}
                      Live
                    </a>
                  </div>
                </div>
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>
        <br />
        <div className="skills">
          <br />
          <section id="skills">
            <div className="skill">
              <div className="sk">
                <h2>Skills</h2>
              </div>
              <br />
              <img className="js" src={js} alt="" />
              <img className="html" src={html} alt="" />
              <img className="css" src={css} alt="" />
              <img className="node" src={node} alt="" />
              <img className="sql" src={sql} alt="" />
              <img className="react" src={react} alt="" />
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
        <br />
        <div className="current">
          <section id="currenltylearning">
            <br />
            <div className="learning">
              <div className="cl">
                <h2>Currenlty Learning</h2>
              </div>
              <br />
              <img className="ruby" src={ruby} alt="" />
              <img className="java" src={java} alt="" />
              <img className="python" src={python} alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />
          </section>
        </div>
        <br />
        <div className="contact">
          <section id="contact">
            <br />
            <div className="contactgrid">
              <div className="cme">
                <h2>Contact Me!</h2>
                <h3 id="emailadd">ThomasPerez@pursuit.org</h3>
              </div>
              <br />
              <div className="formBox">
                <form
                  className="form"
                  method="POST"
                  action="https://formspree.io/thomasperez@pursuit.org"
                >
                  <input
                    className="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                  />
                  <br />
                  <textarea
                    className="text"
                    name="message"
                    placeholder="Your Message"
                  />
                  <button className="submit" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <br />
            <br />
            <br />
          </section>

          <br />
          <br />
          <br />
          <br />
        </div>
        <ScrollUpButton EasingType="linear" />
      </div>
    );
  }
}

export default Home;

import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h3>
          Date: <p>05/29/25-06/01/24</p>
        </h3>
        <h3>
          Game Guarantee: <p>4 Games</p>
        </h3>
        <h3>
          Tournament Format: <p>3 pool play games, followed by bracket play.</p>
        </h3>
        <h3>
          Expected Number of Teams: <p>30+ Teams</p>
        </h3>
        <h3>
          Expected Start Times: <p>Games will start Thursday evening</p>
        </h3>

        <h3>The event is for the following ages:</h3>
        <ul>
          <li>9u (Open/AA/A) - 46' mound, 65' bases</li>
          <li>10u (Open/AA/A) - 46' mound, 65' bases</li>
          <li>11u (Open/AA/A) - 50' mound, 70' bases</li>
          <li>12u (Open/AA/A) - 50' mound, 70' bases</li>
          <li>13u (Open/AA/A) - 54' mound, 80' bases</li>
          <li>14u (Open/AA/A) - 60' mound, 90' bases</li>
        </ul>
        <br />
        <h3>Cost:</h3>
        <ul>
          <li>9u-10u: $550</li>
          <li>11u-12u: $600</li>
          <li>13u-14u: $650</li>
        </ul>
        <br />
        <h3>
          Location:{" "}
          <p>Indian Boundry Park 990 West Boughton Rd Bolingbrook, IL 60440</p>
        </h3>
      </div>
      <div className="about-right">
        <img className="about-img" src={about_img} alt="" />
        <p>
          JP Sports tournament management will strive to make this tournament
          the best of your season. If questions or disputes arise about policies
          or procedures, coaches shall bring them to attention of the Tournament
          Director and/or JP Sports Director of Operations, Heath Smith. Any
          interpretation and decision of the Tournament Director and/or Director
          of Operations shall be final.
        </p>

        <p>
          Please check-in 45 minutes prior to your first game. Documents for
          check-in can be found at the bottom of this document. All coaches at
          TBK must go through the Main North Gate to get their wristband for
          coaching for the weekend. Teams failing to check-in are subject to
          forfeiting all games until properly checking in.
        </p>

        <p>
          JP Sports will provide an Official Representative of JP Sports for
          each tournament location. The representative shall be either the
          Director of Operations, Tournament Director or Site Director.
        </p>

        <p>
          Official brackets and game times are posted on our website
          (www.playjpsports.com) and the JP Sports App. JP Sports will use the
          JP Sports App for posting tournament schedules, scores and weather
          updates. It’s highly recommended that coaches share the JP Sports App
          link with their team’s players, parents and fans.
        </p>

        <p>
          Any tournament fee’s that are paid at check-in will be assessed a
          $50.00 late charge fee and promotional discounts shall not apply.
        </p>

        <p>
          Team and Individual awards for 1st and 2nd place. Some events may have
          additional awards. In the event of rain and cancellations, awards are
          only awarded if Championship Game teams have been established. Awards
          are only awarded at the park. Under no circumstances will awards be
          shipped.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;

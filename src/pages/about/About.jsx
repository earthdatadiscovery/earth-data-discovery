import React from "react";
import styled from "@emotion/styled";
import HomeHeader from "./../../components/homeHeader/HomeHeader";

export default function About() {
  return (
    <WrapperHome>
      <HomeHeader>
        <MainTitle>About Earth Data Discovery</MainTitle>
      </HomeHeader>
      <div style={{ display: "flex" }}>
        <div
          id="content-wrapper"
          style={{ textAlign: "justify", width: "50%", margin: "0 auto" }}
        >
          <p align="center">
            <img
              src={require("./../../assets/edd-logo-black.png")}
              alt="Earth Data Discovery"
              width="440"
              height="270"
            />
          </p>

          <h1 align="center">EARTH DATA DISCOVERY</h1>

          <p align="center">
            This is our life demo for the{" "}
            <a href="https://earthdatadiscovery.co/" target="_blank">
              Earth Data Discovery Project
            </a>
          </p>

          <h2 align="center">The Project</h2>

          <p>
            This repository is part of a project created by the{" "}
            <a
              href="https://2020.spaceappschallenge.org/challenges/connect/data-discovery-earth-science/teams/edd/members"
              target="_blank"
            >
              Earth Data Discovery Team
            </a>{" "}
            for the{" "}
            <a href="https://2020.spaceappschallenge.org" target="_blank">
              2020 Space Apps Challenge
            </a>
            .
          </p>

          <h2 align="center">The Challenge</h2>

          <p>
            Our team decided to address the{" "}
            <a
              href="https://2020.spaceappschallenge.org/challenges/connect/data-discovery-earth-science/details"
              target="_blank"
            >
              Data Discovery for Earth Science
            </a>{" "}
            Challenge:
          </p>

          <div class="text-citation">
            This challenge will ask you to devise a tool or technique to guide
            users to relevant datasets to study specific events.
          </div>

          <h2 align="center">The Team</h2>

          <div align="center">
            <a href="https://github.com/nicolasvienot" target="_blank">
              <div className="team-user">
                <div className="team-user-img">
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/nicolasvienot.jpg")}
                  />
                </div>
                <div className="team-user-name">Nicolas Vienot</div>
              </div>
            </a>

            <a href="https://github.com/eskombro" target="_blank">
              <div className="team-user">
                <div className="team-user-img">
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/eskombro.png")}
                  />
                </div>
                <div className="team-user-name">Samuel Jimenez</div>
              </div>
            </a>

            <a href="https://github.com/MartialBlot" target="_blank">
              <div className="team-user">
                <div className="team-user-img">
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/martialblot.jpg")}
                  />
                </div>
                <div className="team-user-name">Martial Blot</div>
              </div>
            </a>
          </div>

          <p>
            The goal of our project is to make Earth Science Data easily
            accessible for everyone. We think that finding a database for any
            project should be a simple, fast and straight forward process, that
            doesn't require lots of expertise or previous knowledge. In order to
            reach this goal, we provide a search and visualization interface,
            providing information about publicly available databases from the
            main Space Agencies over the world. Our main goals:
          </p>

          <ul>
            <li>
              Provide an instant, relevant and typo tolerant search engine for
              Earth Science datasets.
            </li>
            <li>
              Provide an intuitive, simple yet rich interface for finding the
              dataset that fit your needs.
            </li>
          </ul>
        </div>
      </div>
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.h1`
  color: white;
  text-align: center;
`;

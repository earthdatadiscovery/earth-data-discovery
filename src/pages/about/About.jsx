import React from "react";
import styled from "@emotion/styled";
import HomeHeader from "./../../components/homeHeader/HomeHeader";

export default function About() {
  return (
    <WrapperAbout>
      <HomeHeader about={true}>
        <HeaderImage
          src={require("../../assets/logo_edd.png")}
          alt="doc_image"
        />
      </HomeHeader>
      <div style={{ display: "flex" }}>
        <div
          id="content-wrapper"
          style={{ textAlign: "justify", width: "50%", margin: "0 auto" }}
        >
          <p align="center">
            <EddImage
              src={require("./../../assets/edd-logo-black.png")}
              alt="Earth Data Discovery"
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

          <p align="center">
            This prototype is part of a project created by the{" "}
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

          <p align="center">
            Our team decided to address the{" "}
            <a
              href="https://2020.spaceappschallenge.org/challenges/connect/data-discovery-earth-science/details"
              target="_blank"
            >
              Data Discovery for Earth Science
            </a>{" "}
            Challenge:
          </p>

          <div className="text-citation" align="center">
            This challenge will ask you to devise a tool or technique to guide
            users to relevant datasets to study specific events.
          </div>

          <h2 align="center">The Team</h2>
          <WrapperTeam>
            <a href="https://github.com/nicolasvienot" target="_blank">
              <div className="team-user">
                <WrapperTeamImage>
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/nicolasvienot.jpg")}
                  />
                </WrapperTeamImage>
                <TeamMemberName>Nicolas Vienot</TeamMemberName>
              </div>
            </a>

            <a href="https://github.com/eskombro" target="_blank">
              <div className="team-user">
                <WrapperTeamImage>
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/eskombro.png")}
                  />
                </WrapperTeamImage>
                <TeamMemberName>Samuel Jimenez</TeamMemberName>
              </div>
            </a>

            <a href="https://github.com/MartialBlot" target="_blank">
              <div className="team-user">
                <WrapperTeamImage>
                  <img
                    style={{ width: "150px" }}
                    src={require("./../../assets/martialblot.jpg")}
                  />
                </WrapperTeamImage>
                <TeamMemberName>Martial Blot</TeamMemberName>
              </div>
            </a>
          </WrapperTeam>
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
    </WrapperAbout>
  );
}

const TeamMemberName = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const WrapperTeamImage = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

const EddImage = styled.img`
  width: 440px;
  height: 270px;
  @media screen and (max-width: 760px) {
    width: 100%;
    height: unset;
  }
`;

const WrapperAbout = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 760px) {
    overflow: unset;
  }
  color: #3c4c56;
`;

const WrapperTeam = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const HeaderImage = styled.img`
  height: 10vw;
  position: relative;
  @media screen and (max-width: 760px) {
    height: 100px;
  }
`;

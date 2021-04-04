import React from "react";
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <h1>Test task for JazzTeam</h1>

            <div>Project demo here: <a href="https://vladstepway-jazzteam-test-task.netlify.app/"
                                       target="_blank" rel="noreferrer">Demo</a></div>

            <div className={'status'}>
                <a href="https://app.netlify.com/sites/vladstepway-jazzteam-test-task/deploys"
                   target="_blank"
                   rel="noreferrer">
                    <img
                        src="https://api.netlify.com/api/v1/badges/8486695d-025e-4ab8-a012-681a2cfa22b8/deploy-status"
                        alt=""/>
                </a>
            </div>
            <h2>How to start</h2>
            <p>In the project directory, you can run:</p>
            <span>npm install</span>
            <p>Then, to start the project use:</p>
            <span>npm start</span>
            <h2>Routes:</h2>
            <span>/login</span>

            <p>Authorization credentials from <span>public/credentials.json</span>:</p>
            <p>username: <span>Admin</span></p>
            <p>password: <span>12345678</span></p>
            <span>/profile</span>
            <p> Information about user</p>
            <span>/info</span>
            <p>Table of data from <span>public/data.json</span></p>
            <ul className={"list"}>
                <li>Authorize for before table access</li>
                <li>Table has fixed headers and first column with horizontal and vertical scroll</li>
                <li>You can sort data by clicking on table headers</li>
                <li>You can edit cells by double clicking and click out of the cell to finish editing</li>
                <li>You can click on rows to select them</li>
            </ul>
            <h2>Technologies stack</h2>
            <ul className={'list'}>
                <li>React</li>
                <li>Redux: <span>redux, reduxjs/toolkit, react-redux, redux-thunk</span></li>
                <li>Form: <span>react-form-hook</span></li>
                <li>Fetching: <span>axios</span></li>
                <li>Styles: <span>css3</span></li>
            </ul>
        </div>
    );
}

import React from 'react'
import Bootstrap from '../logos/bootstrap.png'
// import Bulma from '../logos/bulma.png'
import Css from '../logos/css.png'
import Django from '../logos/django.png'
import Express from '../logos/express.png'
import Github from '../logos/github.png'
import Html from '../logos/html.png'
import JS from '../logos/javascript.png'
import Mongo from '../logos/mongodb.png'
import Mongoose from '../logos/mongoose.png'
import Node from '../logos/node-js.png'
import Post from '../logos/postgresql.png'
import Python from '../logos/python.png'
import Reactlogo from '../logos/react.png'
import Sass from '../logos/sass.png'
import NPM from '../logos/npm.png'
import Yarn from '../logos/yarn.png'
import Git from '../logos/git.png'

const Skills = () => {
  return (
    <>
      <hr></hr>
      <div className="col-9 mx-3uto container">
        <h5 className="text-center fw-bold">Languages, frameworks and services that I use during my work.</h5>
        <br></br>
        <div className="row row-cols-3 row-cols-sm-4 row-cols-md-6 row-cols-lg-8 g-5">
          <div className="col">
            <img src={Bootstrap} className="card-img-top image-fluid" alt="Bootstrap" />
          </div>
          <div className="col">
            <img src={Git} className="card-img-top image-fluid" alt="Git" />
          </div>
          <div className="col">
            <img src={Css} className="card-img-top image-fluid" alt="CSS" />
          </div>
          <div className="col">
            <img src={Django} className="card-img-top image-fluid" alt="Django" />
          </div>
          <div className="col">
            <img src={Express} className="card-img-top image-fluid" alt="Express" />
          </div>
          <div className="col">
            <img src={Github} className="card-img-top image-fluid" alt="GitHub" />
          </div>
          <div className="col">
            <img src={Html} className="card-img-top image-fluid" alt="HTML" />
          </div>
          <div className="col">
            <img src={JS} className="card-img-top image-fluid" alt="JavaScript" />
          </div>
          <div className="col">
            <img src={Mongo} className="card-img-top image-fluid" alt="MongoDB" />
          </div>
          <div className="col">
            <img src={Mongoose} className="card-img-top image-fluid" alt="Mongoose" />
          </div>
          <div className="col">
            <img src={Node} className="card-img-top image-fluid" alt="Node-js" />
          </div>
          <div className="col">
            <img src={Post} className="card-img-top image-fluid" alt="PostgreSQL" />
          </div>
          <div className="col">
            <img src={Python} className="card-img-top image-fluid" alt="Python" />
          </div>
          <div className="col">
            <img src={Reactlogo} className="card-img-top image-fluid" alt="React" />
          </div>
          <div className="col">
            <img src={Sass} className="card-img-top image-fluid" alt="SASS" />
          </div>
          <div className="col">
            <img src={NPM} className="card-img-top image-fluid" alt="NPM" />
          </div>
          <div className="col">
            <img src={Yarn} className="card-img-top image-fluid" alt="Yarn" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills

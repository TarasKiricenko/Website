import React from 'react'
import MyWorkMap from './myworkmap'

const Footer = () => {

  return (
    <>
      <MyWorkMap />
      <div className="col-9 mx-auto container" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="d-grid col-5 mx-auto me-3 ms-3 mt-3 purple">
          <button className="btn disabled" type="button">Eligible to work</button>
        </div>
        <div className="d-grid col-5 mx-auto me-3 ms-3 mt-3 green">
          <button className="btn disabled" type="button">Interested</button>
        </div>
      </div>
      <hr></hr>
      <div className="col-9 mx-auto container text-center mt-0">
        <p>Taras Kiricenko, 2021. Build with React and Bootstrap. </p>
      </div>
    </>
  )
}

export default Footer
import React from 'react'
import Video from '../assets/video.mp4'
import Videocat from '../assets/videocat.mov'

const Tree = () => {
  return (
    <>
      <hr></hr>
      <div className="col-9 mx-auto container">
        <div className="row container">
          <div className="col-md-6 text-center align-text-middle pt-5 border-end border-2 hidethis" id="right">
            I also love my pet, his name is Syoma, and he likes things that cats should not like at all. Burmese male cat, his favourite toy is a sock tied with packing tape.
          </div>
          <video loop muted controls className="col-md-6">
            <source src={Videocat} style={{ height: "300px !important" }} type="video/mp4" />
          </video>
          <p className="text-center" id="under" style={{ display: "none" }}>I also love my pet, his name is Syoma, and he likes things that cats should not like at all. Burmese male cat, his favourite toy is a sock tied with packing tape.</p>
        </div>
      </div>
      <div className="col-9 mx-auto container">
        <div className="row container">
          <video loop muted controls className="col-md-6 border-end border-2 pt-4" id="right">
            <source src={Video} type="video/mp4" />
          </video>
          <div className="col-md-6 text-center align-text-middle mt-5 pt-4" id="underunder">
            Something I was doing before restart of my career. Great fun, exciting times! I am wondering, if shaking 10 cocktails simultaneously counts as multitasking?
          </div>
        </div>
      </div>
    </>
  )
}

export default Tree

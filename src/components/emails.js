import React from 'react'
import { useState } from 'react'
import { send } from 'emailjs-com'
import { init } from 'emailjs-com'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Emails = () => {

  const notify = () => toast.success("You have successfully sent me a message!")

  init("user_o8cahSWeMyNxoyXIYddSp")

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Taras',
    message: '',
    reply_to: '',
  })

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_6qili2l',
      'template_if90ufv',
      toSend,
      'user_o8cahSWeMyNxoyXIYddSp'
    )
      .then((response) => {
        console.log(response.status, response.text)
        setToSend({
          from_name: '',
          to_name: 'Taras',
          message: '',
          reply_to: '',
        })
        notify()
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value })
  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <hr className="mt-3"></hr>
      <form onSubmit={onSubmit}>
        <div className="d-grid gap-2 col-8 mx-auto">
          <h5 className="text-center fw-bold">Would you like to get in touch directly? Send me an Email!</h5>
        </div>
        <div className="d-grid gap-2 col-9 mx-auto">
          <label htmlFor="FormControlInput1" className="form-label">Your name:</label>
          <input
            type="text"
            name="from_name"
            className="form-control"
            id="FormControlInput1"
            placeholder="Enter your name"
            value={toSend.from_name}
            onChange={handleChange}
            required />
        </div>
        <div className="d-grid gap-2 col-9 mx-auto mt-3">
          <label htmlFor="FormControlInput2" className="form-label">Your email address, so I know where to reply:</label>
          <input
            type="email"
            name="reply_to"
            className="form-control"
            id="FormControlInput2"
            placeholder="name@example.com"
            value={toSend.reply_to}
            onChange={handleChange}
            required />
        </div>
        <div className="d-grid gap-2 col-9 mx-auto mt-3">
          <label htmlFor="FormControlTextarea" className="form-label">Place for your message:</label>
          <textarea
            type="text"
            name="message"
            className="form-control emailmessage"
            id="FormControlTextarea"
            placeholder="Your message"
            value={toSend.message}
            rows="4"
            onChange={handleChange}
            required></textarea>
        </div>
        <div className="d-grid gap col-7 mt-3 mx-auto" id="toastId">
          <button className="btn btn-secondary" type="submit">Send email</button>
        </div>
      </form>
      <hr className="mb-0"></hr>
      
    </>
  )

}

export default Emails
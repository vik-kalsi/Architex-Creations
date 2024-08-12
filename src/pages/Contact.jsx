import React from 'react'

function Contact() {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input id='fullName' type="text" className="grow" placeholder="Enter your full name" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        Email
        <input id='email' type="text" className="grow" placeholder="Email Address" />
      </label>

      <textarea
        id='message'
        placeholder="Enter Message"
        className="textarea textarea-bordered textarea-sm w-full max-w-xs">
      </textarea>
      <button className="btn btn-outline btn-success">Submit</button>
    </>
  )
}

export default Contact
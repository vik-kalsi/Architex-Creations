import React from 'react'

function Contact() {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Enter your full name" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="Email Address" />
      </label>

      <textarea
        placeholder="Enter Message"
        className="textarea textarea-bordered textarea-sm w-full max-w-xs">
      </textarea>
      <button className="btn btn-outline btn-success">Submit</button>
    </>
  )
}

export default Contact
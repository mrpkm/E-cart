import React, { useEffect, useState } from 'react'

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user-info", JSON.stringify({ name, email, password }))
    console.log(name, email, password)
  }

  return (
    <>
      <div className="sign">
        <h1>Regisger </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='write you name' />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input setEmail onChange={(e) => setEmail(e.target.value)} type="eamil" placeholder='write you email' />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder='write you password' />
          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
import React from 'react'
import '../Assets/Sign.scss'

function SignIn() {
    return (
        <>
            <div className="sign">
                <h1>contunue to sign in</h1>
                <form action="">
                    <div>
                        <label htmlFor="">email</label>
                        <input type="eamil" placeholder='write you email' />
                    </div>
                    <div>
                        <label htmlFor="">password</label>
                        <input type="password" placeholder='write you password' />
                    </div>
                    <div>
                        <button>sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn
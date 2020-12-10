import React, { useRef } from "react"
import "./Login.css"

export const Register = (props) => {
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const adminPassword = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const conflictDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value && adminPassword.current.value === "5678") {
            existingUserCheck()
                .then((userExists) => {
                    if (!userExists) {
                        fetch("http://localhost:8088/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email.current.value,
                                password: password.current.value,
                                name: `${userName.current.value}`,
                                userTypeId: 1
                            })
                        })
                            .then(_ => _.json())
                            .then(createdUser => {
                                if (createdUser.hasOwnProperty("id")) {
                                    localStorage.setItem("Admin", createdUser.id)
                                    props.history.push("/")
                                }
                            })
                    }
                    else {
                        conflictDialog.current.showModal()
                    }
                })
        }else if (password.current.value === verifyPassword.current.value && adminPassword.current.value === "") {
            existingUserCheck()
                .then((userExists) => {
                    if (!userExists) {
                        fetch("http://localhost:8088/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email.current.value,
                                password: password.current.value,
                                name: `${userName.current.value}`,
                                userTypeId: 2
                            })
                        })
                            .then(_ => _.json())
                            .then(createdUser => {
                                if (createdUser.hasOwnProperty("id")) {
                                    localStorage.setItem("dawnops_user", createdUser.id)
                                    props.history.push("/")
                                }
                            })
                    }
                    else {
                        conflictDialog.current.showModal()
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register to join DawnOps</h1>
                <fieldset>
                    <label htmlFor="userName"> User Name </label>
                    <input ref={userName} type="text" name="userName" className="form-control" placeholder="User name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Admin Password (for admins only) </label>
                    <input ref={adminPassword} type="password" name="adminPassword" className="form-control" placeholder="Admin Password" />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}


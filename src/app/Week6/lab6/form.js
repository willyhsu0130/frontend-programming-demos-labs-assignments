import { useRef } from "react"
import { useState } from "react"
import { FaLongArrowAltRight } from "react-icons/fa";
export const Form = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const passwordRef = useRef(null)
    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const validateForm = () => {
        const newErrors = {}
        // Validate stuff
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email (e.g., example@example.com)."
        }
        if(username==""){
            newErrors.username = "Username cannot be blank"
        }
        // Password validation: at least 6 characters
        if (!passwordRef.current || passwordRef.current.value.length < 6) {
            newErrors.password = "Password must be at least 6 characters."
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            alert("Form succesfully submitted")
        } else {
            alert("Form failed to submit")
        }
    }

    return (
        <div className="w-full flex h-screen">
            <div className="w-1/4 flex-col flex justify-center space-y-4 h-screen -mt-20">
                <form className="mx-auto flex flex-col space-y-3 w-full" onSubmit={handleSubmit}>
                    <h1 className="mx-auto text-center font-bold text-xl mb-2">Sign Up</h1>
                    <div className="flex justify-center">
                        <input
                            name="username"
                            className="p-3.5 rounded-md w-2/3 mx-auto bg-gray-100 text-[12px] font-bold"
                            placeholder="USERNAME"
                            onChange={handleUsernameChange}
                        ></input>
                    </div>
                    <div className="flex justify-center">
                        <input
                            name="email"
                            className=" p-3.5 rounded-md w-2/3 bg-gray-100 text-[12px] font-bold"
                            placeholder="EMAIL"
                            onChange={handleEmailChange}
                        ></input>
                    </div>
                    <div className="flex justify-center mb-30">
                        <input
                            password="password"
                            className=" p-3.5 rounded-md w-2/3 bg-gray-100 text-[12px] font-bold"
                            placeholder="PASSWORD"
                            ref={passwordRef}
                        ></input>
                    </div>
                    <button className="mx-auto border border-gray-100 w-[50px] h-[50px] rounded-lg">
                        <FaLongArrowAltRight 
                            className="w-[30px] mx-auto my-auto"
                        />
                    </button>
                </form>
            </div>
            <div className="w-3/4 bg-black h-screen">
                <h1>...</h1>
            </div>
        </div>
    )
}
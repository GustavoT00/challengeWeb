import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registerAuth } from "../store/Thunks";
import { logout, register } from "../store/slices/AuthSlice";
import { onAuthStateChanged } from "firebase/auth";

export const Registro = () => {

    const dispatch = useDispatch()

    const {email, password, onInputChange, formState} = useForm({
        email: 'gustavo00.purebas@gmail.com',
        password: '12345678'
    })

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(email,password))
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user) =>{
            if(!user) return dispatch(logout())
            dispatch(register({email: user.email}))
        })
    }, [])

    return(
        <>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={(event) => onSubmit(event)}>
                <input name='email' type="email" onChange={(event) => onInputChange(event)} value={email} />
                <input name='password' type="password" onChange={(event) => onInputChange(event)} value={password} />
                <button type="submit">Registro</button>

            </form>
        </>
    )
}
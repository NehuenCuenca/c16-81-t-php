import React from 'react'
import { useForm } from 'react-hook-form';
import { artMobile } from "../../assets";
import { Link } from "react-router-dom"

const LoginForm = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Aquí se envian los datos del formulario al backend
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="container w-auto mx-2 md:mx-auto px-4 py-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-2 items-center bg-card rounded-lg">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-monse font-bold text-secondary text-[30px] md:text-[36px] mb-4 md:mb-12">Bienvenido</h1>
            <div className="flex flex-col items-start gap-4">
                <div className='flex flex-col'>
                    <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Correo Electrónico</label>
                    <input type='email'
                    className="w-[280px] sm:w-[300px] shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                    {...register("email", {
                        required: {
                        value: true,
                        },
                        pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        },
                    })} />
                    {errors.email && <span span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='flex flex-col'>
                    <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Contraseña</label>
                    <input type="password"
                    className="w-[280px] sm:w-[300px] shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                    {...register("password", {
                        required: {
                        value: true,
                        },
                    })} />
                    {errors.password && <span span className='text-red-500'>Este campo es requerido</span>}
                </div>
            </div>
    
            <button type="submit" 
            className={`py-2 px-6 mt-4 w-[280px] sm:w-[300px] bg-gray-gradient flex-1 flex gap-2 flex-row justify-center items-center font-monse font-medium text-[16px]
            text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}>Ingresar</button>

            <p className="font-monse text-sm font-light text-paragraph mt-4">
                ¿No tienes una cuenta?{" "}
                <Link
                    to="/register"
                    className="font-monse font-bold text-texto hover:underline"
                >
                    Registrate
                </Link>
            </p>
        </div>

        <div className="hidden md:block pr-24">
            <img src={artMobile} alt="art"/>
        </div>
    </form>
  )
}

export default LoginForm



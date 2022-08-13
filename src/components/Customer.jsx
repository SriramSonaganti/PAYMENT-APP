// import React, {useState} from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
// import AuthService from "../services/AuthService";
// import Modal from "./Modal";

// function Customer(props) {
    
//     const navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm();



//     const onSubmit = ({ data }  ) => {
        
//         console.log(data);
//         AuthService.signup(data).then(
//             (response) => {
//                 console.log(response);
//         });
        
        
//         navigate('/home')
//     }


//     return (
//     <div className="container mx-auto p-8 flex">
//         <div className="max-w-md w-full mx-auto">
//             <h1 className="text-4xl text-center mb-12 font-bold">SIGN UP</h1>
//             <div className="bg-slate-100 rounded-lg overflow-hidden ">
//                 <div className="p-8">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-gray-600">UserName</label>
//                             <input type="text" name="username" 
                             
//                              className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
//                              {...register("username", { required: true, maxLength: 10 })} />
//                              {errors.username && <p className="text-red-600">Please check the First Name</p>}
//                         </div>
//                         <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input type="password" name="password" 
//                              required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
//                              {...register("password", { required: true, maxLength: 10 })}
//                              />
//                              {errors.password && <p className="text-red-600">Please check the password</p>}
//                         </div>
                
//                         <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Customer Id</label>
//                             <input type="text" name="customerId" 
//                              required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
//                              {...register("customerId", { required: true, maxLength: 10 })}
//                              />
//                              {errors.customerid && <p className="text-red-600">Please check the password</p>}
//                         </div>

//                         <div className="mb-5">
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
//                             <input type="text" name="phone" 
//                              required className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
//                              {...register("phone", { required: true, maxLength: 10 })}
//                              />
//                              {errors.phone && <p className="text-red-600">Please check the phone number</p>}
//                         </div>
//                         <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-black">Login</button>
//                     </form>
//                 </div>
                
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Customer;
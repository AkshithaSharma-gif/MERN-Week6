import {useForm} from 'react-hook-form'
import { useState } from 'react';

function Form(){
    const {register,handleSubmit,formState:{errors}}=useForm();

    //state
    const [users,setUsers]=useState([]);

    const onFormSubmit=(obj)=>{
        console.log(obj);
        setUsers([...users,obj])
    }

    return(
        <div className='mt-5'>
            <h1 className='text-4xl text-center'>User Form</h1>
            <form className='max-w-md mt-30 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-4'>
                    <label htmlFor="firstname">Name</label>
                    <input type="text" 
                            id='firstname' 
                            placeholder='Name'
                            {...register("firstname",
                                {
                                    required:"Name Required",
                                    validate:(v)=>v.trim().length!=0||"White space is not valid"
                                }
                            )}
                            className='border w-full p-4'/>

                    {
                    errors.firstname?.type=="required" && <p className='text-red-600'>{errors.firstname.message}</p>
                    }
                    {
                    errors.firstname?.type=="validate" && <p className='text-red-600'>{errors.firstname.message}</p>
                    }
                </div>
                <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                            id='email' 
                            placeholder='Email'
                            {...register("email",
                                {
                                    required:"Email Required",
                                    validate:(v)=>v.trim().length!=0||"White space is not valid"
                                }
                            )}
                            className='border w-full p-4'/>

                    {
                    errors.email?.type=="required" && <p className='text-red-600'>{errors.email.message}</p>
                    }
                    {
                    errors.username?.type=="validate" && <p className='text-red-600'>{errors.email.message}</p>
                    }
                </div>
                <div className='mb-4'>
                    <label htmlFor="dateOfBirth">Date Of BIrth</label>
                    <input type="date" 
                            id='dateOfBirth' 
                            placeholder='DD-MM-YYYY'
                            {...register("dateOfBirth",
                                {
                                    required:"dateOfBirth Required(Enter in the form of DD-MM-YYYY)",
                                    validate:(v)=>v.trim().length!=0||"White space is not valid"
                                }
                            )}
                            className='border w-full p-4'/>

                    {
                    errors.dateOfBirth?.type=="required" && <p className='text-red-600'>{errors.dateOfBirth.message}</p>
                    }
                    {
                    errors.dateOfBirth?.type=="validate" && <p className='text-red-600'>{errors.dateOfBirth.message}</p>
                    }
                </div>

                <div className='mb-4'> 
                    <label htmlFor="submit"></label>
                    <button className='border block mx-auto p-3 bg-green-500' type="submit" id='submit'>AddUser</button>
                </div>
            </form>
        <div>

            {/*displaying*/}
            <table className='border mt-5 mx-auto'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Email</th>
                        <th>dateOfBirth</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        users.map((userObj,index)=>(<tr key={index}>
                            <td>{userObj.firstname}</td>
                            <td>{userObj.email}</td>
                            <td>{userObj.dateOfBirth}</td>
                        </tr>))
                    }
                </tbody>
        </table>
        </div>
        </div>
    )
}

export default Form;
import { useEffect,useState} from 'react';

function APIDemo() {
    console.log("API demo rendered");
    let [users, setUsers]=useState([]);
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null);

    useEffect(()=>{
        //a function to make API req
        async function getData(){
            //set loading to true
            setLoading(true);
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/users");
                let usersList=await res.json();
                //update the state
                setUsers(usersList)
            }
            catch(err){
                console.log("Error :",err)
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        //call
        getData();
    },[])

    //deal with loading state
    if(loading){
        return <p className="text-center text-5xl">Loading...</p>
    }

    //dealing with error state
    if(error!=null){
        return <p className='text-center text-red-500 text-5xl'>{error.message}</p>
    }


    return(
        <div className='text-center'>
            <p className='text-8xl'>Users List</p>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    users.map((userObj)=>(
                        <div key={userObj.id}>
                            <p>{userObj.name}</p>
                            <p>{userObj.email}</p>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}


export default APIDemo;
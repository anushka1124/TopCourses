import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from './data';
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
// import './app.css';

const App = () => {

  const [courses , setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

    const fetchData = async() => {
      setLoading(true);
      try{
        let res = await fetch(apiUrl);
        let output = await res.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, []);


  return(
    <div className="flex flex-col min-h-screen bg-black bg-opacity-80">
      <div>
        <NavBar/>
      </div>
      <div>
        <div>
          <Filter filterData = {filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>      
    </div>
  );
};

export default App;
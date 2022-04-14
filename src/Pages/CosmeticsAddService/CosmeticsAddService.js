import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './CosmeticsAddService.css'

const CosmeticsAddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      console.log(data);
  
      axios.post('https://young-inlet-53249.herokuapp.com/cosmeticsaddservice', data)
      .then(res => {
        if(res.data.insertedId){
          alert('added successfully');
          reset();
        }
      })
    };
      return (
          <div className="add-service">
             <h1>add a product</h1> 
             <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("name")} placeholder="Name"/>
        {/* <textarea {...register("description")}  placeholder="Description"/> */}
        <input type="number" {...register("purchase")} placeholder="purchase"/>
        <input {...register("img")} placeholder="img url"/>
        <input type="submit" />
      </form>
          </div>
      );
};

export default CosmeticsAddService;
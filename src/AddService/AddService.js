import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import HeadShake from 'react-reveal/HeadShake';

const AddService = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('https://calm-reef-13122.herokuapp.com/addpackage', data)
                  .then(
                        res => {
                              if (res.data.insertedId) {
                                    alert('Added Successfully')
                                    reset()
                              }
                        })
      }
      return (
            <div>
                  <HeadShake>
                        <h1 className=' mt-5 text-info'>Add A Package</h1>
                        <form className='form-container mt-5' onSubmit={handleSubmit(onSubmit)}>


                              <input  {...register("name")} placeholder='Enter the place name' />
                              <input  {...register("description")} placeholder="Enter the description" />
                              <input type="number" {...register("price")} placeholder='Enter the price' />
                              <input {...register("duration")} placeholder="Duration" />
                              <input {...register("img")} placeholder='Paste the image url' />

                              <input className='btn btn-danger' value='Add Package' type="submit" />
                        </form>
                  </HeadShake>
            </div>
      );
};

export default AddService;
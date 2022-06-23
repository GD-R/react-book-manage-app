import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";


const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  }});

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  const { register, handleSubmit, formState, reset } = useForm({defaultValues: {bookname: props.book ? props.book.bookname : "",
  author: props.book ? props.book.author : "",
  quantity: props.book ? props.book.quantity : "",
  price: props.book ? props.book.price : "",
  date: props.book ? props.book.date : "",}});
   
  const priceValid = {
    required: true,
    pattern: { value: /^\d{1,}(\.\d{0,2})?$/ || "" , message:"Invalid Price" }
  }

  const quantityValid = {
    required: true,
    pattern: { value: /^[0-9]+$/ || "" , message:"Invalid Quantity" }
  }

  const onSubmit = (data) => {
    // setBook((previous) => {
    //   return({...data, date: previous.date})
    // })

    const book = {
      id: uuidv4(),
      bookname: data.bookname,
      author: data.author,
      price: data.price,
      quantity: data.quantity,
      date: new Date()
    };
    props.handleOnSubmit(book);
   
    reset()
    
  }


  return (
    <div className="w-4/5 container mx-auto my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-2/3 flex flex-col mx-auto gap-8">
         
        <TextField color="success" fullWidth label="Bookname" id="fullWidth"  
        {...register("bookname", { required: true})} 
        helperText={formState.errors?.bookname?.message}
        />

        <TextField color="success" fullWidth label="Author" id="fullWidth" 
          {...register("author", { required: true})} 
          helperText={formState.errors?.author?.message}
          />

        <TextField color="success" fullWidth label="Price" id="fullWidth" 
          {...register("price", priceValid)} 
          helperText={formState.errors?.price?.message}
          />

        <TextField color="success" fullWidth label="Quantity" id="fullWidth" 
          {...register("quantity", quantityValid)} 
          helperText={formState.errors?.quantity?.message}
          />

         
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-1/2 mx-auto py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;

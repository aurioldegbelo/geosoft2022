"use strict"; 

window.onload = function ()
{
    // executing the function 
   let data = data_reading()
   console.log(data)

   let data_processed = data_processing(data)
   console.log(data_processed)

user_interface_update(data_processed)

    

}
"use strict"; 

// function definition (names following the underscore convention)

function data_reading()
{
    /* I read data, e.g. from a file, from a formular, from an api */

}


function data_processing()
{

    /* I process the data that was read and do cool stuff with it */

}

function user_interface_update()
{

    /* I show the results of my data processing to users */

    document.getElementById("my_first_html_element").innerHTML= "Here are my results from the underscore scenario"
}




// function definition (names following the camel case convention)

function dataReading()
{
    /* I read data, e.g. from a file, from a formular, from an api */

}


function dataProcessing()
{

    /* I process the data that was read and do cool stuff with it */

}

function userInterfaceUpdate()
{

    /* I show the results of my data processing to users */

    document.getElementById("mySecondHtmlElement").innerHTML= "Here are my results from the camel case scenario"
}

// Execution




window.onload = function ()
{   
  user_interface_update()
  userInterfaceUpdate()  
  console.log("test test") 
}


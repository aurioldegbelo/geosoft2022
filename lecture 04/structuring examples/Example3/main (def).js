
"use strict"; 

// function definition (names following the underscore convention)

function data_reading()
{
    /* I read data, e.g. from a file, from a formular, from an api */

    return 2
}


function data_processing(inputdata)
{

    /* I process the data that was read and do cool stuff with it */

    return 10 * inputdata
}

function user_interface_update(anotherinputdata)
{

    /* I show the results of my data processing to users */
    document.getElementById("my_first_html_element").innerHTML= `The results of my data processing is: ${anotherinputdata}`
    // A short documentation of template strings: https://www.mediaevent.de/javascript/template-literal.html
}

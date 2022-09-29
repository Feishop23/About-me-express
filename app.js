const express = require('express');

const app = express();

        app.get('/me',(request, response)=>{
        response.status(200).json({
            name: 'Feiberth',
            age: 19,
            country: 'Ecuador',
            verb: request.method
        })
        })

app.post('/metas', (request, response) => {
 response.status(200).json({
    hobbys: 'I enjoy walking on the beach in the evenings, reading, drawing and programming.',
    verb: request.method

})
})


app.put('/business', (request, response) => {
 response.status(200).json({
    companies_of_work: ["facebook", "google", "Uber", "RockStore"] ,
    verb: request.method
})
})


app.listen(8000, ()=>{
    console.log('el servidor esta activo :8000')
})


//? HTTP
//? Verbos
    //* GET-solo traer
    //* POST-subir
    //* PUT-actualizaciones y modifica todo name, email, etc. 
    //* PATCH-actualizaciones y modifica solo uno
    //* DELET-eliminar
//? Status
    //* 100 - respuestas informativa solo te dice que algo sucedio
    //* 200 - si se manejan mas por back-end - son status exitosos - es el que te arroja una respuesta rapida 'err 404'
    //* 300 - se maneja por parte del servidor
    //* 400 - si se manejan mas por back-end
    //* 500 - 
    //? Headers
    
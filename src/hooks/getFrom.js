
export const getFrom = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                reject(
                    "No hemos podido recuperar ese json. El código de respuesta del servidor es: " +
                      response.status
                );
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
    })
}


//Uso

// getFrom('https://api.frankfurter.app/latest?from=USD')
//     .then((json)=> {
//       //Conseguir la data de la variable json
//     })
//     .catch((err)=> {
//       //Conseguir el error de la variable err
//     })
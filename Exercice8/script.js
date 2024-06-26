const add = (i, f) => {

    if (typeof i === 'string') {
        i = +i; 
    }
    if (typeof f === 'string') {
        f = +f;
    }

    const somme = i + f
    
    return somme
}

 export default add;

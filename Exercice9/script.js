const checkAge = (int) => {

    if (int < 18) {
        return "Vous êtes mineur."
    } else if (int >= 18 && int < 65) {
        return "Vous êtes majeur."
    } else if (int >= 65) {
        return "Vous êtes senior."
    }
    return
 
}

export default checkAge;

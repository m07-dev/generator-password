const wrapper = document.querySelector('.wrapper');
const lowerCases = document.getElementById('lowerCase')
const upperCases = document.getElementById('upperCase')
const digits = document.getElementById('digit')
const symbols = document.getElementById('symbol')
const button = document.querySelector('.btn')
const length_lists = document.querySelector('.form-select')

let length = 0
length_lists.addEventListener('click',(e)=>{
    length = parseInt(e.currentTarget.value, 10)
})


button.addEventListener('click',(e)=>{
    let newPassword = "";
    if(lowerCases.checked){
        newPassword +=lowerCases.value
    }
    if(upperCases.checked){
        newPassword +=upperCases.value
    }
    if(digit.checked){
        newPassword +=digits.value
    }
    if(symbol.checked){
        newPassword +=symbols.value
    }

    function Password() {
        let result = "";
        const characters = newPassword;
        const charactersLength = characters.length;
        let counter = 0;
        if(length === 0){
            alert('Password length not selected')
        }
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result
    }
    wrapper.innerHTML = `<div class="col-12 d-flex justify-content-center align-items-center wrapper">${Password()}</div>`

    function error() {
        if (!(lowerCases.checked || upperCases.checked || digits.checked || symbols.checked)) {
            alert('Select some option for your Password');
            return false;
        }
        return true; 

    }    
    error()

}
)

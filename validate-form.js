// form validation fields
function validateForm() {

    let form  = document.getElementsByTagName('form')[0];

    if (form.name?.value.length < 6 || form.name?.value.length === 0) {
        alert("Nome invalido");
        form.name?.focus();
        return false;
    }

    if (form.email?.value.length === 0) {
        alert("Email invalido");
        form.email?.focus();
        return false;
    }

    if (form.message?.value.length === 0) {
        alert("Mensagem invalida");
        form.message?.focus();
        return false;
    }

    // redirect to whatsapp when form is valid
    return window.open(`whatsapp://send?phone=555181819329&text=Olá, meu nome é ${form.name?.value}, e meus dados de contato são ${form.email?.value} e ${form.number?.value}, estou entrando em contato pela seguinte mensagem: ${form.message?.value}`);
}

// apply cellphone mask
const applyMask = (event) => {
    let number = event.target;
    number.value = maskReplacer(number.value);
}

const maskReplacer = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value;
}
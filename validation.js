export default class FormValidation {
    formElement = null;
    options = null;

    constructor(form, options) {
        if (!form || !options) {
            console.error("Invalid parameter");
        }
        this.formElement = form;
        this.options = options;
        this.formElement.addEventListener("submit", (e) => this.validateForm(e));
    }
    validateForm(e) {
        e.preventDefault();
        const inputNames = Object.keys(this.options)

        inputNames.forEach(name => {
            const input = this.formElement.querySelector(`[name="${name}"]`);

            // input validate
            if ('minLength' in this.options[name]) {
                const minLength = this.options[name].minLength;
                const nonNumeric = this.options[name].nonNumeric;
                if (input.value.length > minLength && (/[0-9]+/).test(input.value) !== nonNumeric) {
                    setsuccess('valid')
                } else {
                    seteror("invalid");
                }
            }

            //  maxlength
            if ('maxLength' in this.options[name]) {
                const maxLength = this.options[name].maxLength;
                if (input.value.length > null && input.value.length < maxLength) {

                    setsuccess('valid')
                } else {
                    seteror("invalid");
                }
            }
            // lowercase
            if ('hasLowerCase' in this.options[name]) {
                const hasLowerCase = this.options[name].hasUpperCase;
                if ((/[a-z]/gm).test(input.value) == hasLowerCase) {
                    setsuccess('valid')
                } else {
                    seteror("invalid");
                }
            }

            //  url,
            if ('hasHttps' in this.options[name]) {

                const hasHttps = this.options[name].hasHttps;
                console.log(hasHttps);

                if ((/https/g).test(input.value) == hasHttps) {
                    setsuccess('valid')
                } else {
                    seteror("invalid");
                }
            }

            // HASSUPERCASE
            if ('hasUpperCase' in this.options[name]) {
                const hasUpperCasenew = this.options[name].hasUpperCase;
                console.log(input.value);
                if ((/[A-Z]/gm).test(input.value) == hasUpperCasenew) {

                    setsuccess('valid')
                } else {
                    seteror("invalid");

                }
            }
            // eror function
            function seteror(x) {

                return document.getElementById(name).innerText = `${name}  ${x}`;
            }
            // eror succes funtion
            function setsuccess(x) {
                return document.getElementById(name).innerText = `${name}  ${x}`;
            }
        })
    }
}
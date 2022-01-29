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
        // console.log(inputNames);
        inputNames.forEach(name => {
            const input = this.formElement.querySelector(`[name="${name}"]`);
            // console.log(name);

            // console.log({ name });
            // console.log(this.options[name]);

            //    name chek
            // input validate
            if ('minLength' in this.options[name]) {
                const minLength = this.options[name].minLength;

                if (input.value.length > minLength) {

                    document.getElementById(name).innerText = `${name} is valid`;
                    // console.log(name, "this is valid");


                } else {
                    // console.log('-----', name, minLength);
                    // console.log(name, 'this is not vlaid');
                    document.getElementById(name).innerText = `${name} is invalid`;




                }






                // console.log(this.options[name].maxLength);

                //  maxlength

                if ('maxLength' in this.options[name]) {

                    const maxLength = this.options[name].maxLength;

                    if (input.value.length < maxLength) {

                        document.getElementById(name).innerText = `${name} is valid`;
                        console.log(name, "this is valid");


                    } else {
                        // console.log('-----', name, minLength);
                        console.log(name, 'this is not vlaid');
                        document.getElementById(name).innerText = `${name} is invalid`;

                    }





                }







            }









        })



    }




}
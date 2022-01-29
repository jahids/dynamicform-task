import FormValidation from "./validation.js"

new FormValidation(document.getElementById('form'), {
    'first-name': { minLength: 2 },
    'last-name': { minLength: 3 },
    'my-email': { minLength: 5 },
    'phone': { minLength: 11, maxLength: 12 },
    
})


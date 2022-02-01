import FormValidation from "./validation.js"

new FormValidation(document.getElementById('form'), {
    'first-name': { minLength: 2, nonNumeric: true,  maxLength: 5 },
    'last-name': { minLength: 3, nonNumeric: true },
    'my-email': { minLength: 5 },
    'phone': { minLength: 11, maxLength: 12 },
    'password': { hasUpperCase: true,  hasLowerCase: true },
     'url': { hasHttps: true }
    
})
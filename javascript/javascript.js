document.addEventListener("DOMContentLoaded", function () {
    let functionn = document.querySelector('#functionBtn')
    let argument = document.querySelector('#argumentBtn')
    let array = document.querySelector('#arrayBtn')
    let methods = document.querySelector('#methodsBtn')
    let boolean = document.querySelector('#booleanBtn')
    let parameter = document.querySelector('#parameterBtn')

    let functionDefin = document.querySelector('#functionDef')
    let agumentDefin = document.querySelector('#agumentDef')
    let arrayDefin = document.querySelector('#arrayDef')
    let methodsDefin = document.querySelector('#methodsDef')
    let booleanDefin = document.querySelector('#booleanDef')
    let parameterDefin = document.querySelector('#parameterDef')

    functionn.addEventListener('click', function () {
        functionDefin.classList.toggle('show')
        agumentDefin.classList.remove('show')
        arrayDefin.classList.remove('show')
        methodsDefin.classList.remove('show')
        booleanDefin.classList.remove('show')
        parameterDefin.classList.remove('show')
    })

    argument.addEventListener('click', function () {
        agumentDefin.classList.toggle('show')
        functionDefin.classList.remove('show')
        arrayDefin.classList.remove('show')
        methodsDefin.classList.remove('show')
        booleanDefin.classList.remove('show')
        parameterDefin.classList.remove('show')
    })

    array.addEventListener('click', function () {
        arrayDefin.classList.toggle('show')
        functionDefin.classList.remove('show')
        agumentDefin.classList.remove('show')
        methodsDefin.classList.remove('show')
        booleanDefin.classList.remove('show')
        parameterDefin.classList.remove('show')
    })

    methods.addEventListener('click', function () {
        methodsDefin.classList.toggle('show')
        arrayDefin.classList.remove('show')
        functionDefin.classList.remove('show')
        agumentDefin.classList.remove('show')
        booleanDefin.classList.remove('show')
        parameterDefin.classList.remove('show')
    })

    boolean.addEventListener('click', function () {
        booleanDefin.classList.toggle('show')
        arrayDefin.classList.remove('show')
        functionDefin.classList.remove('show')
        agumentDefin.classList.remove('show')
        methodsDefin.classList.remove('show')
        parameterDefin.classList.remove('show')
    })

    parameter.addEventListener('click', function () {
        parameterDefin.classList.toggle('show')
        arrayDefin.classList.remove('show')
        functionDefin.classList.remove('show')
        agumentDefin.classList.remove('show')
        methodsDefin.classList.remove('show')
        booleanDefin.classList.remove('show')
    })
})
function insert(num) {
    document.form.numbers.value = document.form.numbers.value + num;
}

function clean() {
    document.form.numbers.value = "";
}

function back() {
    let exp = document.form.numbers.value;
    document.form.numbers.value = exp.substring(0, exp.length -1) /* метод, позволяющий получить подстроку с начального 0 и до предпоследнего символа */
}

function equal() {
    let exp = document.form.numbers.value;
    if(exp) {
        document.form.numbers.value = eval(exp); /* eval ф-ция, которая принимает строку(exp) и возвращает результат */
    }
}
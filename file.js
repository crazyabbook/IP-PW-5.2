const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const inputC = document.getElementById('inputC');
const button = document.getElementById('button');
const answer = document.getElementById('answer');
const fmt = num => Number(num.toFixed(6));

button.addEventListener('click', () => {
    if (inputA.value === '' || inputB.value === '' || inputC.value === '') {
        answer.textContent = 'Введите корректные данные.';
        return;
    }
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const c = Number(inputC.value);
    if (a === 0) {
        answer.innerHTML = 'Данное уравнение не является квадратным.<br>Введите a ≠ 0 или воспользуйтесь иным калькулятором.';
        return;
    }
    const d = b ** 2 - 4 * a * c;
    if (d > 0) {
        const x1 = fmt((-b + Math.sqrt(d)) / (2 * a));
        const x2 = fmt((-b - Math.sqrt(d)) / (2 * a));
        answer.innerHTML = `Квадратное уравнение имеет два корня.<br>x1 = ${x1}, x2 = ${x2} при D = ${fmt(d)} > 0.`;
    }
    else if (d === 0) {
        const x = fmt(-b / (2 * a));
        answer.innerHTML = `Квадратное уравнение имеет один корень.<br>x = ${x} при D = ${fmt(d)}.`;
    }
    else {
        answer.innerHTML = `Квадратное уравнение не имеет корней.<br>D = ${fmt(d)} < 0.`;
    }
});
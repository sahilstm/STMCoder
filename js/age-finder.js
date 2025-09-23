const startBtn = document.getElementById('start');
const controls = document.getElementById('controls');
const loaderArea = document.getElementById('loaderArea');
const steps = Array.from(document.querySelectorAll('.step'));
const result = document.getElementById('result');
const spinner = document.getElementById('spinner');

function showSequentialSteps() {
    const delayPerStep = 2000; 
    steps.forEach((el, idx) => {
        setTimeout(() => {
            el.classList.add('show');
        }, delayPerStep * (idx + 1));
    });

    const finishTime = delayPerStep * steps.length + 1000;
    setTimeout(finalize, finishTime);
}

function finalize() {
    loaderArea.classList.add('hidden');
    spinner.style.animation = 'none';
    result.style.display = 'block';
    result.animate(
        [
            { transform: 'translateY(8px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: 450, easing: 'cubic-bezier(.2,.9,.3,1)' }
    );

    document.getElementById('resultText').textContent = 'Ask your parents';
}

startBtn.addEventListener('click', () => {
    controls.classList.add('hidden');
    loaderArea.classList.remove('hidden');
    steps.forEach(s => s.classList.remove('show'));
    showSequentialSteps();
});

result.addEventListener('dblclick', () => {
    result.style.display = 'none';
    controls.classList.remove('hidden');
    spinner.style.animation = '';
});

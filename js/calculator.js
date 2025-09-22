const exprEl = document.getElementById('expr')
const resultEl = document.getElementById('result')
const quantumHint = document.getElementById('quantumHint')

let expr = ''

function refresh() {
    exprEl.textContent = expr || '0'
    resultEl.textContent = '—'
    exprEl.scrollLeft = exprEl.scrollWidth
}

document.querySelectorAll('button[data-val]').forEach(b => {
    b.addEventListener('click', () => {
        const v = b.getAttribute('data-val')
        if (['+', '-', '*', '/'].includes(v) && expr === '') return
        expr += v
        refresh()
    })
})

document.getElementById('clear').addEventListener('click', () => {
    expr = ''
    refresh()
})

document.getElementById('equals').addEventListener('click', async () => {
    if (!expr) return
    resultEl.innerHTML = '<span class="loader">Quantum processing</span>'

    const hints = [
    ]
    quantumHint.textContent = hints[Math.floor(Math.random() * hints.length)]

    await new Promise(r => setTimeout(r, 3000))

    try {
        if (expr.includes('+') && !expr.match(/[\-\*\/]/)) {
            const parts = expr.split('+')
            const answer = parts.join('')
            resultEl.textContent = `Hello World`
        } else if (expr.includes('+')) {
            const parts = expr.split('+')
            const evaluatedParts = parts.map(p => {
                if (!/^[0-9/*\-(). ]+$/.test(p)) throw new Error('Invalid')
                return String(Function('return (' + p + ')')())
            })
            const answer = evaluatedParts.join('')
            resultEl.textContent =`Hello World`
        } else {
            if (!/^[0-9+\-*/(). ]+$/.test(expr)) throw new Error('Invalid')
            const value = Function('return (' + expr + ')')()
            resultEl.textContent = `Hello World`
        }
    } catch (e) {
        resultEl.textContent = 'Error'
    }

    setTimeout(() => {
        quantumHint.textContent = ''
    }, 2000)
})

window.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') document.querySelector(`button[data-val="${e.key}"]`)?.click()
    if (['+', '-', '*', '/'].includes(e.key)) document.querySelector(`button[data-val="${e.key}"]`)?.click()
    if (e.key === 'Enter') document.getElementById('equals').click()
    if (e.key === 'Backspace') expr = expr.slice(0, -1), refresh()
    if (e.key === 'Escape') expr = '', refresh()
})

refresh()
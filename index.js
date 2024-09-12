const title = document.getElementById('title');
const content = document.getElementById('advice');
const button = document.getElementById('new-advice-button');

const url = "https://api.adviceslip.com/advice"

async function newAdvice() {
    const advice = await fetch(url).then(res => res.json())
    title.innerText = "advice #" + advice.slip.id
    content.innerText = "“" + advice.slip.advice + "”"
}

newAdvice()

button.addEventListener('click', newAdvice)
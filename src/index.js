const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/movies/${e.target[0].value}`)
        .then((res) => res.json())
        .then((data) => {
            const title = document.querySelector('#movieDetails h4')
            const summary = document.querySelector('#movieDetails p')
            
            title.textContent = data.title
            summary.textContent = data.summary
        })

        e.target.reset()
    })
}

init()
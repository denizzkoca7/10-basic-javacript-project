var toggleButton = document.querySelector('.btn')

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
    
    if(toggleButton.innerHTML === 'Dark Theme') {
        toggleButton.innerHTML = 'Light Theme'
    }
    else {
        toggleButton.innerHTML='Dark Theme'
    }
})

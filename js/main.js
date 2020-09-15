const skills = () => {
    const skill = document.querySelectorAll('.progress')
    skill.forEach((item, index) => {
        const progress = item.getAttribute('data-attribute');
        item.style.width = progress
    })
}

skills();
const title = document.querySelector('.title')

// Add \n where you want line break
const text = `I Have Something for you\nSami`.split('\n')

title.style.display = 'flex'
title.style.flexDirection = 'column'
title.style.alignItems = 'center'
title.style.color = 'red'

text.forEach(line => {
  const lineDiv = document.createElement('div')
  lineDiv.style.display = 'flex'
  lineDiv.style.flexWrap = 'wrap'
  lineDiv.style.justifyContent = 'center'
  lineDiv.style.gap = '0.3rem'

  line.split(' ').forEach(word => {
    const wordSpan = document.createElement('span')
    wordSpan.style.display = 'flex'

    word.split('').forEach(char => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.display = 'inline-block'
      span.style.animationDelay = `${Math.random() * 3}s`
      wordSpan.appendChild(span)
    })

    // space between words
    const space = document.createElement('span')
    space.style.width = '0.5rem'

    lineDiv.appendChild(wordSpan)
    lineDiv.appendChild(space)
  })

  title.appendChild(lineDiv)
})
  line.split(' ').forEach(word => {
    const wordSpan = document.createElement('span')
    wordSpan.style.display = 'flex'

    word.split('').forEach(char => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.display = 'inline-block'
      span.style.animationDelay = `${Math.random() * 3}s`
      wordSpan.appendChild(span)
    })

    // space between words
    const space = document.createElement('span')
    space.style.width = '0.5rem'

    lineDiv.appendChild(wordSpan)
    lineDiv.appendChild(space)
  })

  title.appendChild(lineDiv)
})

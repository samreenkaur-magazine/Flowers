const title = document.querySelector('.title')

// Define text
const text = `I Have Something for you Sami`.split('')

// Style container
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'
title.style.color = 'white'       // dark pink (MediumVioletRed)
title.style.padding = '0 1rem'      // add left/right padding
title.style.fontSize = '2.0rem'     // adjust font size
title.style.textAlign = 'center'    // center text

// Create letters
for (let i = 0; i < text.length; i++) {
  if (text[i] !== ' ') {
    title.innerHTML += `<span>${text[i]}</span>`
  } else {
    title.innerHTML += `<span style="width: 0.5rem"></span>`
  }
}

// Apply random animation delay to letters
const textElements = document.querySelectorAll('.title span')
textElements.forEach(element => {
  const randomDelay = Math.random() * 3
  element.style.animationDelay = `${randomDelay}s`
})

const title = document.querySelector('.title');

// Content setup
const textContent = `I Have Something for you Sami`;
// Splits by newline if you add \n later, otherwise keeps it as one line
const lines = textContent.split('\n'); 

// Layout & Alignment
title.style.display = 'flex';
title.style.flexDirection = 'column';
title.style.alignItems = 'center';      // Horizontal centering
title.style.textAlign = 'center';       // Center-aligns the text itself

// Positioning & Spacing
title.style.marginTop = '10vh';         // Moves it "a bit top" from center
title.style.padding = '0 25px';         // Adds left/right breathing room

// Styling
title.style.color = '#C2185B';          // Beautiful dark pink (Deep Rose)
title.style.fontSize = '2rem';          // Adjust as needed
title.style.fontWeight = 'bold';

// Render the text (preserves line breaks if any)
title.innerHTML = lines.map(line => `<span>${line}</span>`).join('');


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

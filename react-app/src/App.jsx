import { useState, useEffect } from 'react'
import './App.css'

const quotes = {
  motivation: [
    { text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
    { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { text: "Ne regardez pas l'horloge ; faites comme elle. Continuez.", author: "Sam Levenson" },
    { text: "Votre limitation, c'est seulement votre imagination.", author: "Anonyme" }
  ],
  sagesse: [
    { text: "La sagesse, c'est savoir que je ne sais rien.", author: "Socrate" },
    { text: "Il faut rire avant d'être heureux, de peur de mourir sans avoir ri.", author: "Jean de La Bruyère" },
    { text: "La vie, c'est comme une bicyclette : il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
    { text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", author: "Sénèque" },
    { text: "Le bonheur n'est pas une destination, c'est une façon de voyager.", author: "Margaret Lee Runbeck" }
  ],
  amour: [
    { text: "Être aimé profondément par quelqu'un vous donne de la force, tandis qu'aimer quelqu'un profondément vous donne du courage.", author: "Lao Tzu" },
    { text: "Le plus grand bonheur que puisse connaître un être humain, c'est peut-être celui d'être aimé pour ce qu'il est.", author: "Victor Hugo" },
    { text: "L'amour ne se contente pas de regarder vers l'avenir, il créé l'avenir.", author: "Teilhard de Chardin" },
    { text: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé.", author: "George Sand" },
    { text: "L'amour est la seule force capable de transformer un ennemi en ami.", author: "Martin Luther King Jr." }
  ]
}

const categories = Object.keys(quotes)

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes.motivation[0])
  const [currentCategory, setCurrentCategory] = useState('motivation')
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomQuote = (category = currentCategory) => {
    const categoryQuotes = quotes[category]
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length)
    return categoryQuotes[randomIndex]
  }

  const handleNewQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuote(getRandomQuote())
      setIsAnimating(false)
    }, 300)
  }

  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuote(getRandomQuote(category))
      setIsAnimating(false)
    }, 300)
  }

  const categoryEmojis = {
    motivation: '🚀',
    sagesse: '🧠',
    amour: '❤️'
  }

  useEffect(() => {
    // Animation d'entrée
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }, [])

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">✨ Citations Inspirantes ✨</h1>
          <p className="subtitle">Trouvez l'inspiration dont vous avez besoin</p>
        </header>

        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${currentCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {categoryEmojis[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={`quote-container ${isAnimating ? 'animating' : ''}`}>
          <blockquote className="quote">
            <p className="quote-text">"{currentQuote.text}"</p>
            <footer className="quote-author">— {currentQuote.author}</footer>
          </blockquote>
        </div>

        <button className="new-quote-btn" onClick={handleNewQuote}>
          🎲 Nouvelle Citation
        </button>

        <footer className="app-footer">
          <p>Inspiré pour vous motiver chaque jour 💫</p>
        </footer>
      </div>
    </div>
  )
}

export default App

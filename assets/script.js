// Définition des variables constantes

const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
const dotsContainer = document.querySelector('.dots')
const bannerImg = document.querySelector('.banner-img')
const tagLine = document.querySelector('#banner p')

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

let currentSlide = 0

// Écouteurs d'événements pour les clics sur les flèches

arrow_left.addEventListener('click', previous)
arrow_right.addEventListener('click', next)

// Initialisation du carrousel avec la première diapositive

showSlide(currentSlide)
updateDots(currentSlide)

// Fonction pour afficher la diapositive en cours

function showSlide(index) {
  const slide = slides[index]
  bannerImg.src = `./assets/images/slideshow/${slide.image}`
  tagLine.innerHTML = slide.tagLine
}

// Fonction pour mettre à jour les points (dots)

function updateDots(index) {
  const dotElements = dotsContainer.querySelectorAll('.dot')
  dotElements.forEach((dot, i) => {
    dot.classList.remove('dot_selected')
    if (i === index) {
      dot.classList.add('dot_selected')
    }
  })
}

// Fonction pour passer à la diapositive suivante

function next() {
  currentSlide++
  if (currentSlide >= slides.length) {
    currentSlide = 0
  }
  showSlide(currentSlide)
  updateDots(currentSlide)
}

// Fonction pour passer à la diapositive précédente

function previous() {
  currentSlide--
  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }
  showSlide(currentSlide)
  updateDots(currentSlide)
}

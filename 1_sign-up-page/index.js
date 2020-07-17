const newsletterSwitch = document.querySelector('.switch-checkbox')
const noLabel = document.querySelector('.no-label')
const yesLabel = document.querySelector('.yes-label')

newsletterSwitch.addEventListener('change', () => {
  console.log('TESTING')
  noLabel.classList.toggle('not-selected')
  yesLabel.classList.toggle('not-selected')
})

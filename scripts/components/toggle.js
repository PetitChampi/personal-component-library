const toggle = document.querySelector('.mode-mob-toggle')
const checkbox = document.querySelector('.mode-mob-switch--input')
const circle = document.querySelector('.mode-mob-switch--slider--circle')

toggle.addEventListener('click', () => {
  checkbox.toggleAttribute('checked')
  if (checkbox.hasAttribute('checked'))
    circle.style.transform = 'translateX(24px)'
  else
    circle.style.transform = 'translateX(0px)'
})
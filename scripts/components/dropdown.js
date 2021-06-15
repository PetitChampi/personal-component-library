const dropList = document.getElementsByClassName("dropdown-content")
const dropBtns = document.getElementsByClassName("dropdown")

Object.keys(dropBtns).forEach((i) => {
  dropBtns[i].addEventListener('click', () => {
    dropList[i].classList.toggle("dropdown-show")
    dropBtns[i].classList.toggle("dropdown-show")
  })
})

// Close the dropdown if the user clicks outside of it
let closeDropdown = (event) => {
  if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown-content--item') && !event.target.matches('.check-container') && !event.target.matches('.check-container--checkbox')) {
    let i
    for (i = 0; i < dropList.length; i++) {
      let openDropdown = dropList[i];
      let openDropdownBtn = dropBtns[i];
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show')
        openDropdownBtn.classList.remove('dropdown-show')
      }
    }
  }
}

window.addEventListener('click', closeDropdown)
window.addEventListener('touchstart', closeDropdown)
;(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = (window.sr = ScrollReveal())

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  function checkLights () {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'dark'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'light'
      }
    }
  }

  // Accordion component
  const accordionEl = document.getElementsByClassName('accordion-title')

  if (accordionEl.length) {
    for (let i = 0; i < accordionEl.length; i++) {
      accordionEl[i].addEventListener('click', function () {
        this.parentNode.classList.toggle('is-open')
        const panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`
        }
      })
    }
  }

  // Tabs component
  const tabLinksAll = document.getElementsByClassName('tab-link')

  if (tabLinksAll.length) {
    for (let i = 0; i < tabLinksAll.length; i++) {
      tabLinksAll[i].addEventListener('click', function (e) {
        e.preventDefault()
        let tabLinksContainer = tabLinksAll[i].parentNode.parentNode
        let tabPanels = tabLinksContainer.nextElementSibling.getElementsByClassName(
          'tab-panel'
        )
        let tabLinks = tabLinksContainer.getElementsByClassName('tab-link')
        // Remove is-active class from all links and panels
        for (let i = 0; i < tabLinks.length; i++) {
          tabLinks[i].classList.remove('is-active')
        }
        for (let i = 0; i < tabPanels.length; i++) {
          tabPanels[i].classList.remove('is-active')
        }
        // Get the ID of panel to display
        let tabID = this.getAttribute('href')
        // Add is-active class to matching link and panel
        tabLinksAll[i].classList.add('is-active')
        document.querySelector(tabID).classList.add('is-active')
      })
    }
  }
})()

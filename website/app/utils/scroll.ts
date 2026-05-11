export const scrollToHashId = () => {
  if (typeof window === 'undefined') {
    console.log(`Can't scroll without 'window'`)
    return
  }
  const { hash } = window.location
  const normalisedHash = hash.replace(/^#/, '')
  const target = document.getElementById(normalisedHash)
  if (!target) {
    console.log(`Can't find # target ${JSON.stringify(normalisedHash)} (from ${JSON.stringify(hash)})`)
    return
  }
  target.scrollIntoView({
    behavior: 'instant' // this is done on page load so it shouldn't be smooth scrolling
  })
}
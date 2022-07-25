export default (url, target = '_blank') => {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', target)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

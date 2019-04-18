export async function loadTemplate(url) {
  const fetchResponse = await fetch(url)
  const templateText = await fetchResponse.text()
  const template = document.createRange().createContextualFragment(templateText)
  return template.firstChild
}

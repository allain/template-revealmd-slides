// headings trigger a new slide
// headings with a caret (e.g., '##^ foo`) trigger a new vertical slide
module.exports = async markdown => {
  return markdown.replace(/^##(\^)?([^#].*)$/gm, (match, vertical, heading) => {
    const isVertical = !!vertical
    return (isVertical ? '\n----\n\n' : '\n---\n\n') + '##' + heading
  })
}

var md = new markdownit()

fetch('./about-ccd.md')
  .then(function(response) {
    return response.text()
  })
  .then(function(body) {
    var html = md.render(body)
    document.getElementById('content').innerHTML = html
  })

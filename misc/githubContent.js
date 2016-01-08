var md = new markdownit()
var pathArr = window.location.pathname.split('/')
var fileName = pathArr[pathArr.length -1].split('.')[0] || 'index'
console.log(fileName)

fetch('./' + fileName + '.md')
  .then(function(response) {
    return response.text()
  })
  .then(function(body) {
    var html = md.render(body)
    document.getElementById('content').innerHTML = html
  })

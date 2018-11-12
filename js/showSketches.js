// function removejscssfile(filename, filetype){
//     var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
//     var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
//     var allsuspects=document.getElementsByTagName(targetelement)
//     for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
//     if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
//         allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
//     }
// }

function showSketches() {
  document.getElementById('main-container').style.display = 'flex'
  document.getElementById('container').style.display = 'none'
  // removejscssfile("noScroll.js", "js") //remove all occurences of "somescript.js" on page
}

function showHome() {
  document.getElementById('main-container').style.display = 'none'
  document.getElementById('container').style.display = 'flex'
}

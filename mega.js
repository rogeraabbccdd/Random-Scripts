const match = document.documentElement.innerText.match(/https:\/\/mega\.nz\/((folder|file)\/([^#]+)#(.+)|#(F?)!([^!]+)!(.+))/gm)
console.log(match.join('\n'))
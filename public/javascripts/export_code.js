var files = [];
var packageJson = 
{
    "name": "simpleApp",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "dependencies": {
        "express": "~4.14.0",
        "pug": "~2.0.0-beta6"

    },
    "scripts": {
        "start": "node ./app"

    }

}

files.push({
    name: "package.json",
    content: JSON.stringify(packageJson)
});

function exportCode() {
    var zip = new JSZip();
    var appCode = document.getElementById('codeBox').value;

    zip.folder("routes");

    files.push({
        name: "app.js",
        content: appCode
    });


    for (var i = 0, l = files.length; i < l; i++) {
        zip.file(files[i].name, files[i].content);
    }

    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "output.zip");
    })
}

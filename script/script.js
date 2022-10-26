const fileSelector = document.getElementById('myfile');

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);});
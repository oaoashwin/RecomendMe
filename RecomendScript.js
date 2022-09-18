const header = document.querySelector('#primary-header')
fetch('Sections/Header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})

const footer = document.querySelector('#primary-footer')
fetch('Sections/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})

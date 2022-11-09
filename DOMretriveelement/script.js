{/* <h1>HeadOne</h1>
<p id = "para">Para</p>
<h3 id ="headingThree" class = "cheadingThree" >headingThree</h3>
<ul>
    <li class = "fruit" name = "o">Apple</li>
    <li class = "fruit" name = "o">Mango</li>
    <li class = "fruit" name = "o">Banana</li>
    <li class = "fruit" name = "o">Grapes</li>
    <li class = "fruit" name = "o">Chikoo</li> */}

    let h1=document.querySelector('h1')
    let p=document.querySelector('p')
    let h3=document.querySelector('h3')

    console.log(h1)
    console.log(p)
    console.log(h3)

    let byid=document.querySelector('#headingThree')
    console.log(byid)

    let getbyid=document.getElementById('headingThree')
    console.log(getbyid)

    let getbyname=document.getElementsByClassName('cheadingThree')// html collection
    console.log(getbyname)

    console.log(h3.classList)

    h3.classList.add('one','two')
    h3.classList.remove('two')
    h3.classList.toggle('two')

    let byname=document.getElementsByName('o') //node list
    console.log(byname)
  

    let bytagname=document.getElementsByTagName('headingThree')// html collection
    console.log(bytagname)

    byid.setAttribute('head','four')

   let allli= document.querySelectorAll('li')
   console.log(allli)

   console.log(byid.getAttribute('head'))

   console.log(byid.getAttribute('id'))

   console.log(getbyname.getAttribute('id'))

   
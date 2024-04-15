function customRender(reactElement,mainContainer){
  //  const domElement = document.createElement(reactElement.type)
  //  domElement.innerHtml=reactElement.children
   // domElement.setAttribute('href',reactElement.props.href);
   // domElement.setAttribute('target',reactElement.target);
   // mainContainer.appendChild(domElementm)

   const domElement =doument.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for (const props in props) 
    {
        if(props==children){
            continue;
        }
        domElement.setAttribute(prop,reactElement)
    }
   }

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'

}

const mainContainer= document.querySelector('#id')

customRender(reactElement,mainContainer)


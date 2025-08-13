function customRender(reactElement,rootContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href',reactElement.props.herf)
    domElement.setAttribute('target',reactElement.props.target)
    rootContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'Click me to visit google'
}

const rootContainer = document.querySelector(".root");

customRender(reactElement,rootContainer)
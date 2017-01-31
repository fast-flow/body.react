import { Component } from "react"
import { render } from "react-dom"
import Body from "../index"

it('className', function () {
    render(
        (
            <Body className="abc" >
                <div>some abc</div>
            </Body>
        ),
        document.createElement('div')
    )
    document.body.appendChild(document.createElement('h1'))
    expect(document.body.innerHTML).toEqual('<div class="abc"><div data-reactid=".1">some abc</div></div><h1></h1>')
})


it('render some div', function () {
    // clear element
    document.body.innerHTML = ''
    var eDiv = document.createElement('div')
    eDiv.setAttribute('id', 'demo')
    document.body.appendChild(eDiv)
    render(
        (
            <Body className="a123" >
                <div>some 123</div>
            </Body>
        ),
        document.getElementById('demo')
    )
    expect(document.body.innerHTML).toEqual('<div id="demo"><div style="display:none;" data-react-component="node_modules/body.react" data-reactid=".2"></div></div><div class="a123"><div data-reactid=".3">some 123</div></div>')
})

# Basic

````css
.some-wrap {
    position: fixed;
    top:0px;
    left:0px;
    z-index: 9999;
    color:red;
}
````

<div id="example__basic_node" class="fast-flow-demo">loading...</div>

[./basic.demo.js](./basic.demo.js)

## document.createElement('div')

```js
ReactDOM.render(
    (
        <Body>
            <div>demos</div>
        </Body>
    ),
    document.createElement('div')
)
```

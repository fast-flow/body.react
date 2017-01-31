var ReactDOM = require('react-dom')
var React = require('react')
var Body = require('body.react').default
var App = React.createClass({
    componentWillMount: function () {
        var self = this
        setTimeout(function callee () {
            self.setState({
                time: new Date().getTime()
            })
            setTimeout(callee, 100)
        }, 100)
    },
    getInitialState: function () {
        return {
            time: new Date().getTime()
        }
    },
    render: function () {
        var self = this
        return (
            <Body className="some" >
                <div className="some-wrap">
                    render in body {self.state.time}
                </div>
            </Body>
        )
        /*
            error jsx
            <Body>
                render in body {self.state.time}
            </Body>
        */
    }
})
module.exports = App
console.log(React.DOM.div)

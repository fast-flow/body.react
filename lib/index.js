import "./index.css"
import classNames from "classnames"
import {Component, PropTypes} from "react"
import ReactDOM from "react-dom"

class Body extends Component {
  componentDidMount() {
    this.popup = document.createElement("div")
    document.body.appendChild(this.popup)
    this.renderLayer()
  }

  componentDidUpdate() {
    this.renderLayer()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup)
    document.body.removeChild(this.popup)
  }

  renderLayer() {
    this.popup.setAttribute('class', this.props.className)
    ReactDOM.render(this.props.children, this.popup)
  }

  render() {
    // Render a placeholder
    return <div style={{display:'none'}} data-react-component="node_modules/body.react" />
  }
}
Body.defaultProps = {
    className: ''
}
Body.propsTypes = {
    className: PropTypes.string
}
export default Body

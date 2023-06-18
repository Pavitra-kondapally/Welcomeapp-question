// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, buttonText: 'Subscribe'}

  clicking = () => {
    if (this.isSubscribed === true) {
      this.setState(() => ({isSubscribed: true, buttonText: 'Subscribed'}))
    } else {
      this.setState(() => ({isSubscribed: false, buttonText: 'Subscribe'}))
    }
  }

  render() {
    const {isSubscribed, buttonText} = this.state

    return (
      <div className="container">
        <h1 className="heading-styling">Welcome</h1>
        <p className="desc-styling">Thank you! Happy Learning</p>
        <button
          className="button-styling"
          type="button"
          onClick="this.clicking"
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome

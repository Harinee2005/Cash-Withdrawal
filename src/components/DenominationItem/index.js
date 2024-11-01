import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  withdrawMoney = () => {
    const {withdraw, denominationDetails} = this.props
    const {value} = denominationDetails
    withdraw(value)
  }

  render() {
    const {denominationDetails} = this.props
    const {value} = denominationDetails

    return (
      <li className="denomination-box">
        <button onClick={this.withdrawMoney} className="btn" type="button">
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem

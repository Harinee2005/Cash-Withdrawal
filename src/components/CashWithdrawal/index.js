import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="background">
        <div className="container">
          <div className="profile-container">
            <div className="profile">
              <p className="profile-pic">S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="balance-ruppee">{balance}</p>
              <p className="balance-hint">In Ruppees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="balance-title">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                withdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

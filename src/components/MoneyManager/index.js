import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const instantHistoryItems = []

class MoneyManager extends Component {
  state = {
    title: '',
    type: 'Income',
    amount: 0,
    historyList: instantHistoryItems,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  addHistory = event => {
    event.preventDefault()
    const {title, type, amount, balance} = this.state

    const newHistory = {
      id: uuidv4(),
      title,
      type,
      amount,
    }

    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        income: prevState.income + parseInt(amount),
      }))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expenses: prevState.expenses + parseInt(amount),
      }))
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      amount: '',
      title: '',
    }))
  }

  onChangeTitle = event => {
    console.log(event.target.value)
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onRemoveItem = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const {
      title,
      type,
      amount,
      historyList,
      balance,
      income,
      expenses,
    } = this.state

    return (
      <div className="app-container">
        <div className="title-container">
          <h1 className="title">Hi, Richard</h1>
          <p className="title-description">
            Welcome back to your <span className="link">Money Manager</span>
          </p>
        </div>
        <TransactionItem
          balance={balance}
          expenses={expenses}
          income={income}
        />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.addHistory}>
            <h1 className="form-heading">Add Transaction</h1>
            <label className="label" htmlFor="Title">
              TITLE
            </label>
            <input
              onChange={this.onChangeTitle}
              id="Title"
              className="input"
              type="text"
              placeholder="TITLE"
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              onChange={this.onChangeAmount}
              id="amount"
              className="input"
              type="text"
              value={amount}
            />
            <label className="label" htmlFor="type">
              Type
            </label>
            <select onChange={this.onChangeType} className="input">
              {transactionTypeOptions.map(eachOption => (
                <option
                  className="option"
                  value={eachOption.id}
                  key={eachOption.optionId}
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <div>
              <button className="button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-card">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <div> </div>
            </div>
            <ul>
              {historyList.map(eachItem => (
                <MoneyDetails
                  onRemoveItem={this.onRemoveItem}
                  moneyDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

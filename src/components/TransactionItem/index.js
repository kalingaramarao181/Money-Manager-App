import './index.css'

const TransactionItem = props => {
  const {balance, income, expenses} = props
  return (
    <div className="item-container">
      <div className="card green">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs: {balance}</p>
        </div>
      </div>
      <div className="card blue">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs: {income}</p>
        </div>
      </div>
      <div className="card violet">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs: {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem

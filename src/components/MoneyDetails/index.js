import './index.css'

const MoneyDetails = props => {
  const {moneyDetails, onRemoveItem} = props
  const {title, amount, type, id} = moneyDetails

  const onDeleteItem = () => {
    onRemoveItem(id)
  }

  return (
    <div className="history-card">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        onClick={onDeleteItem}
        data-testid="delete"
        className="delete-button"
        type="button"
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default MoneyDetails

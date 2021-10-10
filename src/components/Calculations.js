import React from 'react'

function Calculations({subCategories, profitMargin}) {
  const calcSerive = (service = false, nonProfit = false) => {
    var prices = []
    subCategories.map(sub => sub.active && prices.push(sub.price * sub.multi))
    console.log(prices)
    var sum = prices.reduce((a, b) => a + b, 0)
    var calculation;

    if (service) {
      calculation = sum * profitMargin
    } else if (nonProfit) {
      calculation = sum
    }
    return calculation
  }

  return (
    <>
      <div>
        <h2>Service Fee</h2>
        <div>
          <p>{calcSerive(true)}</p>
        </div>
      </div>

      <div></div>

      <div>
        <div>
          <h2>Non-Profit Charges</h2>
          <p>{calcSerive(false, true)}</p>
        </div>

        <div>
          <h2>Profit Charges</h2>
          <p>{calcSerive(true)}</p>
        </div>
      </div>

      <div>
        <h2>Total</h2>
        <p>£0.00</p>
      </div>
    </>
  )
}

export default Calculations

import React from 'react'
import { CalculationsWrap, Total } from './Calculations.style'
import { RiServiceLine } from 'react-icons/ri'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'

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
    <CalculationsWrap>
      <div>
        <div>
          <h4><RiServiceLine />Service Fee</h4>
          <div>
            <p>{calcSerive(true)}</p>
          </div>
        </div>

        <div></div>

        <div>
          <div>
            <h4><GiPayMoney />Non-Profit Charges</h4>
            <p>{calcSerive(false, true)}</p>
          </div>

          <div>
            <h4><GiReceiveMoney />Profit Charges</h4>
            <p>{calcSerive(true)}</p>
          </div>
        </div>

        <Total>
          <h4>Total</h4>
          <p>£0.00</p>
        </Total>
      </div>
    </CalculationsWrap>
  )
}

export default Calculations

import React from 'react'
import { CalculationsWrap, Total, Calculation, List, ListedItems } from './Calculations.style'
import { RiServiceLine } from 'react-icons/ri'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { BiPound as Pound } from 'react-icons/bi'

function Calculations({subCategories, profitMargin}) {
  const calcSerive = (service = false, nonProfit = false) => {
    var prices = []
    subCategories.map(sub => sub.active && prices.push(sub.price * sub.multi))
    var sum = prices.reduce((a, b) => a + b, 0)
    var calculation;

    if (service) {
      calculation = sum * profitMargin
    } else if (nonProfit) {
      calculation = sum
    }
    return calculation.toFixed(2)
  }

  var total = Number(calcSerive(false, true)) + (Number(calcSerive(true)) * 2)

  var selected = []
  subCategories.map(sub => sub.active ? selected.push(sub) : null)
  var showSelected = selected.map(sel => <List><p>{sel.title}</p><p><Pound /> {sel.price + sel.multi}</p></List>)

  return (
    <CalculationsWrap>
      <h2>Mark Thorne Groundworks</h2>

      <ListedItems>
        <h4>Listed Items</h4>
        {showSelected}
      </ListedItems>

      <div>
        <Calculation>
          <RiServiceLine />
          <h4>Service Fee</h4>
          <div>
            <Pound />
            <p>{calcSerive(true)}</p>
          </div>
        </Calculation>

        <div></div>

        <div>
          <Calculation>
            <GiPayMoney />
            <h4>Non-Profit Charges</h4>
            <div>
              <Pound />
              <p>{calcSerive(false, true)}</p>
            </div>
          </Calculation>

          <Calculation>
            <GiReceiveMoney />
            <h4>Profit Charges</h4>
            <div>
              <Pound />
              <p>{calcSerive(true)}</p>
            </div>
          </Calculation>
        </div>

        <Total>
          <h4>Total</h4>
          <div>
            <Pound />
            <p>{total}</p>
          </div>
        </Total>
      </div>
    </CalculationsWrap>
  )
}

export default Calculations

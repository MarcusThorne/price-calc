import { AppWrap, Categories, ChevronDown, ChevronUp, SubCategories, SubTitle, Title } from './App.style'
import { useState } from 'react'

function App() {
  const [ subCat, setSubCat ] = useState(false)
  const [ charge, setCharge ] = useState(0.00)
  const profitMargin = 0.2

  const categories = [
    { title: "Materials", subCategories: [ "Gabien Stone", "803", "Chippings", "Sub Soil", "Top Soil", "Concrete" ] },
    { title: "Plant Hire", subCategories: [] },
    { title: "Drainage", subCategories: [] },
    { title: "Building", subCategories: [] },
    { title: "Tarmac", subCategories: [] }
  ]

  const equipment = [
    { title: "Digger", price: 45 },
    { title: "Transit", price: 10 }
  ]

  const toggleSubCat = () => {
    setSubCat(!subCat)
  }

  return (
    <AppWrap>
      <Title>Quote Calculator</Title>

      <SubTitle>
        <h4>Non-profit</h4>
        <div></div>
        <h4>Profit</h4>
      </SubTitle>

      {
        categories.map(cat =>
          <>
            <Categories>
              <h2>{cat.title}</h2>
              {subCat ? <ChevronUp onClick={toggleSubCat} /> : <ChevronDown onClick={toggleSubCat} /> }

            </Categories>

              {cat.subCategories.map(sub =>
                <SubCategories display={subCat ? "flex" : "none"} height={subCat ? "100%" : "0" } >
                  <h4>{sub}</h4>
                  <div>
                    <i>£</i><input type="text" placeholder="0.00" maxLength="7" onChange={event => setCharge(event.target.value)} />
                    <p>£ {(charge * profitMargin).toFixed(2)}</p>
                  </div>
                </SubCategories>
              )}
          </>
        )
      }

      {
        equipment.map(eqip =>
          <div>
            <h2>{eqip.title}</h2>
            <div>
              £ <input type="number" value={eqip.price} />
            </div>
          </div>
        )
      }

      <div>
        <h2>Service Fee</h2>
        <div>
          <p>£0.00</p>
        </div>
      </div>

      <div></div>

      <div>
        <div>
          <h2>Non-Profit Charges</h2>
          <p>£0.00</p>
        </div>

        <div>
          <h2>Profit Charges</h2>
          <p>£0.00</p>
        </div>
      </div>

      <div>
        <h2>Total</h2>
        <p>£0.00</p>
      </div>
    </AppWrap>
  );
}

export default App;

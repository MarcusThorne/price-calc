import { AppWrap,  ChevronDown, ChevronUp, Title } from './App.style'
import { Categories, SubCategories, Pound, SubCatTitle, SubCatInputs } from './Category.style'
import { useState } from 'react'

function App() {
  const profitMargin = 0.2

  const [ categories, setCategories] = useState([
    { id: 1, title: "Materials", toggle: false },
    { id: 2, title: "Plant Hire", toggle: false },
    { id: 3, title: "Drainage", toggle: false },
    { id: 4, title: "Building", toggle: false },
    { id: 5, title: "Tarmac", toggle: false }
  ])

  const [ subCategories, setSubCategories ] = useState([
    { id: 100, category_id: 1, title: "Gabien Stone", price: 12.50, multi: 1, active: false },
    { id: 101, category_id: 1, title: "803", price: 0.00, multi: 1, active: false },
    { id: 102, category_id: 1, title: "Chippings", price: 0.00, multi: 1, active: false },
    { id: 103, category_id: 1, title: "Sub Soil", price: 0.00, multi: 1, active: false },
    { id: 104, category_id: 1, title: "Top Soil", price: 0.00, multi: 1, active: false },
    { id: 105, category_id: 1, title: "Concrete", price: 0.00, multi: 1, active: false },
    { id: 106, category_id: 2, title: "Digger", price: 0.00, multi: 1, active: false },
    { id: 107, category_id: 2, title: "Dumper", price: 0.00, multi: 1, active: false },
    { id: 108, category_id: 2, title: "Wacker", price: 0.00, multi: 1, active: false },
    { id: 109, category_id: 2, title: "Braker", price: 0.00, multi: 1, active: false },
    { id: 110, category_id: 2, title: "Digger", price: 0.00, multi: 1, active: false },
    { id: 111, category_id: 3, title: "Concrete", price: 0.00, multi: 1, active: false },
    { id: 112, category_id: 4, title: "Concrete", price: 0.00, multi: 1, active: false },
    { id: 113, category_id: 5, title: "Concrete", price: 0.00, multi: 1, active: false }
  ])

  const equipment = [
    { title: "Digger", price: 45 },
    { title: "Transit", price: 10 }
  ]

  const toggleSubCategory = (id) => {
    var index = categories.findIndex(category => category.id === id);
    let category = categories[index];
    category.toggle = !category.toggle

    setCategories([
      ...categories.slice(0,index),
      category,
      ...categories.slice(index+1)
    ]);
  }

  const selectedSubCategories = (categoryId, subCategories) => {
    var selected = []
    subCategories.map(subCategory => subCategory.category_id === categoryId && selected.push(subCategory))
    return selected
  }

  const updateObject = (value, subCategoryId, price=false, active=false) => {
    var index = subCategories.findIndex(subCategory => subCategory.id === subCategoryId);
    let subCategory = subCategories[index];

    if(price === true) {
      subCategory.price = value
    } else if (active === true) {
      subCategory.active = !subCategory.active
    } else {
      subCategory.multi = value
    }

    setSubCategories([
      ...subCategories.slice(0,index),
      subCategory,
      ...subCategories.slice(index+1)
    ])
  }

  // const findTitles = (title) => {
  //   var titles = []

  //   if(title === "Materials") {
  //     titles.push("Price per Tonne")
  //     titles.push("Tonnage")
  //   } else if(title === "Plant Hire") {
  //     titles.push("Price per Day")
  //     titles.push("Days")
  //   } else if(title === "Drainage") {
  //     titles.push("Price per Item")
  //     titles.push("Quantity")
  //   }

  //   return titles
  // }

  const calcSerive = (service=false, nonProfit=false) => {
    var prices = []
    subCategories.map(sub => sub.active && prices.push(sub.price * sub.multi))
    console.log(prices)
    var sum = prices.reduce((a, b) => a + b, 0)
    var calculation;

    if(service) {
      calculation = sum * profitMargin
    } else if (nonProfit) {
      calculation = sum
    }
    return calculation
  }

  return (
    <AppWrap>
      <Title>Quote Calculator</Title>

      {categories.map(category =>
        <>
          <Categories key={category.id}>
            <h2>{category.title}</h2>
            {category.toggle ? <ChevronUp onClick={() => toggleSubCategory(category.id)} /> : <ChevronDown onClick={() => toggleSubCategory(category.id)} />}
          </Categories>

          {/* {category.toggle && <SubCatColumns><h4>{findTitles(category.title)[0]}</h4><h4>{findTitles(category.title)[1]}</h4><h4>Non-profit</h4><h4>Profit</h4></SubCatColumns>} */}
            {selectedSubCategories(category.id, subCategories).map(subCategory =>
              <SubCategories key={subCategory.id} display={category.toggle ? "flex" : "none"} >
                <SubCatTitle>
                  <input type="checkbox" onChange={event => updateObject(event.target.value, subCategory.id, false, true)} />
                  <h4>{subCategory.title}</h4>
                </SubCatTitle>

                <SubCatInputs>
                  <div>
                    <Pound></Pound>
                    <input type="text" placeholder={subCategory.active ? subCategory.price : "-"} maxLength="7" onChange={event => updateObject(event.target.value, subCategory.id, true)} />
                  </div>

                  <input type="text" placeholder={subCategory.active ? subCategory.multi : "-"} maxLength="7" onChange={(event) => updateObject(event.target.value, subCategory.id)} />
                  { !subCategory.active ? <p>-</p> : <p>£ {(subCategory.price * subCategory.multi).toFixed(2)}</p> }
                  { !subCategory.active ? <p>-</p> : <p>£ {((subCategory.price * subCategory.multi) * profitMargin).toFixed(2)}</p> }
                </SubCatInputs>

              </SubCategories>
            )}
        </>
      )}

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
    </AppWrap>
  );
}

export default App;

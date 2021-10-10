import { AppWrap,  ChevronDown, ChevronUp, Title } from './components/App.style'
import { useState } from 'react'
import Categories from './components/Categories'
import Equipment from './components/Equipment'
import Calculations from './components/Calculations'

function App() {
  const profitMargin = 0.2

  const [categories, setCategories] = useState([
    { id: 1, title: "Materials", toggle: true },
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

  return (
    <AppWrap>
      <Title>Quote Calculator</Title>
      <h3>Selected Items</h3>
      <Categories categories={categories} subCategories={subCategories} setSubCategories={setSubCategories} setCategories={setCategories} profitMargin={profitMargin} />
      <h3>Owned Equipment</h3>
      <Equipment equipment={equipment} />
      <Calculations subCategories={subCategories} profitMargin={profitMargin} />
    </AppWrap>
  );
}

export default App;

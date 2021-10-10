import React from 'react'
import { CategoryWrap, CategoriesTitle, SubCategories, Pound, SubCatTitle, SubCatInputs, ToggleButton } from './Category.style'
import { BsChevronDown as ChevronDown, BsChevronUp as ChevronUp } from 'react-icons/bs'

function Categories({categories, subCategories, setCategories, setSubCategories, profitMargin}) {
  const toggleSubCategory = (id) => {
    setFalse()
    var index = categories.findIndex(category => category.id === id);
    let category = categories[index];
    category.toggle = true

    setCategories([
      ...categories.slice(0, index),
      category,
      ...categories.slice(index + 1)
    ]);
  }

  const setFalse = () => {
    var index = categories.findIndex(category => category.toggle === true);
    let category = categories[index];
    category.toggle = !category.toggle

    setCategories([
      ...categories.slice(0, index),
      category,
      ...categories.slice(index + 1)
    ]);
  }

  const selectedSubCategories = (categoryId, subCategories) => {
    var selected = []
    subCategories.map(subCategory => subCategory.category_id === categoryId && selected.push(subCategory))
    return selected
  }

  const updateObject = (value, subCategoryId, price = false, active = false) => {
    var index = subCategories.findIndex(subCategory => subCategory.id === subCategoryId);
    let subCategory = subCategories[index];

    if (price === true) {
      subCategory.price = value
    } else if (active === true) {
      subCategory.active = !subCategory.active
    } else {
      subCategory.multi = value
    }

    setSubCategories([
      ...subCategories.slice(0, index),
      subCategory,
      ...subCategories.slice(index + 1)
    ])
  }

  return (
    <CategoryWrap>
      <CategoriesTitle>
        {categories.map(category =>
          <h2 key={category.id} onClick={() => toggleSubCategory(category.id)}>{category.title}</h2>
        )}
      </CategoriesTitle>

      {categories.map(category =>
        <>
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
                {!subCategory.active ? <p>-</p> : <p>£ {(subCategory.price * subCategory.multi).toFixed(2)}</p>}
                {!subCategory.active ? <p>-</p> : <p>£ {((subCategory.price * subCategory.multi) * profitMargin).toFixed(2)}</p>}
              </SubCatInputs>
            </SubCategories>
          )}
        </>
      )}
    </CategoryWrap>
  )
}

export default Categories

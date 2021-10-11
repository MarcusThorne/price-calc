import React from 'react'
import { CategoryWrap, CategoriesTitle, SubCategories, Pound, SubCatTitle, SubCatInputs, Title, Tick } from './Categories.style'
// import { BsChevronDown as ChevronDown, BsChevronUp as ChevronUp } from 'react-icons/bs'

function Categories({categories, subCategories, setCategories, setSubCategories, profitMargin}) {
  const toggleSubCategory = (id) => {
    setFalse()
    var index = categories.findIndex(category => category.id === id);
    let category = categories[index];
    category.toggle = !category.toggle

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

    if (price) {
      subCategory.price = value
    } else if (active) {
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

  const findTitles = (id) => {
    var titles = []
    if(id === 1){
      titles = ["Price Per Tonne", "Quantity", "Non-Profit", "Profit"]
    }else if(id === 2){
      titles = ["Price Per Day", "Days", "Non-Profit", "Profit"]
    }

    return titles
  }

  return (
    <CategoryWrap>
      <CategoriesTitle >
        {categories.map(category =>
          <Title bgColor={category.toggle ? "white" : "#F5F6F7"} color={category.toggle ? "dodgerblue!important" : "rgb(50, 50, 50)"} border={category.toggle === true ? "2px solid dodgerblue" : "none"} key={category.id} onClick={() => toggleSubCategory(category.id)}>{category.title}</Title>
        )}
      </CategoriesTitle>

      {categories.map(category =>
        <>
          <SubCatInputs display={category.toggle ? "grid" :"none"} style={{marginLeft: "21rem", marginTop: "1rem", textAlign: "center"}}>
            {findTitles(category.id).map(title =>
              <h4>{title}</h4>
            )}
          </SubCatInputs>

          {selectedSubCategories(category.id, subCategories).map(subCategory =>
            <SubCategories key={subCategory.id} display={category.toggle ? "flex" : "none"} >
              <SubCatTitle>
                <Tick onClick={event => updateObject(event.target.value, subCategory.id, false, true)} color={subCategory.active ? "dodgerblue" : "rgba(100, 100, 100, 0.5)"} />
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

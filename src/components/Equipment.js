import React from 'react'
import { CategoryWrap, SubCategories, SubCatTitle, Tick, Pound, SubCatInputs } from '../components/Categories.style'

function Equipment({equipment, setEquipment, profitMargin}) {
  const updateObject = (value, id, price=false, active=false) => {
    var index = equipment.findIndex(e => e.id === id);
    let currentEquipment = equipment[index];

    if(price){
      currentEquipment.price = value
    } else if(active) {
      currentEquipment.active = !currentEquipment.active
    } else {
      currentEquipment.multi = value
    }

    setEquipment([
      ...equipment.slice(0, index),
      currentEquipment,
      ...equipment.slice(index + 1)
    ])
  }

  return (
    <>
      <CategoryWrap>
        {equipment.map(eqip =>
          <SubCategories display={"flex"}>
            <SubCatTitle>
              <Tick onClick={event => updateObject(event.target.value, eqip.id, false, true)} color={eqip.active ? "dodgerblue" : "rgba(100, 100, 100, 0.5)"} />
              <h4>{eqip.title}</h4>
            </SubCatTitle>

            <SubCatInputs>
              <div>
                <Pound></Pound>
                <input type="text" placeholder={eqip.active ? eqip.price : "-"} maxLength="7" onChange={event => updateObject(event.target.value, eqip.id, true)} />
              </div>

              <input type="text" placeholder={eqip.active ? eqip.multi : "-"} maxLength="7" onChange={(event) => updateObject(event.target.value, eqip.id)} />
              {!eqip.active ? <p>-</p> : <p>£ {(eqip.price * eqip.multi).toFixed(2)}</p>}
              {!eqip.active ? <p>-</p> : <p>£ {((eqip.price * eqip.multi) * profitMargin).toFixed(2)}</p>}
            </SubCatInputs>
          </SubCategories>
        )}
      </CategoryWrap>
    </>
  )
}

export default Equipment

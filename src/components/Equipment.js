import React from 'react'
import { Title, EquipmentWrap } from './Equipment.style'

function Equipment({equipment}) {
  return (
    <>
      <Title>Owned Equipment</Title>
      <EquipmentWrap>
        {equipment.map(eqip =>
          <div>
            <h2>{eqip.title}</h2>
            <div>
              £ <input type="number" value={eqip.price} />
            </div>
          </div>
        )}
      </EquipmentWrap>
    </>
  )
}

export default Equipment

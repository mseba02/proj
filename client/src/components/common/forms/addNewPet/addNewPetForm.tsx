import React, { FC, useState } from 'react'
import { useAddNewPet } from '../../../../hooks/forms/useAddNewPet'
import { judete } from '../../../../utils/selectValues/judete'
const AddNewPetForm: FC = () => {
  const { onSubmit, register, errors, clearErrors, setValue, control } =
    useAddNewPet()

  return (
    <section className="py-5">
      <form onSubmit={onSubmit}>
        {/* to do */}
        <input type="submit" />
      </form>
    </section>
  )
}

export default AddNewPetForm

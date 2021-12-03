//_____create a Field

function createField(arr) {
  const field = []
  for (let i = 0; i < 5; i++) {
    field.push([...arr[i].querySelectorAll('.p6FieldElement')])
  }
  return field
}

export default createField([...document.querySelectorAll('.p6FieldRow')])
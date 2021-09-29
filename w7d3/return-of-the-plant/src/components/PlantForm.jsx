import { useState } from "react"

export default function PlantForm(props){
  const [formData, setFormData] = useState({
      name:"",
      type:"",
      lightNeeds:"",
      wateringInterval:""
  })


  const handleChange = (event) => {
    const newFormData = {...formData}

    console.log(event.target)
    if(event.target.name === "wateringInterval"){
      newFormData[event.target.name] = Number(event.target.value)
    } else {
      newFormData[event.target.name] = event.target.value
    }

    setFormData(newFormData)
  }

  const handleChangeButFancy = (event) => {
    const {name, value} = event.target

    setFormData({...formData, [name]:value})
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange}/>
      <input type="text" name="type" placeholder="type" value={formData.type} onChange={handleChange}/>
      <input type="text" name="lightNeeds" placeholder="lightNeeds" value={formData.lightNeeds} onChange={handleChange}/>
      <input type="text" name="wateringInterval" placeholder="wateringInterval" value={formData.wateringInterval} onChange={handleChange}/>
      <button type="submit">Add plant</button>
    </form>
  )
}
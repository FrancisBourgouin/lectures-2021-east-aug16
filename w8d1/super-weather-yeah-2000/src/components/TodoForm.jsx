import { useState } from "react"

export default function TodoForm(props){
  const [formData, setFormData] = useState({
    name:"",
    description:""
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    const updatedFormData = {...formData}
    updatedFormData[name] = value

    setFormData(updatedFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onSubmit(formData)
    
    setFormData({name:"", description:""})
  }
  
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name of todo"
        onChange={handleChange}
        value={formData.name}
      />
      <input 
        type="text" 
        name="description" 
        placeholder="Description of todo"
        onChange={handleChange}
        value={formData.description}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}
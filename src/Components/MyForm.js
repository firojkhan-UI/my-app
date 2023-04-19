import { useState } from "react";

const MyForm = () => {
    const [ state, setState ] = useState({
        name: '',
        city: '',
        cont: ''
    })

    const [ data, setData ] = useState()

const _handleChange = e => {
    setState ({
        ...state,
        [e.target.id]: e.target.value
    })
}
   

    const _items = e => {
        setData(state)
        setState({
            ...state,
            name:'',
            city: '',
            cont:''
        })
        e.preventDefault();
      
    }
    console.log(data,"data::::")
    return (
        <>
        <form onSubmit={_items}>
            <label>Name: <input value={state.name} id='name' onChange={_handleChange} /> </label>
            <label>City: <input value={state.city} id='city' onChange={_handleChange}  /> </label>
            <label>Cont: <input value={state.cont} id='cont' onChange={_handleChange}  /> </label>
            <button>Submit</button>
        </form>
        </>
    )
}
export default MyForm;
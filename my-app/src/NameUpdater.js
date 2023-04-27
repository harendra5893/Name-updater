import React,{useState} from 'react'

const NameUpdater = () => {
    const[name, setName] = useState("");
    const[updated, setupdated] = useState(name);

    function handleChange(e){
       setName(e.target.value);
    }

    const handleClick = () =>{
        setupdated(name)
    }

  return (
    <div>
        <input type='text' name='name' placeholder='Add your name ...' onChange={handleChange}></input>
        <input type='submit' name='submit' onClick={handleClick}/>
        <p>Hi my name is {updated}</p>
    </div>
  )
}
export default NameUpdater;

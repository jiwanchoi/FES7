import React,{usestate}from 'react'

export default function App2() {
    const [name, setName] = usestate('');
    const [id, setId] = usestate('');
    const inputName = useRef(null);
    const inputId = useRef(null);


    function handleInputName(event){
        setName(event.target.value);
    }
    function handleInputId(event){
        setId(event.target.value);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='id 입력'onChange={handleInputName} ref={inputName}/>
            <input type="text" placeholder='이름 입력'onChange={handleInputId} ref={inputId}/>
        </form>
    </>
  )
}

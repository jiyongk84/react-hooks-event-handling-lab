// Code Keypad Component Here

function Keypad (){
    function handleInput (event) {
        console.log("Entering password...")
    }



    return (
        <div>
            <input
             type="password" 
             onChange={handleInput} />
        </div>
    )
}

export default Keypad;
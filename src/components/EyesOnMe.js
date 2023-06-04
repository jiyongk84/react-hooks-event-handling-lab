// Code EyesOnMe Component Here
function EyesOnMe () {
    handleFocus = () => {
        console.log("Good!")
    }
    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button
        onFocus={handleFocus}
        onBlur={handleBlur}
        >Eyes on me
        </button>
    )
}

export default EyesOnMe;
import "./style.css"

const NameCard = ({name , age , gender}) => {
    const changeBackgroundColor = (gender) =>{
        if (gender === "male"){
            return "male--bgcolor"
        }else{
            return "female--bgcolor"
        }
    }
    
    return (
        <div className={`namecard ${changeBackgroundColor(gender)}`}>
            <p className="namecard__info name">Name : {name}</p>
            <p className="namecard__info age">Age : {age}</p>
            <p className="namecard__info gender">Gender : {gender}</p>
        </div>
    )
}

export default NameCard;
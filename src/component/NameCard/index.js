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
            <div className="namecard__info name">Name : {name}</div>
            <div className="namecard__info age">Age : {age}</div>
            <div className="namecard__info gender">Gender : {gender}</div>
        </div>
    )
}

export default NameCard;
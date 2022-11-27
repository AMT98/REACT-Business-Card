export const ContactButtons = () => {
    return (
        <div id="contactButtons">
        <button className="emailButton" >
            <img id="emailIcon" src={require("./images/emailIcon.png")} alt= "email icon"></img>
            <h4>Email</h4>
        </button>
        <button className="linkedinButton">
            <img id="linkedinIcon" src= {require("./images/linkedinIcon.png")} alt="linkedin logo"></img>
            <h4>LinkedIn</h4>
        </button>
        </div>
    )
}
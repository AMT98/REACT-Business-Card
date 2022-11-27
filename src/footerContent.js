export const Footer = () => {
    return (
        <div id="footerContainer">
            <img className="footerIcons" src={require("./images/facebookIcon.png")} alt= "facebookIcon"></img>
            <img className="footerIcons" src= {require("./images/instagramIcon.png")} alt="instagramIcon"></img>
            <img className="footerIcons" src={require("./images/githubIcon.png")} alt="githubIcon"></img>
            <img className="footerIcons" src ={require("./images/gitIcon.png")} alt="gitIcon"></img>
        </div>
    )
}
import image from "../assets/images/callsense.png";

export const ProjectDescription = ({projectTitle, projectDescription, projectLiveLink, image}) => {
    return (
        <>
            <div className="col-sm-12 pt-4 pb-4 col-md-6 col-lg-3">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                        <a href="#" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from "react";
import "./NotFoundPage.css"
import notFoundImg from "../../images/robot-404.png"


function NotFoundPage() {
  return (
    <div className="NotFoundPage">
     <h1>404 - Page Not Found</h1>
     <div>
        <img className="img-404" src={notFoundImg}  alt="404" style={{width:'500px'}}/>
        <h3 className="textShadow">Oops the page you are looking for does not exit!</h3>
     </div>
     <p><a href="/" className='btn btn-success boxShadow  mx-2'>Go back home</a></p>
    </div>
  );
}

export default NotFoundPage;

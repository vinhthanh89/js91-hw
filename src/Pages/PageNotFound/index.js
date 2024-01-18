import {EmojiFrown} from "react-bootstrap-icons"

import "./style.css";


const PageNotFound = () => {
    return(
        <div className="pagenotfound">
            <EmojiFrown className="icon"/>
            <h3>404</h3>
            <h4>Page Not Found</h4>
        </div>
    )
}

export default PageNotFound
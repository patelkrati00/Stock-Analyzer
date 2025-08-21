import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RelevantTopic = ({icon,

  heading,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
}) => {
  return (
    <>
      
          <div className=" mt-5">
            <p className="mb-4 fs-5">
                 <FontAwesomeIcon icon={icon} /> {" "}
              {heading}
            </p>
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title1}
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title2}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title3}{" "}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title4}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title5}{" "}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title6}
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "3" }}>
              {title7}
            </a>
            <br />
          </div>
        
    </>
  );
};

export default RelevantTopic;

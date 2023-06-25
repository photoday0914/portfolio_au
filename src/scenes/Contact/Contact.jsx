import s from "./Contact.module.scss";
import { ReactComponent as FilesIcon } from "../../assets/contact-us.svg";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/UIElements/Button/Button";
import EmailManager from "./EmailManager";

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <div>
            <p className={s.title}>Contact Me</p>
            <br />
            
            <p className={s.smallText} style={{textAlign:"left"}}>
              You can message me, I will reply within 24 hours.
              <br/>
              I can help you with React, AWS, NodeJS, Python, CI/CD, etc.
            </p>
            <br />
            <br />
            <p className={s.smallText} style={{textAlign:"left"}}>PHONE NUMBER : +1 (925) 526-5141</p>
            <br />      
            <p className={s.smallText} style={{textAlign:"left"}}>EMAIL ID : phillip8728@gmail.com</p>
            <br />
            <div>
              <p className={s.smallText} style={{textAlign:"left"}}>LOCATION : Queensland, Australlia</p>              
              <br />
              <Button
                style={{ margin: "auto", width: "15rem" }}
                className="primary"
                href="https://www.google.com/maps/place/Victoria+Towers+Over+50%E2%80%99s+Apartments/@-27.9712309,153.4152006,3a,75y,278.3h,75.48t/data=!3m6!1e1!3m4!1sJbkJ4gDBTKOhz-iYqUoKZQ!2e0!7i16384!8i8192!4m9!1m2!2m1!1sAUSTRALIA+FAIR,+QLD!3m5!1s0x6b910ff32584e481:0xa1d0c896592c3b0a!8m2!3d-27.9711446!4d153.4149004!16s%2Fg%2F1yl467xlr?entry=ttu"
                target="_blank"
              >
                View On Google Maps
              </Button>
            </div>
          </div>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <br />
        <br />
      </div>
      <EmailManager style={{ margin: "auto" }} />
    </BaseLayout>
  );
};

export default Resume;

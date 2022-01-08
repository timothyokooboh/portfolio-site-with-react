import Button from "../button/Button";

const CvDownloadButton = ({ downloadCV }) => {
    return ( 
        <div onClick={() => downloadCV("#cv")}>
            <Button 
                bgColor="#FF6464" 
                color="#fff"
            >
                Download resume
            </Button>

            <a href="../Timothy_Okooboh_CV.pdf" hidden download id="cv"> </a>
        </div>
    );
}
 
export default CvDownloadButton;
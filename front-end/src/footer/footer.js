import style from "./footer.module.css"

function Footer({modeSetting,mode}){
    return (
      <div className={style.FooterMain}>
        <div className={style.moonContainer}>
            <div className={mode?style.moon:style.sun} onClick={modeSetting}></div>
        </div>
      </div>
    );
}

export default Footer;
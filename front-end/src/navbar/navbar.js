import style from "./navbar.module.css"
import {useState} from "react"

function Navbar(){
    const [light, setLight] =useState(false)
    const [menuBurger,setMenuBurger] = useState(false)

    function ChangingLightOptions(){
        if(light){
            setLight(false);
        }else{
            setLight(true)
        }
    }

    function ChangingBurgerMenu() {
      if (menuBurger) {
        setMenuBurger(false);
      } else {
        setMenuBurger(true);
      }
      console.log(menuBurger)
    }


    return (
      <section className={style.navbarBackground}>
        <div className={style.colourSwitch}>
          <div
            className={style.colourSwitchButtonBox}
            onClick={() => {
              ChangingLightOptions();
            }}
          >
            <p>
              <span className={style.eachLetter}>h</span>
              <span className={style.eachLetter}>i</span>
              <span className={style.eachLetter}>g</span>
              <span className={style.eachLetter}>h</span>
            </p>
            <p>
              <span className={style.eachLetter}>l</span>
              <span className={style.eachLetter}>o</span>
              <span className={style.eachLetter}>w</span>
            </p>

            <div
              className={style.flipperButton}
              style={
                light
                  ? {
                      left: "50%",
                      transition: "left .1s linear",
                      filter:
                        "drop-shadow(-4px 0px 7px rgba(255, 255, 255, .6))",
                    }
                  : {
                      left: "0px",
                      transition: "left .1s linear",
                      filter:
                        "drop-shadow(4px 0px 7px rgba(255, 255, 255, .6))",
                    }
              }
            ></div>
          </div>
        </div>
        <div className={style.burgerMenu}>
          <div
            className={
              menuBurger
                ? style.burgerMenuBarContainerActive
                : style.burgerMenuBarContainer
            }
            onClick={() => {
              ChangingBurgerMenu();
            }}
          >
            {!menuBurger ? (
              <>
                <div
                  className={
                    (style.mobileBurgerBar)
                  }
                ></div>
                <div className={style.mobileBurgerBar}></div>
                <div
                  className={
                    (style.mobileBurgerBar)
                  }
                ></div>
              </>
            ) : (
              <>
                <div className={style.mobileBurgerBarLeft}></div>
                <div className={style.mobileBurgerBar}></div>
                <div className={style.mobileBurgerBarRight}></div>
              </>
            )}
          </div>
        </div>
      </section>
    );
}

export default Navbar;
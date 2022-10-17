import style from "./navbar.module.css"
import {useState} from "react"

function Navbar({mode}){
    const [light, setLight] =useState(false)
    const [menuBurger,setMenuBurger] = useState(false)
    const [slowFade, setSlowFade]= useState(true)

    const menuOptions=['home','about me','services','projects','contact me']

    function ChangingLightOptions(){
        if(light){
            setLight(false);
        }else{
            setLight(true)
        }
    }

    function ChangingBurgerMenu() {
      if (menuBurger) {
        setSlowFade(true)
         setTimeout(() => {
           setMenuBurger(false);
         }, 1000);
      } else {
        setMenuBurger(true);
        setSlowFade(false)
       
      }
      console.log(menuBurger)
    }

    


    return (
      <section className={style.navbarBackground}>
        <div className={style.navbarBackgroundVisible}>
          <div className={style.colourSwitch}>
            <div
              className={`${style.colourSwitchButtonBox} ${
                mode
                  ? style.colourSwitchButtonBoxLight
                  : style.colourSwitchButtonBoxDark
              }`}
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
                className={`${style.flipperButton} ${
                  mode
                    ? style.colourSwitchButtonBoxLight
                    : style.colourSwitchButtonBoxDark
                }`}
                style={
                  light
                    ? {
                        left: "50%",
                        // transition: "left .1s linear",
                        filter:
                          "drop-shadow(-4px 0px 7px rgba(255, 255, 255, .6))",
                      }
                    : {
                        left: "0px",
                        // transition: "left .1s linear",
                        filter:
                          "drop-shadow(4px 0px 7px rgba(255, 255, 255, .6))",
                      }
                }
              ></div>
            </div>
          </div>
          <div className={style.burgerMenu}>
            <div
              className={`${style.burgerMenuBarContainer} ${
                mode
                  ? style.colourSwitchButtonBoxLight
                  : style.colourSwitchButtonBoxDark
              } `}
              onClick={() => {
                ChangingBurgerMenu();
              }}
            >
              {!menuBurger ? (
                <>
                  <div
                    className={`${
                      light
                        ? style.mobileBurgerBarLight
                        : style.mobileBurgerBarDark
                    }`}
                  ></div>

                  <div
                    className={`${
                      light
                        ? style.mobileBurgerBarLight
                        : style.mobileBurgerBarDark
                    }`}
                  ></div>
                </>
              ) : (
                <>
                  <div
                    className={`${
                      light
                        ? style.mobileBurgerBarLeftLight
                        : mode
                        ? style.mobileBurgerBarLeftDark
                        : style.mobileBurgerBarLeftDarkMode
                    }`}
                  ></div>

                  <div
                    className={`${
                      light
                        ? style.mobileBurgerBarRightLight
                        : mode
                        ? style.mobileBurgerBarRightDark
                        : style.mobileBurgerBarRightDarkMode
                    }`}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            menuBurger ? style.navbarBackgroundInvisible : style.hiddenVisible
          } ${slowFade ? style.flowingOutAnimation : {}}`}
        >
          <div
            className={`${style.navbaroptionsLeft} ${style.flowingInAnimation}`}
          >
            <div
              className={`${style.navbaroptionsLeftHolder}${style.flowingInAnimation}`}
            >
              {menuOptions.map((input) => {
                const inputSplit = input.split("");

                return (
                  <div key={input}>
                    <p
                      className={`${light ? mode?style.menuLight:style.menuLightDarkMode : mode?style.menuDark:style.menuDarkMode} ${
                        style.menuInvisibleP
                      }`}
                    >
                      {inputSplit.map((spanInput) => {
                        return (
                          <span className={style.eachLetterMenu}>
                            {spanInput}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${style.navbaroptionsRight} ${style.flowingInAnimation}`}
          >
            <div
              className={`${
                light
                  ? style.navbarVerticalBarLight
                  : mode
                  ? style.navbarVerticalBarDark
                  : style.navbarVerticalBarDarkMode
              } `}
            ></div>
          </div>
        </div>
      </section>
    );
}

export default Navbar;
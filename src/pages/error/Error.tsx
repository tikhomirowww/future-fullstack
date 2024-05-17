import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  const moveIt = () => {
    const y = Math.floor(Math.random() * 301);
    const x = Math.floor(Math.random() * 401);
    const cobj = getObj("button1");
    if (ie4) {
      cobj!.style.top = y + "px";
      cobj!.style.left = x + "px";
    } else if (ns6) {
      cobj!.style.top = y + "px";
      cobj!.style.left = x + "px";
    }
  };

  const getObj = (objID: string) => {             
    if (document.getElementById) {
      return document.getElementById(objID);
    } else if (document.all) {
      return (document.all as unknown as { [key: string]: HTMLElement })[objID];
    }
  };
  
  const ie4 = document.all;
  const ns6 = typeof document.getElementById === 'function' && !document.all;
  
  

  return (
    <div className={styles.errorPage}>
            <img src="https://freefrontend.com/assets/img/500-error-page-html-templates/HTML-CSS-500-Internal-Error-Page.png" alt=""  />
      <div className="container">
      <h2>Нравится ли вам мороженное?</h2>
      <p>
        <button
          className={styles.leftBtn}
         onClick={() => { window.location.reload()}}
        >
          НЕТ
        </button>
        <span
          id="button1"
          style={{ position: "relative", zIndex: 10 }}
          onMouseOver={moveIt}
          onFocus={() => {
            moveIt();
            (document.activeElement as HTMLInputElement).blur();
          }}
        >
          <button
            className={styles.rightBtn}
            onClick={() => {alert('Невозможно')}}
            onMouseDown={moveIt}
            onMouseOver={moveIt}
            onFocus={() => {
              moveIt();
              (document.activeElement as HTMLInputElement).blur();
            }}
          >
            ДА
          </button>
        </span>
      </p>
      </div>

    
    </div>
  );
};

export default Error;

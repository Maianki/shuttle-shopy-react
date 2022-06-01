import React, { useState, useEffect } from "react";
import { IcBaselineArrowUpward } from "../../assets/icons";
import "./scrolltotop.css";

export function ScrollToTop() {
  const [toggleScrollBtn, setToggleScrollBtn] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setToggleScrollBtn(true);
      } else {
        setToggleScrollBtn(false);
      }
    });
  }, []);

  if (toggleScrollBtn) {
    return (
      <button
        class='btn btn-fab align-items-center fab-position'
        onClick={scrollToTopHandler}
      >
        <IcBaselineArrowUpward />
      </button>
    );
  } else {
    return null;
  }
}

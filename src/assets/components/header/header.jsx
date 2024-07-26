import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeader } from "./headerStyling";
import navigationLinks from "./navigationLinks";
import { useMediaQuery } from "react-responsive";
import { closeMenu } from "../../redux/features/menuOpenSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const $darkMode = useSelector((state) => state.$darkMode);
  const language = useSelector((state) => state.language);
  const $menuOpen = useSelector((state) => state.$menuOpen);
  const $isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    if (!$isMobile) {
      dispatch(closeMenu());
    }
  }, [$isMobile, dispatch]);

  return (
    <StyledHeader
      $darkMode={$darkMode}
      $menuOpen={$menuOpen}
      $isMobile={$isMobile}
      role="navigation"
    >
      {navigationLinks ? (
        navigationLinks.map((link) => (
          <Link
            to={link.path}
            key={link.index}
            aria-label={`Link to the ${link.nameEn} page`}
            tabIndex={0}
            onClick={() => {
              dispatch(closeMenu());
            }}
          >
            {language === "en" ? link.nameEn : link.nameSv}
          </Link>
        ))
      ) : (
        <p>No Links available...</p>
      )}
    </StyledHeader>
  );
}

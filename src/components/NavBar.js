import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const link=links.map((url) => {
    return (<a key={url} href={`#${url}`}>{url}</a>)
  })

  return <nav>{link}</nav>;
}

export default NavBar;

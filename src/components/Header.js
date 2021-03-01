import React from 'react';

function Header(){
return (
<header id="navHead">
  <div className="container">
    <a href="index.html" id="nameBanner"> Tim Hackel</a>
     <nav class="navbar navbar-expand-lg navbar-light">
          <a class="nav-link" href="/Aboutme">About Me</a>
          <a class="nav-link" href="/Portfolio">My Portfolio</a>
          <a class="nav-link" href="/Contact">Contact<span class="sr-only">(current)</span></a>
     </nav>
  </div>
</header>
)
}


export default Header
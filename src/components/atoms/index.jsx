const Navitemes= ({path,name})=>{
    return(
        <li class="nav-item">
        <a class="nav-link" href= {path}>{name}</a>
      </li>

    );
}
export default Navitemes;
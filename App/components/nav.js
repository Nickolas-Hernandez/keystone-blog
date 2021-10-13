function Nav({ categories }) {
  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} /> // add key
    );
  });
  return (
    <nav>
      <ul className="nav-links">{tabs}</ul>
    </nav>
  );
}

function CategoryTab ({ categoryName }){
  const url = `/${categoryName}`;
  return (
    <li className="nav-link"><a href={url}>{categoryName}</a></li>
  );
}

export default Nav;

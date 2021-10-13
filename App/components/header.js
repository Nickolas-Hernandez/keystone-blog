import Link from 'next/link';


function Header({ categories }) {
  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} /> // add key
    );
  });
  return(
    <>
    <header className="section-header container">
        <h1 className="logo">The Dev Post</h1>
    </header>
    <nav>
      <ul className="nav-links">{tabs}</ul>
    </nav>
    </>
  );
}

function CategoryTab ({ categoryName }){
  const url = `/${categoryName}`;
  return (
    <li className="nav-link"><a href={url}>{categoryName}</a></li>
  );
}

export default Header;

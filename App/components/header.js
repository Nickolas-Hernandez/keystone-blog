import Link from 'next/link';


function Header({ categories }) {
  console.log("lur", categories);
  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} /> // add key
    );
  });
  return(
    <>
      <h1>The Dev Post</h1>
      <ul>{tabs}</ul>
    </>
  );
}

function CategoryTab ({ categoryName }){
  const url = `/${categoryName}`;
  return (
    <li><a href={url}>{categoryName}</a></li>
  );
}

export default Header;

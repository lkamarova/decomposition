import Rubric from "../Rubric";

const NavBar = ({ data }) => {
    return (
        <div className="navBarWrap">
           {data.map((rubric, index) => <Rubric key={index} {...rubric} />)}
        </div>
    )
};

export default NavBar;

//отображает рубрики в виде навбара в центре страницы
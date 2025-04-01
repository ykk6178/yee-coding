import { Link, useLocation } from "react-router-dom";
import "../assets/styles/components/Breadcrumbs.scss";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      const currentLink = `/${crumb}`;
      return (
        <div className="crumb" key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs m-3">
      <div>{crumbs}</div>
    </div>
  );
};

export default Breadcrumbs;

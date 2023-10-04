import "./wayOfPage.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const WayOfPage = () => {
  const [breadcrumbs, setBreadcrumbs] = React.useState();
  const location = useLocation();
  // const navigate = useNavigate();

  React.useEffect(() => {
    //Home / telephones / iphone
    const pathNames = location.pathname.split("/").filter(Boolean);
    console.log(pathNames, "pathname");
    const breadcrumbsArray = pathNames.map((elm, i) => {
      return {
        path: `/${pathNames.slice(0, i + 1).join("/")}`,
        label: elm[0].toUpperCase() + elm.slice(1),
      };
    });
    setBreadcrumbs(breadcrumbsArray);
  }, [location.pathname]);

  // console.log(breadcrumbs);
  return (
    <Breadcrumbs separator=">">
      <Link to="/">Home</Link>
      {breadcrumbs &&
        breadcrumbs.map((elm, i) => {
          return (
            <Link key={i} to={elm.path}>
              {elm.label}
            </Link>
          );
        })}
      {/* {breadcrumbs &&
        breadcrumbs.map((elm, i) => {

          if (i !== breadcrumbs.length - 1) {
            // console.log(elm, "+++")
            // console.log(breadcrumbs)
            return (
              <Link  to={` /${elm}`} key={i}>
                {elm[0].toUpperCase() + elm.slice(1)}{" "}
              </Link>
            );
          } else {
            return (
              <Typography key={i} fontSize={"20px"}>
                {elm[0].toUpperCase() + elm.slice(1)}
              </Typography>
            );
          }
        })} */}
    </Breadcrumbs>
  );
};

export default WayOfPage;

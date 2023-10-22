import React from "react";
import Selection from "../../../components/Selection";
import { useSelector, useDispatch } from "react-redux";
import { getSearchingData } from "../../../redux/actions/searchAction";
import "./search.scss";
import ThreeElements from "../../../components/ThreeElements";
import { useNavigate } from "react-router-dom";
const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [objData, setObjData] = React.useState({
    title: "All Categories",
    elements: ["Electronics", "Fashion", "Book"],
  });

  const dispatch = useDispatch();

  const { searchedData } = useSelector((state) => state.searching);
  const dataResultRef = React.useRef();
  const inputChannge = React.useRef();

  const navigation = useNavigate();
  function catchId(idx, ctg, name,ctgId) {
    //navigation(`/productdetail/${idx}`);
    navigation(`/${ctg}/${ctgId}/${name}/${idx}`);
    dataResultRef.current.style.display = "none";
    inputChannge.current.value = "";
    // const overlayElm = document.querySelector(".ovarley");
    // overlayElm.classList.toggle("changeOpacity")
    // console.log(ctgId)
  }
 

  function searchIngBar(e) {
    
    if (e != " ") {
      dataResultRef.current.style.display = "flex";
    } else if(e == "") {
      dataResultRef.current.style.display = "none";
    }
    dispatch(getSearchingData(e));
    
    const overlayElm = document.querySelector(".ovarley");
    overlayElm.classList.add("changeOpacity")
   
    console.log(searchedData.data.length, "valuee");
  }

  return (
    <div className="middleSearch">
      <div className="searchSide">
        <Selection data={objData} />
        <div className="line"></div>
        <div className="searchResultCatch">
          <div className="searchING">
            <input
              type="text"
              placeholder="Search on lenny..."
              ref={inputChannge}
              onChange={(event) => searchIngBar(event.target.value)}
            />
          </div>
        
            <div className="dataResult" ref={dataResultRef}>
              {searchedData?.data?.map(({ id, attributes }) => {
                return (
                  <ThreeElements
                    key={id}
                    dataCreator={[attributes.title, attributes.description]}
                    image={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                      attributes.images.data[0].attributes.url
                    }`}
                    handleId={() =>
                      catchId(
                        id,
                        attributes?.categories?.data[0]?.attributes?.title,
                        attributes.title,
                        attributes?.categories?.data[0]?.id
                      )
                    }
                  />
                );
              })}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Search;

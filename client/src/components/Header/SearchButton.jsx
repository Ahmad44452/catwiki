import { useState } from "react";
import { SearchBar, FoundItemsBox, FoundItem } from "./SearchButton.Styled";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const SearchButton = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [foundItems, setFoundItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isBoxVisiblePc, setBoxVisiblePc] = useState(false);

  let controller = null;

  const performSearch = (searchQuery) => {
    if (controller !== null) controller.abort();
    setBoxVisiblePc(true);
    if (searchQuery === "") {
      setLoading(false);
      setBoxVisiblePc(false);
      setFoundItems([]);
      return null;
    }

    controller = new AbortController();
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URI}/api/breed/search/${searchQuery}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setFoundItems(res.data);
      });
  };

  return (
    <>
      <SearchBar showInputOnMobile={isInputVisible}>
        <input
          type="button"
          value="Search"
          onClick={() => setIsInputVisible(true)}
        />

        <BiSearch />

        <div>
          <button onClick={() => setIsInputVisible(false)}>
            <AiOutlineClose />
          </button>

          <input
            type="text"
            placeholder="Enter your breed"
            onChange={(e) => performSearch(e.target.value)}
          />

          <FoundItemsBox isBoxVisiblePc={isBoxVisiblePc}>
            <ul>
              {isLoading ? (
                <h3>Loading...</h3>
              ) : foundItems.length === 0 ? (
                <h3>Nothing Found</h3>
              ) : (
                foundItems.map((item) => (
                  <FoundItem key={item._id} to={`/details/${item.breedId}`}>
                    {item.name}
                  </FoundItem>
                ))
              )}
            </ul>
          </FoundItemsBox>
        </div>
      </SearchBar>
    </>
  );
};

export default SearchButton;

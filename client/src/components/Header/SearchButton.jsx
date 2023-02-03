import { SearchBar, FoundItemsBox, FoundItem } from "./SearchButton.Styled";

const SearchButton = () => {
  return (
    <SearchBar>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
      </svg>

      <input placeholder="Enter your breed" />

      <FoundItemsBox>
        <FoundItem>American Bobtail</FoundItem>
        <FoundItem>American Curl</FoundItem>
        <FoundItem>American Shorthair</FoundItem>
        <FoundItem>American Wirehair</FoundItem>
        <FoundItem>American Bobtail</FoundItem>
        <FoundItem>American Bobtail</FoundItem>
        <FoundItem>American Bobtail</FoundItem>
      </FoundItemsBox>
    </SearchBar>
  );
};

export default SearchButton;

import { useState, useEffect } from "react"; // Import useState only once
import { RestaurantList } from "../constents";
import { RestorentCard } from "./Restorentcard";



// Function to filter the restaurant list based on the search input
function filterData(SearchInput, restorent) {
  const filtered = restorent.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(SearchInput.toLowerCase()) // Case-insensitive search
  );
  return filtered;
}

const Body = ({ restaurantList }) => {
  // State variables to store restaurant list and search input
  const [restorent, setrestorent] = useState(RestaurantList); // Initial state is set to RestaurantList
  const [SearchInput, setSearchInput] = useState(""); // Initial search input is an empty string

  //empty dependence array =>Once after render
  //dep arrya [searchtext] =>once after render + everytime after render(my searchtext changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&.lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setRestaurants(json?.data?.cards || []);
    } catch (error) {
      console.log("Error fetching restaurants:");
    }
  }
  
  
  console.log("render")

  const handleSearch = () => {
    if (SearchInput.trim() === "") {
      setrestorent(RestaurantList); // Reset to the original list if search input is empty
    } else {
      const data = filterData(SearchInput, restorent); // Filter the list based on input
      setrestorent(data); // Update the restaurant list state with filtered data
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={SearchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Update search input state
        />
        <button
          className="search-btn"
          onClick={handleSearch} // Trigger the filter function
        >
          Search
        </button>
      </div>
      <div className="restro-list">
        { (
          restorent.map((restaurant) => (
            <RestorentCard
              key={restaurant.id} // Assuming each restaurant has a unique 'id'
              {...restaurant}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Body;

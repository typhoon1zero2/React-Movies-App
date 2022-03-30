import { useState } from "react";

export default function Form(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to movie search prop, which is apps getMovie function
    props.movieSearch(formData.searchTerm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="Search for movie" />
      </form>
    </div>
  );
}

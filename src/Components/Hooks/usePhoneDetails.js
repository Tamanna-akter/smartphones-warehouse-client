import { useEffect, useState } from "react";

const usePhoneDetails = (id) => {
  const [phoneDetails, setPhoneDetails] = useState({});

  useEffect(() => {
    fetch(`https://thawing-reaches-79081.herokuapp.com/phoneDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoneDetails(data));
  }, [id]);
  return [phoneDetails];
};

export default usePhoneDetails;
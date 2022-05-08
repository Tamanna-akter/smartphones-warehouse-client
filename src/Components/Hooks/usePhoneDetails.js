import { useEffect, useState } from "react";

const usePhoneDetails = (id) => {
  const [phoneDetails, setPhoneDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/phoneDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoneDetails(data));
  }, [id]);
  return [phoneDetails];
};

export default usePhoneDetails;
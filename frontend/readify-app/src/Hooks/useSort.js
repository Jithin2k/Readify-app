import { useEffect, useState } from "react";

const useSort = (allBooks) => {
  const [sortBy, setSortBy] = useState("relevence");
  const [sortedList, setSortedList] = useState(allBooks);

  useEffect(() => {
    let sorted = [...allBooks];
    if (sortBy === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedList(sorted);
  }, [sortBy, allBooks]);

  return { sortBy, setSortBy, sortedList, setSortedList };
};

export default useSort;
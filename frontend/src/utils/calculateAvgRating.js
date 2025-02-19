const calculateAvgRating = (reviews = []) => {
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return { totalRating: 0, avgRating: "Not Rated" };
    }
  
    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = (totalRating / reviews.length).toFixed(1); // Rounding to 1 decimal place
  
    return { totalRating, avgRating };
  };
  
  export default calculateAvgRating;
  
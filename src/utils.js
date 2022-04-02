const apiUrl = "https://api.lever.co/v0/postings/paralleldomain?mode=json";

// Get PD Job Listings
export async function getListings() {
  return await fetch(apiUrl, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

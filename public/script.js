document.addEventListener("DOMContentLoaded", () => {
    const recommendBtn = document.getElementById("recommendBtn");
    const recommendationDiv = document.getElementById("recommendation");



    recommendBtn.addEventListener("click", async () => {
        if (inputText === "") {
            alert("Please enter your preferences.");
            return;
        }


        try {
            const response = await axios.get(`/recommend?input=${inputText}`);
            const recommendedMovie = marked.parse(response.data);
            if (recommendedMovie) {
                recommendationDiv.innerHTML = `<h3>Recommended Movie:</h3><p>${recommendedMovie}</p>`;
            }
            else {
                recommendationDiv.innerHTML = '<p>No Movie recommendation available.</p>';
            }
        }
        catch (error) {
            console.error(error);
            recommendationDiv.innerHTML = '<p>An error occurred while fetching Movie recommendation.</p>';
        }
        finally {
            // loaderDiv.style.display = "none";
        }
    });
});
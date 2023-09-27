$(document).ready(function () {
  
  function populateDropdown(dogBreeds) {
    const dropdown = $("#breedDropdown");
    dropdown.empty();
    dropdown.append('<option value="">Select a breed</option>');

    dogBreeds.forEach(function (breed) {
      dropdown.append(`<option value="${breed}">${breed}</option>`);
    });
  }

  $("#breedDropdown").change(function () {
    const selectedBreed = $(this).val();

    if (selectedBreed) {
      getRandomImageOfDog(selectedBreed);
    }
  });
function getAllDogsFromApi() {
    const url = "https://dog.ceo/api/breeds/list/all";
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        const dogsList = Object.keys(resp.message);
        console.log(dogsList); 
        populateDropdown(dogsList);
      },
      error: function () {
        console.log("API request error");
      },
      complete: function () {
        console.log("API request completed");
      },
    });
  }

  function getRandomImageOfDog(dogBreed) {
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("API request success");
        console.log(resp);

        
        displayImage(resp.message);
      },
      error: function () {
        console.log("API request error");
      },
    });
  }

  function displayImage(imageUrl) {
    const imageContainer = $("#imageContainer");

   imageContainer.empty();

    
    const imgElement = $("<img>");
    imgElement.attr("src", imageUrl);

 
    imageContainer.append(imgElement);
  }

  
  getAllDogsFromApi();
});



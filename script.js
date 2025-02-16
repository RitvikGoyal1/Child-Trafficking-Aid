document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit');
  console.log("Hi");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const story = document.getElementById("story").value;

    console.log("Name:", name);
    console.log("Location:", location);
    console.log("Story:", story);

    if (name === "" || location === "" || story === "") {
      alert("Please fill in all fields.");
    } else {
            //window.location.replace("stories.html");

        const newStory = {
          name: name,
          location: location,
          story: story
        };
        <div>
          <h1>name</h1>
          <h2>location</h2>
          <p>story</p>
        </dif>
  
    }
  });
});
fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        setImage(data["results"][0]["picture"]["large"]);
        setName(data["results"][0]["name"]["first"]);
    });

const setImage = (url) => {
    const image = document.getElementById("image");
    image.setAttribute("src", url);
};

const setName = (nameRandom = "Example") => {
    const name = document.getElementById("name");
    name.innerHTML = nameRandom;
};

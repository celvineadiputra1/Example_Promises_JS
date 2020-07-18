fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setImage(data["results"][0]["picture"]["large"]);
        setName(
            data["results"][0]["name"]["first"],
            data["results"][0]["email"]
        );
    });

const setImage = (url) => {
    const image = document.getElementById("image");
    image.setAttribute("src", url);
    image.setAttribute("alt", url);
};

const setName = (nameRandom = "Example", email = "Example@promisesJs.com") => {
    const name = document.getElementById("name");
    name.innerHTML = `<b>${nameRandom}</b>
    ${email}`;
};

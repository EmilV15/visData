const userList = document.getElementById("user-list");

data.results.forEach(user => {
  const userDiv = document.createElement("div");
  userDiv.className = "user-card";

  const img = document.createElement("img");
  img.src = user.picture.large;

  const name = document.createElement("p");
  name.textContent = `${user.name.first} ${user.name.last}`;

  userDiv.appendChild(img);
  userDiv.appendChild(name);
  userList.appendChild(userDiv);
});

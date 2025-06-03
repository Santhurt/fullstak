// ui.js
function renderUserList(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpiar la lista antes de renderizar

    users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.classList.add("alert", "alert-primary");

        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

function renderPostList(posts) {
    const postList = document.getElementById("postList");
    postList.innerHTML = "";

    posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.classList.add("alert", "alert-success");
        listItem.textContent = post.title;
        postList.appendChild(listItem);
    });
}

export { renderUserList, renderPostList };

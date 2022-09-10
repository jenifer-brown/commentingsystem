class MyComment extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // holds the comment component
    let container = document.createElement("div");
    container.setAttribute("class", "container");

    // place for user input
    let inputForm = document.createElement("form");
    inputForm.setAttribute("class", "inputForm");

    // where user comments are stored
    let commentList = document.createElement("div");
    commentList.style.border = "1px dashed black";
    commentList.style.margin = "10px 0px 10px 0px";
    commentList.style.padding = "0px 10px 0px 10px";

    // adds new comments to the comment list
    function addComment() {
      let currDate = new Date();

      // create comment paragraph and label for comment
      let postedComment = document.createElement("p");
      postedComment.setAttribute(
        "id",
        `postedComment-${inputForm.elements[0].value}` + "-" + currDate
      );

      let postedLabel = document.createElement("h2");
      postedLabel.setAttribute(
        "id",
        `postedLabel-${inputForm.elements[0].value}` + "-" + currDate
      );

      commentList.appendChild(postedLabel);
      commentList.appendChild(postedComment);

      postedLabel.innerText = `Comment from ${inputForm.elements[0].value} (${inputForm.elements[1].value}, at ${currDate})`;
      postedComment.innerText = `${inputForm.elements[2].value}`;
      inputForm.reset();
    }

    // add submit event listener
    inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addComment();
    });

    // create name input and label
    let userName = document.createElement("input");
    userName.setAttribute("class", "username");
    userName.setAttribute("id", "username");
    userName.setAttribute("type", "text");
    userName.required = true;

    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "username");
    nameLabel.innerText = "Enter Username (Required):  ";

    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    nameLabel.appendChild(userName);
    nameDiv.appendChild(nameLabel);

    // create email input
    let email = document.createElement("input");
    email.setAttribute("class", "email");
    email.setAttribute("id", "email");
    email.setAttribute("type", "email");
    email.required = true;

    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Enter Email (Required):  ";

    let emailDiv = document.createElement("div");
    emailDiv.setAttribute("id", "emailDiv");
    emailLabel.appendChild(email);
    emailDiv.appendChild(emailLabel);

    // create comment input
    let commentText = document.createElement("textarea");
    commentText.setAttribute("id", "commenttext");
    commentText.setAttribute("class", "commenttext");
    commentText.setAttribute("rows", "20");
    commentText.setAttribute("cols", "50");
    commentText.required = true;

    let commentLabel = document.createElement("label");
    commentLabel.setAttribute("for", "commenttext");
    commentLabel.innerText = "Type Your Comment: \n";

    let commentDiv = document.createElement("div");
    commentDiv.setAttribute("id", "commentDiv");
    commentLabel.appendChild(commentText);
    commentDiv.appendChild(commentLabel);

    // checkbox for permission
    let permissionBox = document.createElement("input");
    permissionBox.setAttribute("id", "permissionbox");
    permissionBox.setAttribute("class", "permissionbox");
    permissionBox.setAttribute("type", "checkbox");
    permissionBox.required = true;

    let permissionLabel = document.createElement("label");
    permissionLabel.setAttribute("for", "permissionbox");
    permissionLabel.innerText = "Check box to agree to have comment posted  ";

    let permissionDiv = document.createElement("div");
    permissionDiv.setAttribute("id", "permissionDiv");
    permissionLabel.appendChild(permissionBox);
    permissionDiv.appendChild(permissionLabel);

    // create post button
    let postButton = document.createElement("button");
    postButton.setAttribute("type", "submit");
    postButton.innerText = "Post Comment";

    // add label and input elements to the form
    inputForm.appendChild(nameDiv);
    inputForm.appendChild(emailDiv);
    inputForm.appendChild(commentDiv);
    inputForm.appendChild(permissionDiv);
    inputForm.appendChild(postButton);

    // add form to container
    container.appendChild(commentList);
    container.appendChild(inputForm);

    // add container to body
    shadow.appendChild(container);
  }
}

// Define the new element
customElements.define("my-comment", MyComment);

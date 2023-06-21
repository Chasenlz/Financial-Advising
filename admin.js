fetch('/admin/emails')
  .then((response) => response.json())
  .then((emails) => {
    const emailList = document.getElementById('email-list');
    emails.forEach((email) => {
      const listItem = document.createElement('li');
      listItem.textContent = email;
      emailList.appendChild(listItem);
    });
  })
  .catch((error) => console.error(error));

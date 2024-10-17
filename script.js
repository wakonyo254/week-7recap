///its for the frontend a.. use the DOM CONTENT TO check if files exists so as to excecute the requests.
document.addEventListener('DOMContentLoaded', () => {
  //check if registration form exists before adding an event-listener
  const registerForm = document.getElementById('frm-register');
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     
     //send request to server
     const response = await fetch('/auth/register', {
      method: 'POST',
      header: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ name, email, password })
     });
     const data = await response.json();

     alert(data.message);
    });
  }

  //check if login form exists
  const loginForm = document.getElementById('frm-login');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
     
      //send request to server
      const response = await fetch('/auth/login', {
        method: 'POST',
        header: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      alert(data.message + 'Welcome' + data.name + 'to node_crud');
    });
  }
});


// document.getElementById('frm-register').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     //send request to server
//     const response = await fetch('/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify({ name, email, password })
//     });
    
//     const data = await response.json();

//     alert(data.message);

// });

// //login 
// document.getElementById('frm-login').addEventListener('submit', async function(e) {
//   e.preventDefault(); //prevents reload of a form

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   //send request to server
//   const response = await fetch('/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({ email, password })
//   });
  
//   const data = await response.json();

//   alert(data.message + 'Welcome' + data.name + 'of email address:' + data.email);

// });
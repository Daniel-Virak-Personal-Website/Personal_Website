function index() {
  if (sessionStorage.getItem("userName") === null) {
    const name = window.prompt("What is your name?");
    alert(`Thanks for visiting my website, ${name}! I hope you enjoy!`);
    sessionStorage.setItem("userName", name);
  } else {
    alert(
      `Thanks for visiting my website ${sessionStorage.getItem(
        "userName"
      )}! I hope you enjoy!`
    );
  }
}

function about() {
  if (sessionStorage.getItem("userName") === null) {
    const name = window.prompt("What is your name?");
    alert(`Thanks for visiting my about page ${name}! I hope you enjoy!`);
    sessionStorage.setItem("userName", name);
  } else {
    alert(
      `Thanks for visiting my About Page ${sessionStorage.getItem(
        "userName"
      )}! Here is a little info about me! I hope you enjoy!`
    );
  }
}

function portfolio() {
  if (sessionStorage.getItem("userName") === null) {
    const name = window.prompt("What is your name?");
    alert(
      `Thanks for visiting my Portfolio page ${name}! Here is a list of all the projects I've accomplished! 
    I hope you enjoy!`
    );
    sessionStorage.setItem("userName", name);
  } else {
    alert(
      ` Thanks for visiting my Portfolio Page, ${sessionStorage.getItem(
        "userName"
      )}! Here is a list of all the projects I've accomplished! I hope you enjoy!`
    );
  }
}

// function index() {
//   if (sessionStorage.getItem("hasCodeRunBefore") === null) {
//     sessionStorage.setItem("hasCodeRunBefore", true);
//     const name = window.prompt("What is your name?");
//     alert(`Thanks for visiting my website, ${name}! I hope you enjoy!`);
//     sessionStorage.setItem("userName", name);
//   } else if (sessionStorage.getItem("hasCodeRunBefore") === "true") {
//     alert(
//       `Thanks for visiting my website ${sessionStorage.getItem(
//         "userName"
//       )}! I hope you enjoy!`
//     );
//   } else {
//     alert("Thanks for visiting my website! I hope you enjoy");
//     console.log(sessionStorage.getItem("hasCodeRunBefore"));
//     console.log(sessionStorage.getItem("userName"));
//   }
// }

// function about() {
//   if (sessionStorage.getItem("hasCodeRunBefore") === null) {
//     sessionStorage.setItem("hasCodeRunBefore", true);
//     const name = window.prompt("What is your name?");
//     alert(`Thanks for visiting my about page ${name}! I hope you enjoy!`);
//     sessionStorage.setItem("userName", name);
//   } else if (sessionStorage.getItem("hasCodeRunBefore") === "true") {
//     alert(
//       `Thanks for visiting my About Page ${sessionStorage.getItem(
//         "userName"
//       )}! Here is a little info about me! I hope you enjoy!`
//     );
//   } else {
//     alert(
//       `Thanks for visiting my About Page!
//     Here is a little info about me!
//     I hope you enjoy!`
//     );
//     console.log(sessionStorage.getItem("hasCodeRunBefore"));
//     console.log(sessionStorage.getItem("userName"));
//   }
// }

// function portfolio() {
//   if (sessionStorage.getItem("hasCodeRunBefore") === null) {
//     sessionStorage.setItem("hasCodeRunBefore", true);
//     const name = window.prompt("What is your name?");
//     alert(
//       `Thanks for visiting my Portfolio page ${name}! Here is a list of all the projects I've accomplished!
//     I hope you enjoy!`
//     );
//     sessionStorage.setItem("userName", name);
//   } else if (sessionStorage.getItem("hasCodeRunBefore") === "true") {
//     alert(
//       ` Thanks for visiting my Portfolio Page, ${sessionStorage.getItem(
//         "userName"
//       )}! Here is a list of all the projects I've accomplished! I hope you enjoy!`
//     );
//   } else {
//     alert(`Thanks for visiting my Portfolio Page!
//     Here is a list of all the projects I've accomplished!
//     I hope you enjoy!`);
//     console.log(sessionStorage.getItem("hasCodeRunBefore"));
//     console.log(sessionStorage.getItem("userName"));
//   }
// }

const mobileMenu = document.getElementById("mobile-menu");
const mobileButton = document.getElementById("mobile-button");
let isClicked = false;
mobileButton.addEventListener("click", () => {
  if (isClicked === true) {
    mobileMenu.classList.remove("hidden");
    isClicked = false;
  } else if (isClicked === false) {
    mobileMenu.classList.add("hidden");
    isClicked = true;
  }
});

const btnRegis = document.getElementById("btnRegis");

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const isLogin = () => {
  if (localStorage.getItem("user") != null) {
    btnRegis.innerHTML = ` <button id="btnLogout"
      class="font-semibold flex items-center justify-center border-2 bg-white rounded-lg p-2 text-gray-900"
    >
       Logout 
    </button>`;
    const btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", logout);
  }
};

isLogin();

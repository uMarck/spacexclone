class MobileNavBar {
    constructor(mobile, navList, navLinks) {
        this.mobile = document.querySelector(mobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobile.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobile) {
            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavBar = new MobileNavBar (
    ".mobile",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init();
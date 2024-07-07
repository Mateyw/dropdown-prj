class Dropdown {
    constructor(dropdownElement) {
        this.dropdownElement = dropdownElement;
        this.toggleButton = this.dropdownElement.querySelector('.dropdown-toggle');
        this.menu = this.dropdownElement.querySelector('.dropdown-menu');

        this.toggleButton.addEventListener('click', () => {
            this.toggleMenu();
        });

        document.addEventListener('click', (event) => {
            if (!this.dropdownElement.contains(event.target)) {
                this.hideMenu();
            }
        });
    }

    toggleMenu() {
        if (this.menu.style.display === 'block') {
            this.hideMenu();
        } else {
            this.showMenu();
        }
    }

    showMenu() {
        this.menu.style.display = 'block';
    }

    hideMenu() {
        this.menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdownElement => new Dropdown(dropdownElement));
});

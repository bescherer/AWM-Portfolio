// Header component structure
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .header  {
                background-color: var(--background);
                position: sticky;
                height: 60px;    
                top: 0;
                width: 100%;
            }

            .nav  {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 30px;
                max-height: 0;
                overflow: hidden;
                background-color: var(--background);
                transition: max-height .5s ease-out;
            }

            .menu a  {
                display: block;
                padding: 30px;
                color: var(--title);
                font-weight: 500;
            }

            .menu a:hover  {
                background-color: var(--background);
                opacity: 20%;
            }

            .menu-item  {
                cursor: pointer;
                float: right;
                padding: 40px 20px;
            }

            .menu-item-line  {
                background: var(--title);
                display: block;
                height: 2px;
                position: relative;
                width: 24px;
                
            }

            .menu-item-line::before,
            .menu-item-line::after {
                background: var(--title);
                content: '';
                display: block;
                height: 100%;
                position: absolute;
                transition: all .2s ease-out;
                width: 100%;
            }

            .menu-item-line::before  {
                top: 5px;
            }

            .menu-item-line::after {
                top: -5px;
            }


            .menu-input  {
                display: none;
            }


            .menu-input:checked ~ nav {
                max-height: 100%;
            }

            .menu-input:checked ~ .menu-item .menu-item-line  {
                background: transparent;
            }

            .menu-input:checked ~ .menu-item .menu-item-line::before  {
                transform: rotate(-45deg);
                top:0;

            }

            .menu-input:checked ~ .menu-item .menu-item-line::after  {
                transform: rotate(45deg);
                top:0;
            }

            @media (min-width: 768px)  {
                .nav {
                    top: 0;
                    width: fit-content;
                    max-height: none;
                    position: relative;
                    float: right;
                }

                .menu li {
                    float: left;
                }

                .menu a:hover {
                    background-color: transparent;
                    color: var(--text);
                    opacity: 50%;
                    
                }
                
                .menu-item {
                    display: none;
                }

            }

            @media only screen and (max-width: 768px)  {
                .nav  {
                    margin-top: 25px;
                }    
            }
        </style>
        
        <header class="header">

            <input class="menu-input" type="checkbox" id="menu-input"/>
            <label class="menu-item" for="menu-input">
                <span class="menu-item-line"></span>
            </label>

            <nav class="nav">
                <ul class="menu">
                    <li><a href="#about" onclick="document.getElementById('menu-input').checked = false">sobre</a></li>
                    <li><a href="#school" onclick="document.getElementById('menu-input').checked = false">currículo</a> </li>
                    <li><a href="#portfolio" onclick="document.getElementById('menu-input').checked = false">portfólio</a></li>
                    <li><a href="#form" onclick="document.getElementById('menu-input').checked = false">contatos</a></li>
                </ul>
            </nav>

        </header>`;
    }

}

customElements.define('header-menu', Header);

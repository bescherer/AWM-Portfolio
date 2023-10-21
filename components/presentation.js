// Personal presentation component structure 
class PersonalPresentation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            section {
                height: 90dvh;
            }
            
            .presentation {
                background-color: var(--background);
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 8px 64px;
            }
            
            .name {
                color: var(--text);
            }
            
            .resume {
                width: 60%;
            }

            .text {
                font-size: 16px
            }
            
            img {
                width: 300px;
                height: 300px;
                border-radius: 50%;
            }
            
            @media only screen and (max-width: 912px)  {
            .presentation {
                    flex-direction: column-reverse;
                    justify-content: center;
                    padding: 0;
                    width: 100vw;
            }
            
                .text {
                    text-align: center;
                    padding: 14px;
                }
            
                .resume {
                    text-align: center;
                    width: 100%;
                }
            
                img {
                    width: 220px;
                    height: 220px;
                    border-radius: 50%;
                }
            
            }
        </style>
        
        <section class="presentation">
            <div class="text">
                    <h1>Olá, eu sou
                        <h1 class="name">Brenda Emanuelle Scherer</h1>
                    </h1>
        
                    <p class="resume">Desenvolvedora com aproximadamente três anos de carreira, com maior experiência em front-end, mas, no momento
                        se aventurando como fullstack! Tenho como principais ferramentas de trabalho as tecnologias: React, Angular, React Native, Node e Java.
                    </p>
            </div>
        
            <div class="photo-container">
                <img src="assets/brenda.JPG"/>
            </div>
        </section>`;
    }

}

customElements.define('personal-presentation', PersonalPresentation);
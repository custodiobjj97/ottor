export default class menuMobile{
    constructor(toggle,menu){
        this.toggle = document.querySelector(toggle);
        this.menu = document.querySelector(menu);
    };

    openMenu(event){
        if(event.type === "touchstart"){
            event.preventDefault()
        }

        this.menu.classList.toggle('open')
    }

    eventMenu(){
        this.toggle.addEventListener('click',this.openMenu);
        this.toggle.addEventListener('touchstart', this.openMenu);
    };


    bindEvent(){
        this.openMenu = this.openMenu.bind(this);
    };

    init(){
        if(this.menu){
            this.bindEvent()
            this.eventMenu()
        }
    }
}
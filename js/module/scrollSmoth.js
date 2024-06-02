export default class scrollSmooth{
    constructor(links){
        this.links = document.querySelectorAll(links);
        
    }

    handleSmooth(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section=document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    
    eventScroll(){
        this.links.forEach((link)=>{link.addEventListener('click', this.handleSmooth)})
    }
     
    bindEvent(){
        this.handleSmooth = this.handleSmooth.bind(this);
    }
    init(){
        if(this.links.length){
            this.bindEvent()
           this.eventScroll()
        }
        return this
    }
}
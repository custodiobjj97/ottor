export default class ScrollAnimation{
    constructor(elements){
        this.elements = document.querySelectorAll(elements);
        this.activeClass='visible'
    };

    handleScroll(){
        for (let i = 0; i< this.elements.length; i++){
           const top = this.elements[i].getBoundingClientRect().top;
           const halfHeight = window.innerHeight * 0.8
           const isVisible = (top - halfHeight) < 0
           if(isVisible){
             this.elements[i].classList.add(this.activeClass)
           }
        }
    }

    eventScroll(){
        window.addEventListener('scroll', this.handleScroll);
    };

    bindEvent(){
        this.handleScroll = this.handleScroll.bind(this);
    };

    init(){
        if(this.elements.length){
           this.bindEvent()
           this.eventScroll()
           this.handleScroll()
        }
    }
}
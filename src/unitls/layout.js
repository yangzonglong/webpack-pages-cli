class Html {
    constructor(title){
        this.title = title
    }
    temp(temps){
        this.temps = temps
    }
    data(datas){
        this.datas = datas 
    }
    rend(ejs){
        return ejs({temps:this.temps,datas:this.datas})
    }
}

export default Html
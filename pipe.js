class pipe {
    constructor (){
    this.top = random (height/2);
    this. bottom = random (height/2);
    this.x = width;
    this.w = 15;
    
    }

show (){
        fill (255);
        rect (this.x ,0,this.w,this.top);
        rect (this.x ,height-this.bottom, this.w , this.bottom);
    }

    //update (){
       // this.x = this.speed;
   // }
}



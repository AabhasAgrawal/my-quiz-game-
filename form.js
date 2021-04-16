class Form {
    constructor() {
      
    this. input2 = createInput("Enter Correct Option No.."); 
    this.button = createButton('Submit');
  this.  input1 = createInput("Enter Your Name Here...."); 
     
    }
  
 
    display(){
    
      this.input1.position(130, 160);
      this.button.position(140, 160);
      this.input2.position(120,160)
  
      this.button.mousePressed(()=>{

        this.name = this.input.value();
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      
      });
    }
  }
  
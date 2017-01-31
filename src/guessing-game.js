class GuessingGame {
  constructor() {
    var indexMin;
    var indexMax;
    var current;
  }
  setRange(min, max) {
    this.indexMin=min;
    this.indexMax=max;
  }

  guess() {
    this.current=Math.ceil((this.indexMax+this.indexMin)/2);
    return this.current;
  }

  lower() {
    this.indexMax=this.current;


  }

  greater() {
    this.indexMin=this.current;
  }
}

module.exports = GuessingGame;

function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };
  
  Triangulo.prototype.tipo = function(){
    if(this.a == this.b && this.b == this.c){
       return "Equilatero";
    }else if(this.a == this.b || this.b == this.c || this.c == this.a){
       return "Isosceles";
    }else{
       return "Escaleno";
    }
  }

  Triangulo.prototype.valido = function(){
    return this.a < this.b+this.c && this.b < this.a+this.c && this.c < this.b+this.a;
  }  

  module.exports = Triangulo;
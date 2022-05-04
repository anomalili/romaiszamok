function romaiSzamok(index) {
    console.log("vdfvgfsdvg");  
    
    var szamokEgyjegyuek = ["", "I","II","III","IV","V","VI","VII","VIII","IX"];
    var szamokTizedesek = ["", "X","XX","XXX", "XL", "L"]; 
     
     if (index < 10) {return szamokEgyjegyuek[index];}

     if (index / 10 === 1){ return "X";}
     if (index / 10 === 2){ return "XX";}
     if (index / 10 === 3){ return "XXX";}  
     if (index / 10 === 4){ return "XL";}  
     if (index / 10 === 5){ return "L";}
     
     
if (index > 10){
    var tizzelOsztom = index / 10; //3.8
    tizedes = Math.floor(tizzelOsztom); //3
    var egyes = index - (tizedes*10);  //
    return szamokTizedesek[tizedes] + szamokEgyjegyuek[egyes];
}
}
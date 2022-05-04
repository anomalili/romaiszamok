function romaiSzamok(index) {
console.log("vdfvgfsdvg");  
/* 
        var hanyszorTiz = 0;
        var hany = 0;
 
  if (index < 10){

                                            if (index === 1)
                                            {
                                                return "I";
                                            }
                                            if (index === 2)
                                            {
                                                return "II";
                                            }
                                            if (index === 3)
                                            {
                                                return "III";
                                            }
                                            
                                            if (index === 4)
                                            {
                                                return "IV";
                                            }
                                            
                                            if (index === 5)
                                            {
                                                return "V";
                                            }
                                            
                                            if (index === 6)
                                            {
                                                return "VI";
                                            }
                                            
                                            if (index === 7)
                                            {
                                                return "VII";
                                            }
                                            
                                            if (index === 8)
                                            {
                                                return "VIII";
                                            }
                                            
                                            if (index === 9)
                                            {
                                                return "IX";
                                            }    
}

    if (index === 10)
    {
        return "X";
    }



    if (index / 10 === 2){ return "XX";}
    if (index / 10 === 3){ return "XXX";}  
    if (index / 10 === 4){ return "XL";}  
    if (index / 10 === 5){ return "L";}  



if (index > 10){

      
            if (index -10 === 1)
            {
                return "XI";
            }
            if (index -10 === 2)
            {
                return "XII";
            }
            if (index -10 === 3)
            {
                return "XIII";
            }
            
            if (index-10 === 4)
            {
                return "XIV";
            }
            
            if (index-10 === 5)
            {
                return "XV";
            }
            
            if (index-10 === 6)
            {
                return "XVI";
            }
            
            if (index-10 === 7)
            {
                return "XVII";
            }
            
            if (index-10 === 8)
            {
                return "XVIII";
            }
            
            if (index-20 === 9)
            {
                return "XIX";
            }
        }
    
    
    
    
        if (index > 20){

      
            if (index -20 === 1)
            {
                return "XXI";
            }
            if (index -20 === 2)
            {
                return "XXII";
            }
            if (index -20 === 3)
            {
                return "XXIII";
            }
            
            if (index-20 === 4)
            {
                return "XXIV";
            }
            
            if (index-20 === 5)
            {
                return "XXV";
            }
            
            if (index-20 === 6)
            {
                return "XXVI";
            }
            
            if (index-20 === 7)
            {
                return "XXVII";
            }
            
            if (index-20 === 8)
            {
                return "XXVIII";
            }
            
            if (index-20 === 9)
            {
                return "XXIX";
            }
        }



        if (index > 30){

      
            if (index -30 === 1)
            {
                return "XXXI";
            }
            if (index -30 === 2)
            {
                return "XXXII";
            }
            if (index -30 === 3)
            {
                return "XXXIII";
            }
            
            if (index-30 === 4)
            {
                return "XXXIV";
            }
            
            if (index-30 === 5)
            {
                return "XXXV";
            }
            
            if (index-30 === 6)
            {
                return "XXXVI";
            }
            
            if (index-30 === 7)
            {
                return "XXXVII";
            }
            
            if (index-30 === 8)
            {
                return "XXXVIII";
            }
            
            if (index-30 === 9)
            {
                return "XXXIX";
            }
        }

        if (index > 40){

      
            if (index -40 === 1)
            {
                return "XLI";
            }
            if (index -40 === 2)
            {
                return "XLII";
            }
            if (index -40 === 3)
            {
                return "XLIII";
            }
            
            if (index-40 === 4)
            {
                return "XLIV";
            }
            
            if (index-40 === 5)
            {
                return "XLV";
            }
            
            if (index-40 === 6)
            {
                return "XLVI";
            }
            
            if (index-40 === 7)
            {
                return "XLVII";
            }
            
            if (index-40 === 8)
            {
                return "XLVIII";
            }
            
            if (index-40 === 9)
            {
                return "XLIX";
            }
        }

        if (index > 50){

      
            if (index -50 === 1)
            {
                return "LI";
            }
            if (index -50 === 2)
            {
                return "LII";
            }
            if (index -50 === 3)
            {
                return "LIII";
            }
            
            if (index-50 === 4)
            {
                return "LIV";
            }
            
            if (index-50 === 5)
            {
                return "LV";
            }
            
            if (index-50 === 6)
            {
                return "LVI";
            }
            
            if (index-50 === 7)
            {
                return "LVII";
            }
            
            if (index-50 === 8)
            {
                return "LVIII";
            }
            
            if (index-50 === 9)
            {
                return "LIX";
            }
        }
 */


        var szamokEgyjegyuek = ["", "I","II","III","IV","V","VI","VII","VIII","IX"];
        var szamokTizedesek = ["", "X","XX","XXX", "XL", "L"];
        var szamokSzazasok = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
        var szamokEzresek = ["M", "MM", "MMM" ];

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

/*     if (index > 100){
        var SzazzalOsztom = index / 10; //3.8
        tizedes = Math.floor(tizzelOsztom); //3
        var egyes = index - (tizedes*10);  //
        return szamokTizedesek[tizedes] + szamokEgyjegyuek[egyes];
    }


    
 */

}





    

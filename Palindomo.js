
    
  function PALINDROMO(str){
        
        //atendi a solicitação mas não [e o apropriado 
        
        
     var teste = 'ver';
    //var letraP = str[cont];
      //    var letraU = str[str.length--]; 
        
        //if(str.length == 1){
            // document.getElementById('resposta').innerHTML = "<input type='text' disabled value='true'>";
    //}else
       // if(str.length > 1){
            
      //  for(var cont = 0;  cont = str.length; cont++){
            
        teste = str[0] != str[str.length-1]?false:true;        
   // }
        document.getElementById('resposta').innerHTML = "<input type='text' disabled value='"+teste+"'>";
    }
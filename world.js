// Lab 7
window.onload = function(){
    
            
    
            var myWord = document.getElementById("term");
              var lookUpbutton = document.getElementById("lookup");
              lookUpbutton.onclick = clicked;
              var checkBox = document.getElementById("all");
              checkBox.onchange = function(){
                        if(this.checked){
                        new Ajax.Request("world.php?all=true",
                       {
                          method: "get",
                          onSuccess: returnAll
                         });
                        }
              }
              
              function clicked() {
                   var word = myWord.value;
                    new Ajax.Request("world.php?lookup=" + word,
                       {
                          method: "get",
                          onSuccess: returnResult
                         });
                  
           }
function returnResult(data) {
                          var result = document.getElementById("result");
                          result.innerHTML = (data.responseText);
                        }
                        
    
function returnAll(data) {
                          var result = document.getElementById("result");
                          result.innerHTML = (data.responseText);
                        }
}
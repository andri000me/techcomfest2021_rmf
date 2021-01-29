function getXMLHttpRequest(){
    if(window.ActiveXObject){
      return new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
      return new XMLHttpRequest();  
    }
  }
  var xmlhttp=getXMLHttpRequest();
  function sendRequest(pageURL,bahasa){
    if(xmlhttp.readyState==4 || xmlhttp.readyState==0){
      xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
        
        if(bahasa=='Bminang'){
        document.getElementById('hasilminang').value=xmlhttp.responseText;
        }else if(bahasa=='Bjawa'){
        document.getElementById('hasiljawa').value=xmlhttp.responseText;
        }else if(bahasa=='Bsunda'){
        document.getElementById('hasilsunda').value=xmlhttp.responseText;
        }else if(bahasa=='Bmakassar'){
        document.getElementById('hasilmakassar').value=xmlhttp.responseText;
        }else if(bahasa=='Bbali'){
        document.getElementById('hasilbali').value=xmlhttp.responseText;
        }

        }
      }
      xmlhttp.open('GET',pageURL,true);
      xmlhttp.send(null); 
    }
  }
function konversi(bahasa){
  if(bahasa=='Bminang'){
  sendRequest('terjemah.php?kata='+document.getElementById('indo-minang').value+'&bahasa=Bminang','Bminang'); 
} else if(bahasa=='Bjawa'){
  sendRequest('terjemah.php?kata='+document.getElementById('indo-jawa').value+'&bahasa=Bjawa','Bjawa'); 
} else if(bahasa=='Bsunda'){
  sendRequest('terjemah.php?kata='+document.getElementById('indo-sunda').value+'&bahasa=Bsunda','Bsunda'); 
} else if(bahasa=='Bmakassar'){
  sendRequest('terjemah.php?kata='+document.getElementById('indo-makassar').value+'&bahasa=Bmakassar','Bmakassar'); 
} else if(bahasa=='Bbali'){
  sendRequest('terjemah.php?kata='+document.getElementById('indo-bali').value+'&bahasa=Bbali','Bbali'); 
}
}


var tabButtons=document.querySelectorAll(".tabContainer .right-pick button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor="#067bf9";
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="white";
}
showPanel(0);

function cc1 (){ document.getElementById("indo-minang").value = "";}
function cc2 (){ document.getElementById("indo-jawa").value = "";}
function cc3 (){ document.getElementById("indo-sunda").value = "";}
function cc4 (){ document.getElementById("indo-makassar").value = "";}
function cc5 (){ document.getElementById("indo-bali").value = "";}

function ccc1 (){ document.getElementById("hasilminang").value = "";}
function ccc2 (){ document.getElementById("hasiljawa").value = "";}
function ccc3 (){ document.getElementById("hasilsunda").value = "";}
function ccc4 (){ document.getElementById("hasilmakassar").value = "";}
function ccc5 (){ document.getElementById("hasilbali").value = "";}

function tab1 (){ showPanel(0); cc1(); ccc1();}
function tab2 (){ showPanel(1); cc2(); ccc2();}
function tab3 (){ showPanel(2); cc3(); ccc3();}
function tab4 (){ showPanel(3); cc4(); ccc4();}
function tab5 (){ showPanel(4); cc5(); ccc5();}
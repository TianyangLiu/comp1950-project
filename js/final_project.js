/* Top Navigation: clicks on the button, 
toggle between hiding and showing the dropdown content */

    $('.dropbtn').click(function(e){
        $(this).next().toggle() 
    });

    $("body").click
    (
      function(e)
      {
        if(e.target.className !== "dropbtn")
        {
          $(".dropbtn").next().hide();
        }
      }
    );

//Close the dropdown if the user clicks outside of it

    
  


/*Sidebar Collapsoble list Group*/
    
//slide down
    
    $("a").click(function(){
        
      $(this).next().toggle()  
        
    });
    
    /*$("body").click(function(e){
        if(e.target.className !=="collapsible"){
          $(".collapsible").next().slideUp("slow");
        }
      }
    );
    */ 



/*Sidebar Navigation */


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}







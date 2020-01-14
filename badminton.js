  
      var bodymain=document.createElement('div');
      bodymain.setAttribute('id','main');
      document.body.appendChild(bodymain);

      var navbar=document.createElement('nav');
      navbar.setAttribute('class','homebar');
      bodymain.appendChild(navbar);


     var logo=document.createElement('img');
      logo.setAttribute('class','logo');
      logo.src="logo.png";
      navbar.appendChild(logo);

      var img=document.createElement('img');
      img.setAttribute('class','logo');
      img.src="pbl.png";
      navbar.appendChild(img);


      var unorderedlist=document.createElement("ul");
      unorderedlist.setAttribute('class','unlist');
      navbar.appendChild(unorderedlist);


      var list=document.createElement("li");
      list.setAttribute('class','listelements');
      unorderedlist.appendChild(list);


      var menu1=document.createElement("a");
      menu1.setAttribute('class','stats');
      menu1.href="#";
      menu1.textContent='TeamStats';
      list.appendChild(menu1);
    
    var menu2=document.createElement("a");
     menu2.setAttribute('class','stats');
     menu2.href="#";
     menu2.textContent='Player stats';
     list.appendChild(menu2);

    var menu3=document.createElement("a");
     menu3.setAttribute('class','stats');
     menu3.href="#";
     menu3.textContent='Tournaments';
   
     list.appendChild(menu3);

    var menu4=document.createElement("a");
     menu4.setAttribute('class',"stats");
     menu4.href="#";
     menu4.textContent= 'Live Score';
     
     list.appendChild(menu4);

    var menu5=document.createElement("a");
     menu5.setAttribute('class',"stats");
     menu5.href="#";
     menu5.textContent='Admin Login';
     
     list.appendChild(menu5);

    var menu6=document.createElement("a");
     menu6.setAttribute('class',"stats");     
     menu6.href="#";
     menu6.textContent='Players Registrations';
    
     list.appendChild(menu6);
      
    var pointstable=document.createElement('div');
     pointstable.setAttribute("class",'pt');
     document.body.appendChild(pointstable);

    var name= document.createElement('h4');
   name.setAttribute("class",'heading');
    name.textContent='TEAM STANDINGS';
    pointstable.appendChild(name);







 
    
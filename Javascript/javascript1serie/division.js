  



    function calcul(){//function fait appel à un traitement d une ou plusieurs fonctionnalites, comme des divisions, des multiplication, etc.Il faut toujours nommé cette function ici calcul, ensuite indiquer les éléments qui serviront au traitement ici nbre1 et 2.
        
        
        
        var resultat=document.getElementbyId(premier_nombre).value();
             var resultat2=document.getElementbyId(deuxieme_nombre).value();
        
         
        
        
       return resultat%resultat2;// return indique que les nbre 1 et 2 que l 'utilisateur entre vont etre réutilise dans la commande du fichier html6 avec le bouton.
        //modulo indique le reste de la division entre nbre1 et 2.
         }

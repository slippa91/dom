
var $ = function(sel) {

    var elem = document.querySelectorAll(sel);  //watch the all when changing the first element / querySelectoAll accesses the Node list

    var text = function(string) {
       elem.innerText = string;  //changes the first instance of an element in the DOM

       //for ( var i = 0; i < elem.length; i++) { //changing all node list for "element" designated in the call on .html
        //   elem[i].innerText = string;
       //}
    }    
    
    var addClass = function(className) {            //add class function
        
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }

    var removeClass = function(className){          //remove class function

        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }

    var on = function(action, cb){                  //onclick function
        for( var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }    

    var html = function(newHTML) {                  //changes inner HTML
        for (var i = 0; i < elem.length; i++){
            elem[i].innerHTML = newHTML;
        }
}   

    var toggle  = function(className) {                             //search Node list to see if class exists
            for (var i = 0; i < elem.length; i++) {
                if (elem[i].className.includes(className)) {
                    elem[i].classList.remove(className);
                } else {
                    elem[i].classList.add(className);
                    }
                 }
}
        
        
    
    var publicAPI = { // you use this object to control what goes public and what stays private
        element: elem, 
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html,
        toggle: toggle
    }

    return publicAPI;


}


 function init_directorbutton()
 {
 	var div      = document.getElementById('directorbutton');
        if(div)
        {
 	var tw = new OpacityTween(div,Tween.regularEaseInOut,0,100,.3);
 	div.startf = function ()
  	             {
                        div.style.overflow = 'visible';
  	                tw.onMotionFinished = undefined;
  	                tw.continueTo(100, .3);
  	                div.style.display = 'block';
                        
  	             }
        div.endf   = function ()
  	             {
                        tw.onMotionFinished = function(){ div.style.display = 'none'; tw.onMotionFinished = undefined; }
  	                tw.continueTo(0, .3);
  	             }
        }
 }
 function init_researchbutton()
 {
 	var div      = document.getElementById('researchbutton');
        if(div)
        {
 	var tw = new OpacityTween(div,Tween.regularEaseInOut,0,100,.3);
 	div.startf = function ()
  	             {
                        div.style.overflow = 'visible';
  	                tw.onMotionFinished = undefined;
  	                tw.continueTo(100, .3);
  	                div.style.display = 'block';
                        
  	             }
        div.endf   = function ()
  	             {
                        tw.onMotionFinished = function(){ div.style.display = 'none'; tw.onMotionFinished = undefined; }
  	                tw.continueTo(0, .3);
  	             }
        }
 }
 function init_trainingbutton()
 {
 	var div      = document.getElementById('trainingbutton');
        if(div)
        {
 	var tw = new OpacityTween(div,Tween.regularEaseInOut,0,100,.3);
 	div.startf = function ()
  	             {
                        div.style.overflow = 'visible';
  	                tw.onMotionFinished = undefined;
  	                tw.continueTo(100, .3);
  	                div.style.display = 'block';
                        
  	             }
        div.endf   = function ()
  	             {
                        tw.onMotionFinished = function(){ div.style.display = 'none'; tw.onMotionFinished = undefined; }
  	                tw.continueTo(0, .3);
  	             }
        }
 }

function init_tweens()
{
 init_trainingbutton();
 init_researchbutton();
 init_directorbutton();
}
function keepCollsapedState()
{
    view = document.getElementById('view');
	if(!collapsedView)
	{
	   var els = view.getElementsByClassName('hiddenview');
	   for (const e of els) {
		   e.style.display = e.style.display=='none'?'initial':'none'
	   }
	}
		
}	
	   
function forwardToggleVisibility(cl){
   var els = document.getElementsByClassName(cl);
   var treeTitle = document.getElementById("treeTitle");	
   if(visible+1 < els.length)
   {
		els[visible].style.display = 'none'
		els[visible+1].style.display = 'block'
		visible++;
		treeTitle.innerHTML = els[visible].dataset.treetitle;
   }	
   var forwardButton = document.getElementById("forward");
   var backwardButton = document.getElementById("backward");
   if(visible+1 == els.length)
		forwardButton.style.display = 'none'
   if(visible > 0)
	    backwardButton.style.display = 'initial'
	   
}

function backwardToggleVisibility(cl){
   var els = document.getElementsByClassName(cl);
   var treeTitle = document.getElementById("treeTitle");	  
   if(visible-1 >= 0)
   {
	   els[visible].style.display = 'none'
	   els[visible-1].style.display = 'block'
	   visible--;
	   treeTitle.innerHTML = els[visible].dataset.treetitle;
   }
   var forwardButton = document.getElementById("forward");
   var backwardButton = document.getElementById("backward");
   if(visible == 0)
       backwardButton.style.display = 'none'
   if(visible+1 < els.length)
	   forwardButton.style.display = 'initial'
}

function toggleViewVisibility(cl){
   view = document.getElementById('view');
   var els = view.getElementsByClassName(cl);
   for (const e of els) {
	   e.style.display = e.style.display=='none'?'initial':'none'
   }
   collapsedView = collapsedView?false:true
}

function setVisibility(cl, i){
   var els = document.getElementsByClassName(cl);
   var treeTitle = document.getElementById("treeTitle");	
	els[visible].style.display = 'none'
	visible = i
	els[visible].style.display = 'block'	
	treeTitle.innerHTML = els[visible].dataset.treetitle;
   
}
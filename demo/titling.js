
	
function download(text, name, type) {
    saveTitles();
	var a = document.getElementById("a");
	var titles = document.getElementsByClassName("hiddentitles");
	var titlesValues = {}
	for(i = 0;i<titles.length;i++)	
	{			
		hidden = document.getElementById(titles[i].id);
		if(hidden.value != "")
			titlesValues["t"+titles[i].id.substring(1)] = hidden.value
	}				
	text = JSON.stringify(titlesValues);
	var file = new Blob([text], {type: type});
	a.href = URL.createObjectURL(file);
	a.download = name;
	a.click()
}

function saveTitles()
{
    var titles = document.getElementsByClassName("titles");
    for(var i = 0;i<titles.length;i++)
    {
        titles[i].addEventListener("change", function () {            	
            hidden = document.getElementById("H"+this.id);
            hidden.value = this.value
        }); 
    }  
}

function reloadTitles() {
	var titles = document.getElementsByClassName("titles");
	for(i = 0;i<titles.length;i++)
	{
		hidden = document.getElementById("H"+titles[i].id);
		titles[i].value = hidden.value
	}
	
}

function loadTitlesFromFile() {
	var input = document.getElementById("titleFile");		
	if (input.files && input.files[0]) {
		var myFile = input.files[0];
		var reader = new FileReader();

		reader.addEventListener('load', function (e) {
			titles = JSON.parse(e.target.result); 
			for(var key in titles) {
				c = document.getElementById("chart_div");
				t = document.getElementsByClassName(key.substring(1));
				hidden = document.getElementById("H"+key.substring(1));
				try{
					if(t.length === 1)
						t = t[0]
					else
						t = t[1]									
					t.value = titles[key]
				}
				catch{}
				hidden.value = titles[key]
			}
		});

		reader.readAsBinaryString(myFile);
	} 
}

var input = document.getElementById("titleFile");
input.addEventListener("change", function () {
	loadTitlesFromFile();
}); 
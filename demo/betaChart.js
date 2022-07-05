/*
	---------------------------
	Data handling functions
	---------------------------
*/
function createSample(data){ 
	var sample = [];
	for(i = 0;i<500;i++){
        sample.push([i/500, data[Math.floor(i/5)]]);		
	}
	return sample
}; 

function getWindowAvg(data, window, i) {
	n = 1
	sum = data[i]
	for(j = 1;j<window+1;j++){
		if(i+j < data.length)
		{
			sum += data[i+j]
			n+=1
		}
		if(i-j > 0)
		{
			sum += data[i-j]
			n+=1
		}
	}
	return sum/n
}

function smoothData(data, window) {
	out = [...data]
	for(i = 0;i<data.length;i++){
		out[i] = getWindowAvg(data, window, i)
	}
	return out
}


/*
	---------------------------
	Drawing functions
	---------------------------
*/
var dt = document.getElementById("depthtime");
function drawChartView() 
{
	var view = document.getElementById('view');
	var elem = view.getElementsByClassName('chartContainer');
	

	// Set chart options
	var options = {'title':'Topic time distribution',
				 // 'curveType': 'function',	
				 'seriesType': 'line',
				 'series': {0: {'type': 'bars'}},
				 'width':500,
				 'height':250,
				series: {
          0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1}
        }};
		
	e = elem[0]
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'x');
	data.addColumn('number', 'y');
	smoothedData = smoothData(JSON.parse(e.dataset.timedata),1)	
    console.log(smoothedData)
	toDisplay = createSample(smoothedData);
	data.addRows(toDisplay);
	var chart = new google.visualization.ComboChart(e);
	idGP = e.parentElement.parentElement.id;
	chart.draw(data, options);
		
}
google.charts.load('current', {'packages':['corechart']});









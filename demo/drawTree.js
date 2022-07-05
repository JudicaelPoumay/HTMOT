function drawTree(charts, placeholder, topics, idx) {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	data.addColumn('string', 'Manager');
	data.addColumn('string', 'ToolTip');
	data.addRows(topics[idx]);
	
	// Draw the chart, setting the allowHtml option to true for the tooltips.
	var chart = new google.visualization.OrgChart(document.getElementById(placeholder));
	charts.push(chart)
	chart.draw(data, {'allowHtml':true,'allowCollapse':true,'size':'small'});
	for(i = 0;i<data.getNumberOfRows();i++)
		chart.collapse(i, true);
	chart.collapse(0, false);
	
	google.visualization.events.addListener(chart,"collapse",  function( event ) {
        reloadTitles();
	});
	
	google.visualization.events.addListener(chart,"select",  function( event ) {  
		view = document.getElementById('view');
        try{
            row = chart.getSelection()[0]["row"]
            view.innerHTML = topics[idx][row][0]['f']+'<button onclick="toggleViewVisibility(\'hiddenview\')" id="expandView">&lt;&gt;</button>';	
            keepCollsapedState()
            drawChartView();
            row = chart.getSelection()[0]["row"]
            view.innerHTML = topics[idx][row][0]['f']+'<button onclick="toggleViewVisibility(\'hiddenview\')" id="expandView">&lt;&gt;</button>';	
            keepCollsapedState()
            drawChartView();
            
        }
        catch{}
        saveTitles();
	});
}

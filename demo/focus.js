
function findTopicWithId(id, topics, idx) {	
    for(i = 0;i<idx.length;i++)
    {
        if(id.includes(topics[idx[i]][0]['v']))
            return idx[i]
    }
    return -1
}		



function getTopicAndAncestorWithId(id, topics, chart) {	
    out = []
    idx = findTopicWithId(id, topics, chart.getChildrenIndexes(0))
    while(idx > -1)
    {
        out.push(idx)
        idx = findTopicWithId(id, topics, chart.getChildrenIndexes(idx))
    }
    if(out.length === 0)
        out = [0]
    return out
}

function focusOnTextInput() {	
    for(var k = 0;k<chart.length-1;k++){
    focusOn(chart[k], document.getElementById('focus').value, topics, visible)	}	
}	

function focusOn(chart, id, topics,i) {	
    if(i > visible)
        forwardToggleVisibility('chart')
    else	
        backwardToggleVisibility('chart')
    
    for(i = 0;i<topics.length;i++)
        chart.collapse(i, true);
    chart.collapse(0, false);
            
    var out = getTopicAndAncestorWithId(id, topics, chart)
    for(var i = 0;i<out.length-1;i++){
        chart.collapse(out[i], false);
    }
    
    view = document.getElementById('view');
    view.innerHTML = topics[out[out.length - 1]][0]['f']+'<button onclick="toggleViewVisibility(\'hiddenview\')" id="expandView">&lt;&gt;</button>';			
    keepCollsapedState()
    drawChartView();		
    chart.setSelection([])		
    chart.setSelection([{row:out[out.length - 1], column:null}])		
    document.getElementsByClassName('google-visualization-orgchart-nodesel')[0].scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
    
}	
var width = 700;
var height = 740;

var svg = d3.select( ".interactive")
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

    var g = svg.append( "g" );

    var albersProjection = d3.geoAlbers()
    .scale( 170000 )
    .rotate( [104.978,0] )
    .center( [0, 39.751] )
    .translate( [width/2,height/2] );

    var geoPath = d3.geoPath()
    .projection( albersProjection );
    // Width and Height of the whole visualization

g.selectAll( "path" )
    .data( basemap_json.features )
    .enter()
    .append( "path" )
    .attr( "fill", "#fff" )
    .attr( "stroke", "#aaa")
    .attr( "d", geoPath );

var sup = svg.append( "g" );

sup.selectAll( "path" )
	.data( sup_json.features )
	.enter()
	.append( "path" )
    .attr("id", "sup")
	.attr( "fill", "black" )
	//.attr( "stroke", "#999" )
	.attr( "d", geoPath );   

    var poverty = svg.append( "g" );

poverty.selectAll( "path" )
	.data( poverty_json.features )
	.enter()
	.append( "path" )
    .attr("id", "poverty")
	.attr( "fill", "#046ff0" )
	//.attr( "stroke", "#e77" )
	.attr( "d", geoPath )
    .style("opacity", 0.4);

    var ed = svg.append( "g" );

ed.selectAll( "path" )
	.data( edu_json.features )
	.enter()
	.append( "path" )
    .attr("id", "ed")
	.attr( "fill", "#f00404" )
	//.attr( "stroke", "#e77" )
	.attr( "d", geoPath )
    .style("opacity", 0.4);

    var black = svg.append( "g" );

black.selectAll( "path" )
	.data( black_json.features )
	.enter()
	.append( "path" )
    .attr("id", "black")
	.attr( "fill", "#4EDF43" )
	//.attr( "stroke", "#e77" )
	.attr( "d", geoPath )
    .style("opacity", 0.4);

    var hisp = svg.append( "g" );

hisp.selectAll( "path" )
	.data( hisp_json.features )
	.enter()
	.append( "path" )
    .attr("id", "hisp")
	.attr( "fill", "#f39c09" )
	//.attr( "stroke", "#e77" )
	.attr( "d", geoPath )
    .style("opacity", 0.4);

svg.append("text")
	.attr("x", 5)             
	.attr("y", 30)    
	.attr("class", "legend")
	.style("fill", "grey")        
	.text("Click to toggle on/off:");   

svg.append("text")
	.attr("x", 160)             
	.attr("y", 30)    
	.attr("class", "legend")
    .attr("fill", "black")
	.style("fill", "black")        
	.on("click", function(){
		// Determine if current line is visible
		var active   = sup.active ? false : true,
		  newOpacity = active ? 0 : 1;
		// Hide or show the elements
		d3.selectAll("#sup").style("opacity", newOpacity);
		// Update whether or not the elements are active
		sup.active = active;
	})
	.text("Supermarkets");

 svg.append("text")
	.attr("x", 270)             
	.attr("y", 30)    
	.attr("class", "legend")
	.style("fill", "#046ff0")        
	.on("click", function(){
		// Determine if current line is visible
		var active   = poverty.active ? false : true,
		  newOpacity = active ? 0 : 0.4;
		// Hide or show the elements
		d3.selectAll("#poverty").style("opacity", newOpacity);
		// Update whether or not the elements are active
		poverty.active = active;
	})
	.text("Poverty (>22%)");   

svg.append("text")
	.attr("x", 390)             
	.attr("y", 30)    
	.attr("class", "legend")
	.style("fill", "#f00404")        
	.on("click", function(){
		// Determine if current line is visible
		var active   = ed.active ? false : true,
		  newOpacity = active ? 0 : 0.4;
		// Hide or show the elements
		d3.selectAll("#ed").style("opacity", newOpacity);
		// Update whether or not the elements are active
		ed.active = active;
	})
	.text("Education (<75% high school graduates)");

svg.append("text")
	.attr("x", 160)             
	.attr("y", 60)    
	.attr("class", "legend")
	.style("fill", "#4EDF43")        
	.on("click", function(){
		// Determine if current line is visible
		var active   = black.active ? false : true,
		  newOpacity = active ? 0 : 0.4;
		// Hide or show the elements
		d3.selectAll("#black").style("opacity", newOpacity);
		// Update whether or not the elements are active
		black.active = active;
	})
	.text("Black/African American (>15%)");

svg.append("text")
	.attr("x", 380)             
	.attr("y", 60)    
	.attr("class", "legend")
	.style("fill", "#f39c09")        
	.on("click", function(){
		// Determine if current line is visible
		var active   = hisp.active ? false : true,
		  newOpacity = active ? 0 : 0.4;
		// Hide or show the elements
		d3.selectAll("#hisp").style("opacity", newOpacity);
		// Update whether or not the elements are active
		hisp.active = active;
	})
	.text("Latino (>40%)");


svg.append("image")
   .attr("xlink:href", "images/highways.svg")
   .attr("x", -24)
   .attr("y", 115)
   .attr("height", "580px")
   .attr("width", "680px");

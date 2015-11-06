'use strict';

var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var moonwheel_wrapper = function(d3, moons_2015, moondata) {
  
  var janone_weekday = 4; // sun == 0
  
	// oct moon
  // var start = 285;
  // var stop = 314;
  // var weekday_start = 3; // sun == 1
  // var wheel_color = "rgba(255, 191, 0, 0.35)";
  
    
	// sept moon
	// amber moon
  // var start = 256;
  // var stop = 284;
  // var weekday_start = 2; // sun == 1
  // var wheel_color = "rgba(255, 191, 0, 0.35)";
	
	// august moon
	// gold moon
	// var start = 226;
	// var stop = 255;
	// var weekday_start = 7; // sun == 1
	// var wheel_color = "rgba(255, 255, 0, 0.35)"
	
  
  // var moons_2015 = [[20, 48], [49, 78], [79, 107], [108, 136], [137, 166], [167, 195], [196, 225], [226, 255], [256, 284], [285, 314], [315, 344]];
  //
  // var moons_2016 = [[10, 38], [39, 68], [69, 97], [98, 126], [127, 156], [157, 185], [186, 215], [216, 244], [245, 274], [275, 304], [305, 333], [334, 363]];
  //
  // var moons_15_16 = $.merge(moons_2015, moons_2016);
  
  // console.log(moondata[0]);
  
  // console.log(moondata[19]);
  // console.log(moondata[20]);
  // console.log(moondata[21]);
  //
  // console.log(moondata[48]);
  // console.log(moondata[49]);
  // console.log(moondata[50]);

  // console.log(moondata[78]);
  // console.log(moondata[79]);
  // console.log(moondata[80]);
  
  var alpha = '0.35';
  var moon_colors_2015 = [
    'rgba(12, 55, 105, '+alpha+')', // 23 5 #0C3769
    'rgba(22, 97, 136, '+alpha+')', // 26 4 #166188
    'rgba(27, 116, 75, '+alpha+')', // 29 3 #1B744B
    'rgba(38, 143, 55, '+alpha+')', // 32 2 #268F37
    'rgba(142, 182, 42, '+alpha+')', // 35 1 #8EB62A
    'rgba(252, 206, 10, '+alpha+')', // 2  0 #FCCE0A
    'rgba(212, 86, 29, '+alpha+')', // 5  1 #D4561D
    'rgba(183, 16, 35, '+alpha+')', // 8  2 #B71023
    'rgba(150, 17, 58, '+alpha+')', // 11 3 #96113A
    'rgba(112, 15, 82, '+alpha+')', // 14 4 #700F52
    'rgba(52, 25, 80, '+alpha+')', // 17 5 #341950
    '', // 20 6 
    'rgba(12, 55, 105, '+alpha+')', // 23 5 #0C3769
    'rgba(22, 97, 136, '+alpha+')', // 26 4 #166188
    'rgba(27, 116, 75, '+alpha+')', // 29 3 #1B744B
    'rgba(38, 143, 55, '+alpha+')', // 32 2 #268F37
    'rgba(142, 182, 42, '+alpha+')', // 35 1 #8EB62A
    'rgba(252, 206, 10, '+alpha+')', // 2  0 #FCCE0A
    'rgba(212, 86, 29, '+alpha+')', // 5  1 #D4561D
    'rgba(183, 16, 35, '+alpha+')', // 8  2 #B71023
    'rgba(150, 17, 58, '+alpha+')', // 11 3 #96113A
    'rgba(112, 15, 82, '+alpha+')', // 14 4 #700F52
    'rgba(52, 25, 80, '+alpha+')', // 17 5 #341950
    '',
    // 'rgba(179, 0, 77, 0.35)', // oct 2015 #B2004E ... #711145
    // 'rgba(107, 20, 100, 0.35)' // nov 2015 #691462
  ];
  
  var dates_el = document.getElementById('moon-dates');
  
  $.each(moons_2015, function(i, moon) {
    // console.log(moon, moondata[moon[0]+1], moondata[moon[1]+1]);
    var start = moon[0];
    var end = moon[1];
    var moon_year = moon[2];
    var color = moon[3];
    var links = $('#moon-links-'+moon_year);
    
    var label = $("<span class='moon-link'>").html(range_str(
      moondata[start],
      moondata[end]
    ));
    
    var weekday_start = ((start + janone_weekday) % 7) + 1;
    // console.log(weekday_start);
    
    var ln = $("<a href='#'>").append(label);
    
    ln.click(function() {
      $('#chart').empty();
      
      draw_moonwheel(
        "#chart",
        moondata,
        start,
        end,
        // 0, 364,
        weekday_start,
        color
        //moon_colors_2015[i]
      );
      
      dates_el.innerHTML = range_str(moondata[start], moondata[end]) + ", " + moon_year;
    });
    
    links.append(ln).append(" ");
  });
};

var range_str = function(d1, d2) {
  return cal_label(d1) + " - " + cal_label(d2);
};

var cal_label = function(d) {
  return month_names[d['month']].slice(0, 3) + " " + (d['day']+1);
};

var draw_moonwheel = function(chart_sel, moondata, start, stop, weekday_start, wheel_color) {  
  var width = 732;
  var height = 732;
	var donutWidth = 125;
	var illumWidth = 25;
	var weekWidth = 35;
	var monthWidth = 20;
	var wheelPadding = 2;
  var radius = Math.min(width, height) / 2 - wheelPadding;
  
  
	var len = stop - start + 1; // stop is inclusive
	
	var week_i = weekday_start-1;
	var dataset = [];
	var monthdata = [];
	var curr_month = moondata[start]['month'];
	var month_start = start;
	var month_count = 1;
	for (var i=start; i<=stop; i++) {
		var d = moondata[i];
		d.count = i-start+1;
		d.size = 1;
		d.day = parseInt(d.day);
		d.weekday = week_i;					
		dataset.push(d);
		
		week_i++;
		if (week_i >= weekdays.length) week_i = 0;
		
		if (d['month'] != curr_month) {
			monthdata.push({num: curr_month, count: month_count,
					 						days:i-month_start});
			curr_month = d['month'];
			month_start = i;
		}
	}
	
	monthdata.push({num: curr_month, count: month_count,
			 						days:i-month_start});
		
	var week1_days = weekdays.length-(weekday_start-1);
	var weekcount = 1;
	// var weekdata = [{count: weekcount, days: week1_days}];
  // var weekdata = [];
  // for (var i=1; i<=len; i++) {
  //   if ((i-1-weekday_start-1) % 7 == 0) {
  //     var days;
  //     if (i < 7) {
  //       days = 8 - weekday_start;
  //     } else {
  //       days = 7;
  //     }
  //     weekdata.push({count: weekcount,
  //                    days: days});
  //     weekcount++;
  //     // weekdata.push({count: weekcount, days: 7});
  //   } else if (i == len) {
  //     weekdata.push({count: weekcount,
  //                    days: len-((weekcount-1)*7)+weekday_start});
  //   }
  // }
  
  weekday_start = weekday_start - 1;
  var weekdata = [];
  
  var partial_first_week = (7 - weekday_start) % 7;
  
  if (partial_first_week > 0) {
    weekdata = [
      {count: weekdata.length+1, days: partial_first_week}
    ];
  }
  
  var num_full_weeks = Math.floor((len - partial_first_week) / 7);
  console.log(len, partial_first_week, num_full_weeks);
  
  for (var i=0; i<num_full_weeks; i++) {
		weekdata.push({count: weekdata.length+1, days: 7});
  }
  
  var partial_last_week = len - (7*num_full_weeks + partial_first_week);
  console.log(len, num_full_weeks, partial_first_week, partial_last_week)
  if (partial_last_week > 0) {
    weekdata.push({count: weekdata.length+1, days: partial_last_week});
  }
  
  console.log(weekdata);
  
  // var weekdata = [];
  // for (var i=0; i<len; i++) {
  //   if ((i+weekday_start) % 7 == 0) {
  //     var days;
  //     if (i < 6) {
  //       days = 7 - weekday_start;
  //     } else {
  //       days = 7;
  //     }
  //     weekdata.push({count: weekcount,
  //                    days: days});
  //     weekcount++;
  //     // weekdata.push({count: weekcount, days: 7});
  //   } else if (i == len-1) {
  //       console.log(weekcount);
  //     weekdata.push({count: weekcount,
  //                    days: len-((weekcount-1)*7)+weekday_start+1});
  //   }
  // }


  var color = d3.scale.category20b();

	var gap = Math.PI*2/(len + 1);  
  var day_angle = Math.PI*2 / (len+1);
  // var startAngleFunc = function(d) { return d.startAngle + gap; };
  // var endAngleFunc = function(d) { return d.endAngle + gap; };
  // var startAngleFunc = function(d) { return d.startAngle + Math.PI/8 - gap/3; };
  // var endAngleFunc = function(d) { return d.endAngle + Math.PI/8 - gap/3; };
  var startAngleFunc = function(d) { return d.startAngle + day_angle*1.5; };
  var endAngleFunc = function(d) { return d.endAngle + day_angle*1.5; };
  
  var svg = d3.select(chart_sel)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');
	
		// months
		var month_arc = d3.svg.arc()
			.innerRadius(radius - donutWidth - illumWidth - weekWidth - monthWidth)
		  .outerRadius(radius - donutWidth - illumWidth - weekWidth)
      // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
      // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });		
      // .startAngle(function(d) { return d.startAngle + Math.PI; })
      // .endAngle(function(d) { return d.endAngle + Math.PI; });
      .startAngle(startAngleFunc)
      .endAngle(endAngleFunc);

    var month_pie = d3.layout.pie()
      .value(function(d) { return d.days/len; })
      .sort(null)
			.endAngle(Math.PI*2-gap)

		var month_g = svg.selectAll(".marc")
		   .data(month_pie(monthdata))
		   .enter().append("g")
		   .attr("class", "marc");

		month_g.append("path")
      .attr("d", month_arc)
			.attr("id", function(d,i) { return "m"+i; })
      .style("fill", function(d) { return "lightgrey"; });

		// weeks
		var week_arc = d3.svg.arc()
		.innerRadius(radius - donutWidth - illumWidth - weekWidth)
	  .outerRadius(radius - donutWidth - illumWidth)
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
    // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });

    var week_pie = d3.layout.pie()
      .value(function(d) { return d.days/len; })
      .sort(null)
			.endAngle(Math.PI*2-gap)
	
		var week_g = svg.selectAll(".warc")
		   .data(week_pie(weekdata))
		   .enter().append("g")
		   .attr("class", "warc");

		week_g.append("path")
      .attr("d", week_arc)
      .style("fill", function(d) { return "lightgrey"; });
	
	
	// days
	var arc = d3.svg.arc()
		.innerRadius(radius - donutWidth)
    .outerRadius(radius)
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
    // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });

  var pie = d3.layout.pie()
    .value(function(d) { return d.size; })
    .sort(null)
		.endAngle(Math.PI*2-gap)
	
	var g = svg.selectAll(".arc")
	   .data(pie(dataset))
	   .enter().append("g")
	   .attr("class", "arc");


	g.append("path")
    .attr("d", arc)
    .style("fill", function(d) {
			return wheel_color;
			// return "#FFFF00";
		});

  var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
			return "white";
    });

	// illumination ring
	var illum_arc = d3.svg.arc()
		.innerRadius(radius - donutWidth - illumWidth)
    .outerRadius(radius - donutWidth)
    // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
    // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);

	g.append("path")
    .attr("d", illum_arc)
    .style("fill", function(d) { 
			// if (d.data['count'] == 1) {
			// 	return "red";
			// }
			return "rgba(0,0,0,"+(1-d.data['illum'])+")"; 
		});

  var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', illum_arc)
    .attr('fill', function(d, i) {
			return "lightgrey";
    });				

	// weekday labels	
	var wdpos = d3.svg.arc()
		.innerRadius(radius-donutWidth-weekWidth-illumWidth + (weekWidth/2))
		.outerRadius(radius-donutWidth-weekWidth-illumWidth + (weekWidth/2))
    // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
    // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);
	
	g.append("text")
		.attr("transform", function(d) {
			return "translate(" + wdpos.centroid(d) + ")"; })
	  .attr("dy", 5)
    .style("text-anchor", "middle")
    .style("font-size", "small")
    .text(function(d) {
			return weekdays[d.data.weekday];
			//return d.data.month+1 + "/" + (d.data.day+1);
			//return d.data.count;
		});
					
	// month labels
	month_g.append("text")
	  .style("font-size", "small")
		.style("letter-spacing", "2")
	  .attr("dy","35")
	  .append("textPath")
	  // .attr("textLength",function(d,i){return 90-i*5 ;})
	  .attr("xlink:href",function(d,i){return "#m"+i;})
	  .attr("startOffset",function(d,i){return 1/120;})
	  .text(function(d){return month_names[d.data['num']]})

	
	//day of month numbers
	var pos = d3.svg.arc()
		.innerRadius(radius-donutWidth-weekWidth-illumWidth - (monthWidth/2))
		.outerRadius(radius-donutWidth-weekWidth-illumWidth - (monthWidth/2))
    // .startAngle(function(d) { return d.startAngle + Math.PI/8 + gap/2; })
    // .endAngle(function(d) { return d.endAngle + Math.PI/8 + gap/2; });		
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);

	g.append("text")
		.attr("transform", function(d) {
			return "translate(" + pos.centroid(d) + ")"; })
	  .attr("dy", 5)
			      .style("text-anchor", "middle")
					.style("font-size", "small")
			      .text(function(d) {
			// return weekdays[d.data.weekday];
			//return d.data.month+1 + "/" + (d.data.day+1);
			return d.data.day+1;
			return d.data.count;
		});
	
	
	// moon shape labels
  var pos = d3.svg.arc()
    .innerRadius(radius - donutWidth - illumWidth/2)
    .outerRadius(radius - donutWidth - illumWidth/2)
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    .startAngle(startAngleFunc)
    .endAngle(endAngleFunc);

  g.append("text")
    .attr("transform", function(d) {
      return "translate(" + pos.centroid(d) + ")"; })
    .attr("dy", 8)
            .style("text-anchor", "middle")
            .text(function(d) {
      // return weekdays[d.data.weekday];
      if (d.data.illum > 0.99) {
        return "*";
      } 
      // else if (d.data.illum < 0.01) {
      //   return "."
      // }
      // return d.data.illum;
      // return d.data.month+1 + "/" + (d.data.day+1);
      // return d.data.count;
    });

	// moon day labels
  var pos = d3.svg.arc()
    .innerRadius(radius - 10)
    .outerRadius(radius - 10)
    // .startAngle(function(d) { return d.startAngle + Math.PI; })
    // .endAngle(function(d) { return d.endAngle + Math.PI; });
    .startAngle(function(d) {return startAngleFunc(d) - day_angle/3})
    .endAngle(function(d) {return endAngleFunc(d) - day_angle/3});

  g.append("text")
    .attr("transform", function(d) {
      return "translate(" + pos.centroid(d) + ")"; })
    .attr("dy", 5)
            .style("text-anchor", "middle")
            .style("font-size", "small")
            .text(function(d) {
      // return weekdays[d.data.weekday];
      // return d.data.illum;
      // return d.data.month+1 + "/" + (d.data.day+1);
      return d.data.count;
    });
	

};
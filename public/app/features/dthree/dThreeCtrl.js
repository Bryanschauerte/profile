angular.module('profileApp').controller('dThreeCtrl', function() {

  var store = [];
  for (var i = 0; i < 10; i++) {
    store.push(i);
  }



  var baseBox = d3.select('#baseBox');

  var balls = baseBox.selectAll('circle')
    .data(store).enter()


  .append("circle")
    .each(function() {
      d3.select(this)
        .attr("fill", "hsl(" + (Math.random() * 360) + ",100%,50%)")
        .attr("cx", Math.random() * 200)
        .attr("cy", Math.random() * 200)
        .attr("r", function(d, i) {
          return (Math.random() * 10) + 2 + "%";
        });
    })
    .transition().each("end", function() {
      myTransf();
    });



  function myTransf() {
    baseBox.selectAll('circle').each(function() {
      d3.select(this)

      .transition().duration(1000)
        .attr("cx",  Math.max(5, Math.random() * 70))
        .attr("cy", Math.max(5, Math.random() * 70))
        .each("end", function() {
          // $interval(myTransf, 5000);
          myTransf();
        });
    });
  }




});

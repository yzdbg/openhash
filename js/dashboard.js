function graph(canvas){

  var context = canvas.getContext("2d"), width = canvas.width, height = canvas.height;

  if(canvas==document.getElementById("hashrate-graph")){
    var fillGradient = context.createLinearGradient(0,height,width,height);
    fillGradient.addColorStop(0,"#32345b");
    fillGradient.addColorStop(1,"#4a323c");

    var strokeGradient = context.createLinearGradient(0,height,width,height);
    strokeGradient.addColorStop(0,"#5343d1");
    strokeGradient.addColorStop(1,"#cf363f");
  }

  var fadeGradient = context.createLinearGradient(0,height,0,0);
  fadeGradient.addColorStop(0,"rgba(43, 44, 49, 1)");
  fadeGradient.addColorStop(0.4,"rgba(43, 44, 49, 0)");

  context.lineWidth = 1;

  var val = height - (height/3 + Math.random()*height/5);

  context.fillStyle=fillGradient;
  context.strokeStyle=strokeGradient;
  context.moveTo(0,val);

  if(canvas==document.getElementById("hashrate-graph") || canvas==document.getElementById("earnings-graph")){
    for(var i=0; i<width; i+=width/20){
      context.lineTo(i,val);
      val = height - (height/2  + Math.random()*height/5)
    }
  }

  context.lineTo(width, height);
  context.lineTo(0,height);

  context.fill();
  context.stroke();
  context.fillStyle=fadeGradient;
  context.fill();
}



$(document).ready(function(){
  var baseHeight = $("#worker1").height()

  $("div.worker").click(function(){
    var expandButton = $(this).find("i")
    if($(this).height()> baseHeight){
      $(this).css("height", "20%")
      expandButton.css("transform","rotate(0deg)")
    }
    else {
      $(this).css("height", "40%")
      expandButton.css("transform","rotate(180deg)")
    }
  });
  var hashrate = this.getElementById("hashrate-graph")
  hashrate.height = $("#chart").height()*0.85;
  hashrate.width = $("#chart").width()*0.95;
  graph(hashrate);
});

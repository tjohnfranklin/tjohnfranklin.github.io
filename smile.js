//DOCTYPE javascript//

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let baseCol = "#33FF33";
ctx.font = "10px Arial";
ctx.fillStyle = baseCol;
ctx.fillText(0, c.width*0.9, c.height*0.1);

let defaultFace = {
	colour: baseCol,
	mood: "happy",
    head: {
        x: (c.width)/2,
        y: (c.height)/2,
        rad: (c.width)*0.4,
		colour: baseCol,
		draw : function() {
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
			ctx.strokeStyle = this.colour;
			ctx.stroke();
		}
    },
	eyes: {
		left: {
			x: ((c.width)/2)-(((c.width)*0.4)*0.4),
			y: ((c.height)/2)-(((c.width)*0.4)*0.4),
			rad: 5,
			colour: baseCol,
			mood: "happy",
			draw: function() {
				ctx.moveTo(this.x,this.y);
				ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
				ctx.strokeStyle = this.colour;
				ctx.stroke();
				ctx.fillStyle = this.colour;
				ctx.fill();
			}
		},
		right: {
			x: ((c.width)/2)+(((c.width)*0.4)*0.4),
			y: ((c.height)/2)-(((c.width)*0.4)*0.4),
			rad: 5,
			colour: baseCol,
			mood: "happy",
			draw: function() {
				ctx.moveTo(this.x,this.y);
				ctx.arc(this.x,this.y,this.rad,0,2*Math.PI);
				ctx.strokeStyle = this.colour;
				ctx.stroke();
				ctx.fillStyle = this.colour;
				ctx.fill();
			}
		},
		drawBoth: function() {
			this.left.draw();
			this.right.draw();
		}
	},
	mouth: {
		mood: "happy",
		colour: baseCol,
		x: (c.width)/2,
		y: (c.height)/2,
		rad: (c.width)*0.4*0.75,
		draw:	function() {
			ctx.beginPath();
			if (this.mood == "happy"){
				ctx.arc(this.x,this.y,this.rad,Math.PI/6,5*Math.PI/6)   
			}
			if (this.mood == "sad"){
				ctx.arc(this.x,this.y+(this.rad*0.75),this.rad,Math.PI+Math.PI/6,Math.PI+(5*Math.PI/6))
			}
			ctx.strokeStyle = this.colour;
			ctx.stroke();
		}
	},
	drawAll: function() {
		this.eyes.drawBoth();
		this.head.draw();
		this.mouth.draw();
	}
};

defaultFace.drawAll();
var Clock = function (canvas, options) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.options = options;
};

Clock.prototype = {
    constructor: Clock,
    drawCircle: function () {
        var ctx = this.ctx;
        ctx.strokeStyle = "black";
        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 50, 0, 2 * Math.PI, false);
        ctx.stroke();
    },
    drawNum: function () {
        var ctx = this.ctx;
        var angle = Math.PI * 2 / 12;
        for (var i = 1; i <= 12; i += 1) {
            ctx.font = "15px STKaiti";
            ctx.textAlign = "center";
            ctx.textBaseline = 'middle';
            ctx.fillText(String(i), this.canvas.width / 2 + Math.cos(3 *Math.PI / 2 + angle * i) * 40, this.canvas.height / 2 + Math.sin(3 * Math.PI / 2 + angle * i) * 40);
        }
    },
    drawPointer: function () {
        var ctx = this.ctx;
        var that = this;
        var date, hour, minute, second;
        date = new Date();
        hour = date.getHours();
        if (hour > 12) {
            hour = hour % 12;
        }
        minute = date.getMinutes();
        second = date.getSeconds();
        
        var b = minute * Math.PI / 30;
        var c = second * Math.PI / 30;
        var a = hour * Math.PI / 6 + Math.PI / 6 * minute / 60;
        var minuteAngle = Math.PI * 2 / 3600;
        var secondAngle = Math.PI * 2 / 60;
        var hourAngle = Math.PI * 2 / 12 / 3600;
        
        ctx.beginPath();
        ctx.save();
        ctx.translate(that.canvas.width / 2, that.canvas.height / 2);
        ctx.arc(0, 0, 3, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        a += hourAngle;
        ctx.rotate(a);
        ctx.fillRect(-2, -22, 4, 30);
        ctx.closePath();
        ctx.beginPath();
        b += minuteAngle;
        ctx.rotate(b - a);
        ctx.fillRect(-1.5, -26, 3, 35);
        ctx.closePath();
        ctx.beginPath();
        c += secondAngle;
        ctx.rotate(c - b);
        ctx.fillRect(-1, -30, 2, 40);
        ctx.closePath();
        ctx.restore();
    },
    rePaint: function () {
        this.drawPointer();
        this.drawCircle();
        this.drawNum();
    },
    tik: function () {
        var that = this;
        var ctx = this.ctx;
        this.rePaint();
        window.timer = setInterval(function () {
            ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
            that.rePaint();
        }, 1000);
    }
};

var options;
var clock = new Clock(document.getElementById("canvas"), options);
clock.tik();
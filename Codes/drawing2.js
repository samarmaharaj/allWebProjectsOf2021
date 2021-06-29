function draw_grid(ctx, minor, major, stroke, fill){
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || "green";
    fill = fill || "white";
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    
    var width = ctx.canvas.width, height = ctx.canvas.height;
    for(x = 0; x < width; x += minor){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major == 0) ? 2 : 1;
        ctx.stroke();
         if(x % major == 0) {ctx.fillText(x, x, 10);}
    }
    for(y = 0; y < width; y += minor){
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major == 0) ? 2 : 1;
        ctx.stroke();
         if(y % major == 0) {ctx.fillText(y, 0, y + 10);}
    }
    ctx.restore();
}

function draw_ship(ctx, x, y, radius, options){
    options = options || {};
    ctx.save();
    
    if(options.guide){
        ctx.strokeStyle = "red";
        ctx.fillStyle = "yellow";
        ctx.lineWidth = "2";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
    
    ctx.strokeStyle = options.stroke || "green";
    ctx.lineWidth = options.lineWidth || "2";
    ctx.fillStyle = options.fill || "black";
    let angle = (options.angle || 0.5 * Math.PI)/2;
    
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(
        x + Math.cos(Math.PI - angle) * radius,
        y + Math.sin(Math.PI - angle) * radius
    )
    ctx.lineTo(
    x + Math.cos(Math.PI + angle) * radius,
    y + Math.sin(Math.PI + angle) * radius
    )
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
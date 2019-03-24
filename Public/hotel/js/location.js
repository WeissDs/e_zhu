

function getRad(d){
	return d*(Math.PI)/180.0;
}
//获取距离方法
function getDistance(lat1, lng1, lat2, lng2){
	lat1=lat1*1;
	lng1=lng1*1;
	lat2=lat2*1;
	lng2=lng2*1;
	var f=getRad((lat1+lat2)/2);
	var g=getRad((lat1-lat2)/2);
	var l=getRad((lng1-lng2)/2);
			
	var sf=Math.sin(f);
	var sg=Math.sin(g);
	var sl=Math.sin(l);
			
	var s, c, w, r, d, h1, h2;
	var fl=1/298.257;
			
	sg=sg*sg;
	sl=sl*sl;
	sf=sf*sf;
			
	s=sg*(1-sl)+(1-sf)*sl;
	c=(1-sg)*(1-sl)+sf*sl;
			
	w=Math.atan(Math.sqrt(s/c));
	r=Math.sqrt(s*c)/w;
	d=2*w*6378137.0;
	h1=(3*r-1)/2/c;
	h2=(3*r+1)/2/s;
	
	return d*(1+fl*(h1*sf*(1-sg)-h2*(1-sf)*sg));
}
//获取距离方法
function getFriendDistance(lat1, lng1, lat2, lng2){
	var dis=0;
	
		dis=getDistance(lat1, lng1, lat2, lng2);
		console.log(dis);
	if(dis<10000){
		return '约'+(dis>>0)+'m';
	}else{
		return '约'+((dis/1000)>>0)+'km';
	}
}


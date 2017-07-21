var url="work.json";
$.ajax({
	url:url,
	type:"GET",
    datatype:"json",
	success:function(data){
		
		mess=data;
		console.log(data);
		console.log("Json_request");
		Next_code(data);
	},
	error:function(){
		console.log("Json_no_request");
	}
});
//var data=messages;
function Next_code(data){
console.log(data.arr[0]);

var html="";
var Str={
	New: function(elem)
	{
		var el=document.createElement(elem);
		return el;

	}

};
var Elem={
	newElem: function(elem,attrs)
	{
		var el=document.createElement(elem);
		Elem.setAttrs(el, attrs);
        return el;

	},
	setAttrs:function(elem,attrs)
	{
		for(var a in attrs)
			elem.setAttribute(a,attrs[a]);
	},
	setText:function(elem,txt)
	{
		elem.appendChild(document.createTextNode(txt));
	}

};
var global=Elem.newElem("table",{id:'tab'});

for(var i=0;i<data.arr.length;i++)
			{
				var checkbox =Elem.newElem('input',{id:'checkbox', type:'checkbox'});		
				var nam =Elem.newElem('p', {id:'Nam'+i, onclick:'click', style:'cursor:pointer;', 'data-toggle':"modal", 'data-target':'#myModal'});
				var topic=Elem.newElem('p', { id:'topic'+i, onclick:'click', style:'cursor:pointer', value:'ghbdtn','data-toggle':"modal", 'data-target':'#myModal'});
				var mess=Elem.newElem('p', {id:'message'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal' });
				var time=Elem.newElem('p', {id:'time'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal'});
				var str=Elem.newElem('tr',{id:'tr'+i});
				str.innerHTML='<td></td><td></td><td></td><td></td><td></td>';
				
				nam.innerHTML=data.arr[i].from;
				topic.innerHTML=data.arr[i].subject;
				mess.innerHTML=data.arr[i].content;
				time.innerHTML=data.arr[i].date;
				console.log(data.arr[i].content);
				str.getElementsByTagName('td')[0].appendChild(checkbox);
				str.getElementsByTagName('td')[1].appendChild(nam);
				str.getElementsByTagName('td')[2].appendChild(topic);
				str.getElementsByTagName('td')[3].appendChild(mess);
				str.getElementsByTagName('td')[4].appendChild(time);
				var ID;	
					str.addEventListener('click',function(e){
						ID=e.currentTarget.id.replace('tr','');
						$("#mail").text($("#Nam"+ID).text());
    $("#top").text($("#topic"+ID).text());
    $("#dat").text($("#time"+ID).text());
    $("#mess").text($("#message"+ID).text());
						console.log(ID);

					});
console.log(ID);
				
				document.getElementById("Messages").appendChild(str);
			}
};			
/*var Messages=React.createClass({
	render:function()
	{
		return(	
				
			
			)
	}
});
RenderDOM(<Messages />, documentById("Messages"))*/
var messages=$.ajax({
	url:"work.json",
	type:"json",
	success:function(){
		console.log("Json_request");
	},
	error:function(){
		console.log("Json_no_request");
	}
});
//messages=JSON.parse(messages);
console.log(messages);
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

for(var i=0;i<10;i++)
			{
				var checkbox =Elem.newElem('input',{id:'checkbox', type:'checkbox'});		
				var nam =Elem.newElem('span', {id:'Nam',class:'btn btn-primary btn-lg', 'data-toggle':"modal", 'data-target':'#myModal'});
				var topic=Elem.newElem('span', { id:'topic',class:'btn btn-primary btn-lg', value:'ghbdtn','data-toggle':"modal", 'data-target':'#myModal'});
				var mess=Elem.newElem('span', {id:'message',class:'btn btn-primary btn-lg', 'data-toggle':"modal", 'data-target':'#myModal' });
				var time=Elem.newElem('span', {id:'time', class:'btn btn-primary btn-lg', 'data-toggle':"modal", 'data-target':'#myModal'});
				var str=Elem.newElem('tr',{id:'tr'});
				str.innerHTML='<td></td><td></td><td></td><td></td><td></td>';
				
				str.getElementsByTagName('td')[0].appendChild(checkbox);
				str.getElementsByTagName('td')[1].appendChild(nam);
				str.getElementsByTagName('td')[2].appendChild(topic);
				str.getElementsByTagName('td')[3].appendChild(mess);
				str.getElementsByTagName('td')[4].appendChild(time);
					

				
				document.getElementById("Messages").appendChild(str);
			}
			
/*var Messages=React.createClass({
	render:function()
	{
		return(	
				
			
			)
	}
});
RenderDOM(<Messages />, documentById("Messages"))*/
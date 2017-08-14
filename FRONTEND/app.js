function Allthis (id){
	var url;
	var datam, req, contenttype="";
	switch(id){
		case 0:
			var pull=$("#exampleInputword").val();
			console.log(pull);
			datam={"word" : pull};
			contenttype="json"
			req="GET";
			url="http://localhost:57772/res/messagesfound";	
			break;
		case 1:
			url="http://localhost:57772/res/messages";
			req="GET";
			break;
		case 2:
			url="http://localhost:57772/";	
			break;
		case 3:
			url="http://localhost:57772/";	
			break;
		case 4:
			url="http://localhost:57772/";	
			break;
		case 5:
			url="http://localhost:57772/";	
			break;
	}


                        $.ajax({
                        url:url,
                        
                        type:req,
                        datatype:"json",
                        data:datam,
                        success:function(data){
                        	console.log(data);
                        	//console.log(JSON.parse(data));
                        	//console.log(JSON.parse(data)[0].from);
                            
	                        console.log("Json_request");
                            Next_code(JSON.parse(data),id);
                            datam={};          
                        },
                        error:function(){
                            console.log("Json_no_request");
                        }
                        });

};
	function Next_code(data)
	{
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
									var global=Elem.newElem("table",{id:'tab', style:'font-size:40px', width:'100%'});
									if(window.screen.width<992)
									{
										document.getElementById("table_or_button").innerHTML = "";
										var button =Elem.newElem('input', {type:'button', id:'Menu', style:'font-size:40px', value:'Menu'});
										document.getElementById("includedContent").innerHTML = "";
										document.getElementById("includedContent").appendChild(button);
										document.getElementById('table_or_button').style.backgroundColor= 'rgba(0,0,0,0.3)';
										document.getElementById('table_or_button').style.color= 'white';
									}
									else
										document.getElementById("Messages").innerHTML="";
									
									for(var i=0;i<data.length;i++)
												{
													var checkbox =Elem.newElem('input',{id:'checkbox', type:'checkbox',class:'hidden-sm hidden-xs'});		
													var nam =Elem.newElem('p', {id:'Nam'+i, onclick:'click', style:'cursor:pointer;', 'data-toggle':"modal", 'data-target':'#myModal'});
													var topic=Elem.newElem('p', { id:'topic'+i, onclick:'click', style:'cursor:pointer', value:'ghbdtn','data-toggle':"modal", 'data-target':'#myModal'});
													var mess=Elem.newElem('p', {id:'message'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal' });
													var time=Elem.newElem('p', {id:'time'+i, onclick:'click', style:'cursor:pointer','data-toggle':"modal", 'data-target':'#myModal'});
													var str=Elem.newElem('tr',{id:'tr'+i, style:'border-bottom:2px solid #ffffff;'});
													
													
													nam.innerHTML=data[i].from;
													topic.innerHTML=data[i].subject;
													mess.innerHTML=data[i].content;
													time.innerHTML=data[i].date;
													if(window.screen.width>992){
														str.innerHTML='<td></td><td></td><td></td><td></td><td></td>';
														str.getElementsByTagName('td')[0].appendChild(checkbox);
														str.getElementsByTagName('td')[1].appendChild(nam);
														str.getElementsByTagName('td')[2].appendChild(topic);
														str.getElementsByTagName('td')[3].appendChild(mess);
														str.getElementsByTagName('td')[4].appendChild(time);
														
													}
													else{
														str.innerHTML='<td class="hidden-md hidden-lg"  style="padding-left: 10%; font-size:40px"></td>';
														str.getElementsByTagName('td')[0].appendChild(nam);
														str.getElementsByTagName('td')[0].appendChild(topic);
														str.getElementsByTagName('td')[0].appendChild(mess);
														str.getElementsByTagName('td')[0].appendChild(time);
													}
													
													var ID;	
														str.addEventListener('click',function(e){
															
															ID=e.currentTarget.id.replace('tr','');
															$("#mail").text($("#Nam"+ID).text());
														    $("#top").text($("#topic"+ID).text());
														    $("#dat").text($("#time"+ID).text());
														    $("#mess").text($("#message"+ID).text());
															console.log(ID);
															

														});

													
													
													if(window.screen.width>992)
														document.getElementById("Messages").appendChild(str);
													else
														global.appendChild(str);
											}
												
											document.getElementById("table_or_button").appendChild(global);	
								$('#Menu').click(function(e){
									/*document.getElementById("clone").innerHTML = ""; СПРОСИТЬ У САШИ ПРО ТО КАК ЭТО РЕАЛИЗОВАТЬ
									var link=document.querySelector('link[rel=import]');
									var content = link.import.querySelector('#th');

									

									console.log(document.getElementById("clone"));

									while(content.firstChild)
										{
											var l=document.getElementById("clone").appendChild(content.firstChild);
											console.log(content.firstChild);
										}
									
									var el=document.getElementById("clone");
									console.log(el);*/
									window.location.reload();
								});    
	    /*$("#buttun").click(function(ev){
	
	var pull=$("#Inputserch").val();
	var url="http://localhost:57772/res/messages";
	$.ajax({
		url:"work.json",
		type:"GET",
		data:{search:pull},
	    datatype:"json",
		success:function(data){
				
			console.log("Json_respons");
			Next_code(data);
		},
		error:function(){
			console.log("Json_no_response");
		}
	});
});*/
                 
	};



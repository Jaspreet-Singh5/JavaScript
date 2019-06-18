$("ul").on("click","li",function()
{
	$(this).toggleClass("completed"); 
});

$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
	{
		if(event.which === 13)
		{
			var to_do_text = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> " + to_do_text + "</li>");
		}
	});	

$(".fa-plus-circle").click(function()
{
	$("input[type='text']").fadeToggle();
});
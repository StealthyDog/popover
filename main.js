let event=true
$('#btn').on('click',function(){
   if(event){
     $('#float').show()
   }else{
     $('#float').hide()
   }
   event = !event
})

$('#box').on('click',function(e){
   e.stopPropagation()
})
$('document').on('click',function(){
   $('#float').hide()
   event = true
}) 

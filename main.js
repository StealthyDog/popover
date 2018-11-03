let e=true
$('#btn').on('click',function(){
   if(e){
     $('#float').show()
   }else{
     $('#float').hide()
   }
  $(document).one('click',function(){
   $('#float').hide()
   e = true
}) 
   e = !e
})

$('#box').on('click',function(a){
   a.stopPropagation()
})

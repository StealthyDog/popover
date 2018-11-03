let event=true

$('#btn').on('click',function(){
      console.log(1)
   if(event){
     $('#float').show()
   }else{
     $('#float').hide()
   }
  $(document).one('click',function(){
   $('#float').hide()
   event = true
}) 
   event = !event
})

$('#box').on('click',function(a){
   a.stopPropagation()
})

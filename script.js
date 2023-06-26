function getData(a)
{
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json(); 
    }).then((data)=>{
       console.log(data);
       $("#sec").removeClass("h-screen");
       $("#sec").addClass("h-full");
       $("#h4-des").addClass("hidden");
       $(".user").removeClass("hidden");

       
       var value = data;      

           var img1=(value['data'][0]['avatar']);
           $('#img-1').attr('src', img1);
           var img2=(value['data'][1]['avatar']);
           $('#img-2').attr('src', img2);
           var img3=(value['data'][2]['avatar']);
           $('#img-3').attr('src', img3);
           var img3=(value['data'][3]['avatar']);
           $('#img-4').attr('src', img3);
           var img3=(value['data'][4]['avatar']);
           $('#img-5').attr('src', img3);
           var img3=(value['data'][5]['avatar']);
           $('#img-6').attr('src', img3);
   

           var first1=(value['data'][0]['first_name']);
           var last1=(value['data'][0]['last_name']);

           $('#name-1').html( first1+" "+last1) ;
           var first1=(value['data'][1]['first_name']);
           var last1=(value['data'][1]['last_name']);
           $('#name-2').html( first1+" "+last1);
           var first1=(value['data'][2]['first_name']);
           var last1=(value['data'][2]['last_name']);
           $('#name-3').html( first1+" "+last1);
           var first1=(value['data'][3]['first_name']);
           var last1=(value['data'][3]['last_name']);
           $('#name-4').html( first1+" "+last1);
           var first1=(value['data'][4]['first_name']);
           var last1=(value['data'][4]['last_name']);
           $('#name-5').html( first1+" "+last1);
           var first1=(value['data'][5]['first_name']);
           var last1=(value['data'][5]['last_name']);
           $('#name-6').html( first1+" "+last1);

           
      var mail1=(value['data'][0]['email']);
           $('#email-1').html( mail1);
           var mail2=(value['data'][1]['email']);
           $('#email-2').html( mail2);
           var mail3=(value['data'][2]['email']);
           $('#email-3').html( mail3);
           var mail3=(value['data'][3]['email']);
           $('#email-4').html( mail3);
           var mail3=(value['data'][4]['email']);
           $('#email-5').html( mail3);
           var mail3=(value['data'][5]['email']);
           $('#email-6').html( mail3);
        })
}


      // ajax
      var data;
      window.onload = function() {
        setTimeout(function() {
          xhr = new XMLHttpRequest();
          xhr.open('GET', 'main.json', true);
          xhr.onload = function(){
            if(xhr.status == 200){
              data = JSON.parse(this.responseText);
            };
          };
          xhr.send();

          new Image().src = "http://despider.com/images/odtu.png";
          new Image().src = "http://despider.com/images/terahertz.png";
          new Image().src = "http://despider.com/certificates/CCA-HTML.png";
          new Image().src = "http://despider.com/certificates/CCA-CSS.png";
          new Image().src = "http://despider.com/certificates/CCA-JS.png";
          new Image().src = "http://despider.com/certificates/CCA-JQuery.png";
          new Image().src = "http://despider.com/certificates/CCA-PHP.png";
          new Image().src = "http://despider.com/certificates/CCA-MYSQL.png";
          new Image().src = "http://despider.com/images/course1.png";
          new Image().src = "http://despider.com/images/course2.png";
          new Image().src = "http://despider.com/images/course3.png";
          new Image().src = "http://despider.com/images/course5.png";
          new Image().src = "http://despider.com/images/course6.png";
          new Image().src = "http://despider.com/images/course7.png";
          new Image().src = "http://despider.com/images/course8.png";
          new Image().src = "http://despider.com/images/course9.png";
          new Image().src = "http://despider.com/images/course10.png";
          new Image().src = "http://despider.com/images/course11.png";
          new Image().src = "http://despider.com/images/course12.png";
          new Image().src = "http://despider.com/images/course13.png";
          new Image().src = "http://despider.com/images/course14.png";
          new Image().src = "http://despider.com/images/course15.png";
          new Image().src = "http://despider.com/images/course16.png";
          new Image().src = "http://despider.com/images/course17.png";
          new Image().src = "http://despider.com/images/course18.png";
          new Image().src = "http://despider.com/images/course19.png";
          new Image().src = "http://despider.com/images/course20.png";
          new Image().src = "http://despider.com/images/kristal.png";
          new Image().src = "http://despider.com/images/projects/terahertz.png";
          new Image().src = "http://despider.com/images/projects/gpa.png";
          new Image().src = "http://despider.com/images/projects/blog.png";
          new Image().src = "http://despider.com/images/projects/bookmarker.png";
          new Image().src = "http://despider.com/images/projects/weather.png";
          new Image().src = "http://despider.com/images/projects/bbc.png";
          new Image().src = "http://despider.com/images/projects/bootstrap.png";
          new Image().src = "http://despider.com/images/projects/camp.png";
          new Image().src = "http://despider.com/images/projects/blogapp.png";
          new Image().src = "http://despider.com/images/projects/movieapp.png";
          new Image().src = "http://despider.com/images/projects/beshop.png";
          new Image().src = "http://despider.com/images/projects/graphql.png";
          new Image().src = "http://despider.com/images/projects/insibat.png";
          new Image().src = "http://despider.com/images/projects/pulltw.png";
          new Image().src = "http://despider.com/images/projects/recipeBook.png";
          new Image().src = "http://despider.com/images/projects/triot.png";

          
        }, 100);
      };

      function getPage(id){

          $("#profile-header").html(data[id].profileHeader);
          $("#panel-img-block").html(data[id].panelImgBlock);
          $(".app-div").html(data[id].appDiv);
          $("#menu").html(data[id].menu);

          if(id == 'certificates'){
            //certificate popup
          $('.certificates-div').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery:{enabled:true}
          });
          }

          if (id == 'index'){
            // water ripple
            $(".right-div").ripples();
          }

          if(id == 'skills'){
            $( function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
            });
          }

          if (id == 'award') {
            setTimeout(function() {
              $('#award-img').fadeIn(1);
              $('#desc').slideDown(500);
            }, 500);
          }

      };

      // water ripple
       $(".right-div").ripples();

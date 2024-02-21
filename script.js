

var typed = new Typed('#type-animation', {
    strings: ['<i>Frontend Developer</i>.', '<i>Backend Developer</i>.', '<i>Web Desginer</i>'],
    typeSpeed: 100,
    loop : true, 
    backspeed : 150
  });
  var sectionHeight = document.getElementById('skills');

  function toggleContainer() { 

    var element = document.getElementById('ft-head');
    var lowerContainer = document.getElementById('ft-lower-container');
    // var getHeight = sectionHeight.style.height = '40vh';
    sectionHeight.style.height = '95vh' 
    // console.log(sectionHeight.style.height);
    if(lowerContainer.style.display === "none") { 
      lowerContainer.style.display = "block";
      animateValue(htmlPercent, 0, 90, 1200);        
      progressAnimation('html-progressbar',90, 10); 
      
      // for css 
      animateValue(cssPercent, 0, 80, 1400);  
      progressAnimation('css-progressbar',80, 20);
      
      // forBootstrap();
      animateValue(bootstrapPercent, 0,70, 1000);  
      progressAnimation('bootstrap-progressbar',70, 20);    
      
      // forJavascript
      animateValue(jsPercent, 0, 85, 1000);  
          progressAnimation('js-progressbar',85, 20);    
          
          // Angular 
          animateValue(AnuglarPercent, 0, 90, 1000);  
          progressAnimation('angular-progressbar',90, 20);    
          
          // React
          animateValue(reactPercent, 0, 90, 1000);  
          progressAnimation('react-progressbar',90, 28);    
        } else { 
          lowerContainer.style.display = "none";
          sectionHeight.style.height = '50vh' 
        }    
      }

    function toggleContainerForBE() { 
    var element = document.getElementById('box2');
    var lowerContainer = document.getElementById('backend-container');
    sectionHeight.style.height = '65vh' 
    
    if(lowerContainer.style.display === "none") { 
      lowerContainer.style.display = "block";
      // for jss
      animateValue(jssPercent, 0, 90, 1200);        
      progressAnimation('jss-progressbar',90, 20); 
      
      // for css 
      animateValue(typescriptPercent, 0, 80, 1400);  
      progressAnimation('type-progressbar',80, 25);
      
      // Nodejs;
      animateValue(nodePercent, 0,70, 1000);  
      progressAnimation('nodejs-progressbar',70,25);    
      
    } else { 
      lowerContainer.style.display = "none";
      sectionHeight.style.height = '50vh' 
    }    
  }
  function toggleContainerForDB() { 
    let element = document.getElementById('DB-heading');
    let lowerContainer = document.getElementById('Database-container');
    sectionHeight.style.height = '80vh' 
    if(lowerContainer.style.display === "none") { 
      lowerContainer.style.display = "block";
      // for My Sql 
      animateValue(mySqlPercent, 0, 90, 1200);        
      progressAnimation('mysql-progressbar',90, 10); 
      
      // for MongoDB
      animateValue(mongoDBPercent, 0, 80, 1400);  
      progressAnimation('mongoDB-progressbar',80, 5);
      
      // AWS;
      animateValue(awsPercent, 0,70, 1000);  
      progressAnimation('aws-progressbar',90, 10);    

    } else { 
      lowerContainer.style.display = "none";
      sectionHeight.style.height = '50vh' 
    }    
      }

      function animateValue(obj, start, end, duration) {
              let startTimestamp = null;
              const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
                  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                  obj.innerHTML = Math.floor(progress * (end - start) + start);
                  if (progress < 1) {
                  window.requestAnimationFrame(step);
                  // let counts = setInterval(updated);
              }   
          };
          window.requestAnimationFrame(step);
      }
      
      function progressAnimation( getID, end , getFrame) { 
        var i = 0;
        // end;
        if(i == 0) { 
          i  = 1; 
          let getElem = document.getElementById(getID);
          var width = 1; 

          var id = setInterval(frame, getFrame);
          function frame() {  
            if(width >= end) { 
              clearInterval(id);
              i = 0;
            } else { 
              width++;
              getElem.style.width = width + '%';
            }
          }
        }
      } 

      let upto = 0;
      function updated() {
          let count = document.getElementById("ad");
          count.style.width =  "79%";
          if (upto === 100) {
              clearInterval(counts);
          }
       }



// media query 
const btnMenu = document.getElementById('menu-div'); 


function HamburgerMenu() { 
  document.querySelector('.menu-div').style.display =  (document.querySelector('.menu-div').style.display == 'none') ? 'block' : 'none';
  
}
// btnMenu.addEventListener('click', function() { 
//   document.querySelector('.menu-div').style.display =  (document.querySelector('.menu-div').style.display == 'none') ? 'block' : 'none';
//   // btnMenu.textContent = `Click count: ${event.detail}`;
// });


// const getIdProjectCarousel = document.querySelector('carouselExampleIndicators');
// console.log("get id ")

function getContainer() { 
  console.log("inside the function");
  console.log(document.body.offsetWidth)
  // console.log(client.width);
}

getContainer();
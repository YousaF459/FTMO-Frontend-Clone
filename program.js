const hamburger=document.getElementById('hamburger');
const navSearchLogo = document.getElementById('navsearchlogo');
const searchText = document.getElementById('searchtext');
const navbar =document.getElementById('navbar');
const searchContainer = document.getElementById('searchlogomain');
const searchholder = document.getElementById('searchholder');
const carouselnext=document.getElementById('homecarouselnext');
const carouselprev=document.getElementById('homecarouselprev');
const carouselnav = document.querySelectorAll('.homecarouselnavbuttons');
const carouselFirst = document.getElementById('carouselfirst');
const carouselContainers = document.querySelectorAll('.carouselcontainers');
const homevideo=document.getElementById('videodiv');
const homevideooff=document.getElementById('videocrosshome');
const homevideoplay=document.getElementById('firstpagerightplay');
const tableleftbutton=document.getElementById('arrowtableleft');
const tablerightbutton=document.getElementById('arrowtableright');
let carouselcounter=0;
const tablecolumnone=document.querySelectorAll('.colone');
const tablecolumntwo=document.querySelectorAll('.coltwo');
const tablecolumnthree=document.querySelectorAll('.colthree');
const currencyItems = document.querySelectorAll('#currencylist li');
const balancelist=document.querySelectorAll('#balancelist li');
const tablecolonedata=["Step 1","FTMO Challenge","Unlimited","4 Days",500, 1000,1000,"€155"];
const tablecoltwodata=["Step 2","FTMO Verification","Unlimited","4 Days",500,1000,500,"Free"];
const tablecolthreedata=["Step 3","FTMO Trader","Unlimited","X",500,1000,"X","Refund"];
const poundtable=document.getElementById("poundtable");
const tablerowonedataone=document.getElementById('tablerowonedivsone');
const tablerowonedatatwo=document.getElementById('tablerowonedivstwo');
const tablerowonedatathree=document.getElementById('tablerowonedivsthree');
const currencyConversionRates = [1,0.73,0.82,22.10,1.28,1.49,0.89]
const currencySymbols = ['$', '£', '€', 'CZK', '$', '$', 'CHF'];
const balancelistselected=[1,2.5,5,10,20]
const poundtabledata=["€155","€250","€345","€540","€1080"];
const tabledata=[tablecolonedata,tablecoltwodata,tablecolthreedata]
const tablerowone=[tablerowonedataone,tablerowonedatatwo,tablerowonedatathree];

const accountcomparetable=[10000,"unlimited","4 Days",500,1000,1000,1000]
const comparebutton=document.getElementById('balancecomparebutton');
const comparetablecolone=document.querySelectorAll('.comparetablecolone');
const comparetablecoltwo=document.querySelectorAll('.comparetablecoltwo');
const comparetablecolthree=document.querySelectorAll('.comparetablecolthree');
const comparetablecolfour=document.querySelectorAll('.comparetablecolfour');
const comparetablecolfive=document.querySelectorAll('.comparetablecolfive');
const comparetablecolumns=[comparetablecolone,comparetablecoltwo,comparetablecolthree,comparetablecolfour,comparetablecolfive];

const tablecontainer=document.getElementById('tablecontainer');
const comparetablecontainer=document.getElementById('comparetablecontainer')
const comparetablelastrow=document.querySelectorAll('.comparetablelastrow')

let tablerowcounter=0;
let conversionRate = currencyConversionRates[0];
let selectedCurrencySymbol = currencySymbols[0];
let balancecheck=balancelistselected[0];


const ftmopropcarousels=document.querySelectorAll('.propfirmscarousel');
const propfirmcontainer=document.getElementById('propfirmcontainer');
const ftmoproplist=document.querySelectorAll('#ftmoproplist li');
const ftmoprplisth1=document.querySelectorAll('#ftmoproplist li h1');
const ftmoprplistp=document.querySelectorAll('#ftmoproplist li p');
const propfirmsection=document.getElementById("propfirmsection");
let ftmopropcarouselcheck=0;







/*HOME PAGE */
hamburger.addEventListener("click",function() {
  if(navbar.style.display==='block'){
    navbar.style.display='none';

    }
    else{
        navbar.style.display='block';
    
    }
});


function toggleNavbar() {
  if (window.innerWidth > 1060) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';  
  }
}



// Add event listener for Searchlogo on navbar
navSearchLogo.addEventListener('click', function() {
  if(window.innerWidth>1060){
    if (searchText.style.display === 'block') {
      searchText.style.display = 'none';
    } else {
      searchText.style.display = 'block';
    }}
  });





  function toggleSearch() {
    if(window.innerWidth <= 1060){
    searchText.style.display = 'block';
    }
    else{
      searchText.style.display = 'none';
    }
  }

  //hide search

  function hideSearchText() {
    if (window.innerWidth > 1060) {
    searchText.style.display = 'none';
    }
  
  }
  
  // Event listener to trigger the function when mouse leaves the container
 searchText.addEventListener('mouseleave', hideSearchText);



// Event listener for window resize
window.addEventListener('resize', function() {
  toggleNavbar();
  toggleSearch();
});

/*HOME PAGE */



/*HOME PAGE Carousel*/




function setCarouselContainersWidth() {
  if (window.innerWidth < 767.98) {
    if (carouselFirst && carouselContainers.length > 0) {
      const carouselFirstWidth = carouselFirst.getBoundingClientRect().width + 'px';

      carouselContainers.forEach(container => {
        container.style.width = carouselFirstWidth;
      });
    }
  }else{
    carouselContainers.forEach(container => {
      container.removeAttribute('style');
    });
  }
}


function setcarouselleft(){
  if (window.innerWidth < 767.98) {
  carouselContainers.forEach(
    (containers,index)=>{
      containers.style.left = `${index * 100}%`;
    }
  )}
  else{
    carouselContainers.forEach(
      (containers,index)=>{
        containers.style.left = '';
      }
    )
  }
}

function CarouselMovement(){
  if (window.innerWidth < 767.98) {
  carouselContainers.forEach(
    (containers,index)=>{
      carouselnav[index].checked=false;
      containers.style.transform= `translateX(-${carouselcounter * 100}%)`;
    })
  }
  else{
    carouselContainers.forEach(
      (containers,index)=>{
        containers.style.transform = '';
      }
    )
  }
}





carouselnext.addEventListener("click",()=>{
  if(carouselcounter == carouselContainers.length-1){
    carouselcounter=0;
    CarouselMovement();
    carouselnav[carouselcounter].checked = true;
  }
  else{
  carouselcounter++;
  CarouselMovement();
  carouselnav[carouselcounter].checked = true;
  }
})

carouselprev.addEventListener("click",()=>{
  if(carouselcounter == 0){
    carouselcounter=carouselContainers.length-1;
    CarouselMovement();
    carouselnav[carouselcounter].checked = true;
  }
  else{
  carouselcounter--;
  CarouselMovement();
  carouselnav[carouselcounter].checked = true;
  }

})




function carouselnavclicked() {
  carouselnav[carouselcounter].checked = true;
  carouselnav.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      carouselcounter = index;
      CarouselMovement();
      carouselnav[carouselcounter].checked = true;
    });
  });
}

carouselnavclicked();

setcarouselleft();
// Call initially
setCarouselContainersWidth();

// Listen for window resize
window.addEventListener('resize', () => {
  setCarouselContainersWidth();
  setcarouselleft();
  CarouselMovement();
  carouselnavclicked() ;
});

homevideooff.addEventListener("click",()=>{
  homevideo.style.display='none';
})
homevideoplay.addEventListener("click",()=>{
  homevideo.style.display='block';
})

function showvidhome(){
  if(window.innerWidth< 767.98){
  homevideo.style.display='block';
  }
  else{
    homevideo.style.display='none';
  }
}



window.addEventListener("resize",showvidhome);


// Table Section


  


function updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck){
if(window.innerWidth<545){

  tablecolumnone.forEach((element,index)=>{
    const originalValue = tabledata[tablerowcounter][index];

    // Check if the element is a number before conversion
    if (typeof originalValue === 'number' && index!=7 ) {
      const convertedValue = originalValue * conversionRate * balancecheck;
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else if(index==7){
      poundupdated();
    }
    
    else {
      element.textContent = originalValue;
    }

     
    }
   )}
   else if(window.innerWidth>545){
    tablecolumnone.forEach((element,index)=>{
  
      const originalValue = tabledata[0][index];
      if (typeof originalValue === 'number' && index!=7) {
        const convertedValue = originalValue * conversionRate * balancecheck;
        element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
  
      } 
      else if(index==7){
        poundupdated();
      }

      else {
        element.textContent = originalValue;

      }
     })
     tablecolumntwo.forEach((element,index)=>{
      const originalValue = tabledata[1][index];
      if (typeof originalValue === 'number' ) {
        const convertedValue = originalValue * conversionRate * balancecheck;
        element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
      } else {
        element.textContent = originalValue;
      }
     })
     tablecolumnthree.forEach((element,index)=>{
      const originalValue = tabledata[2][index];
      if (typeof originalValue === 'number' ) {
        const convertedValue = originalValue * conversionRate * balancecheck;
        element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
      } else {
        element.textContent = originalValue;
      }
     })
   }

   }


function poundupdated(){

  balancelist.forEach((balanceItem, index) => {
    balanceItem.addEventListener("click", () => {
      // Reset styles for all items
     poundtable.textContent=poundtabledata[index];

    })
    }
  )
}



function balanceselected(){
  
  balancelist[0].style.backgroundColor = '#0781fe';
  balancelist[0].style.color = 'white';
  comparetablelastrow[0].style.backgroundColor = '#dce4ef';
  comparetablecolone.forEach((element)=>{
    element.style.backgroundColor='#dce4ef';
  })
  balancelist.forEach((balanceItem, index) => {
    balanceItem.addEventListener("click", () => {
      // Reset styles for all items
      balancelist.forEach((item) => {
        item.style.backgroundColor = '';
        item.style.color = '';
      });

      // Apply styles to the clicked item
      balanceItem.style.backgroundColor = '#0781fe';
      balanceItem.style.color = 'white';
    
      balancecheck=balancelistselected[index];
      const selectedBackgroundColor = '#dce4ef';

      // Reset background color for all last rows and columns
      comparetablelastrow.forEach(row => {
        row.style.backgroundColor = 'white';
      });
      
      comparetablecolumns.forEach(column => {
        column.forEach(element => {
          element.style.backgroundColor = 'white';
        });
      });
      
      // Set background color for the selected last row and column
      comparetablelastrow[index].style.backgroundColor = selectedBackgroundColor;
      
      if (comparetablecolumns && comparetablecolumns[index]) {
        comparetablecolumns[index].forEach(element => {
          // Set background color for the specific element in the column
          element.style.backgroundColor = selectedBackgroundColor;
        });
      }

      updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
      comparetable(conversionRate, selectedCurrencySymbol)


   
      })
    })

}



function selectedCurrency() {
    currencyItems[0].style.backgroundColor = '#0781fe';
    currencyItems[0].style.color = 'white';

    selectedCurrencySymbol=currencySymbols[0];
    conversionRate = currencyConversionRates[0];
    comparetable(conversionRate, selectedCurrencySymbol)
    currencyItems.forEach((currencyItem, index) => {
      currencyItem.addEventListener("click", () => {
        // Reset styles for all items
        currencyItems.forEach((item) => {
          item.style.backgroundColor = '';
          item.style.color = '';
        });
  
        // Apply styles to the clicked item
        currencyItem.style.backgroundColor = '#0781fe';
        currencyItem.style.color = 'white';
  
        const clickedCurrencyIndex = index;
  
        if (
          clickedCurrencyIndex >= 0 &&
          clickedCurrencyIndex < currencyConversionRates.length &&
          clickedCurrencyIndex < currencySymbols.length
        ) {
          // Get the conversion rate for the selected currency
         conversionRate = currencyConversionRates[clickedCurrencyIndex];
  
          // Get the currency symbol for the selected currency
         selectedCurrencySymbol = currencySymbols[clickedCurrencyIndex];
  
          // Call the update function with the obtained values
          updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
          comparetable(conversionRate, selectedCurrencySymbol)
        }
      });
    });
  }


  

tableleftbutton.addEventListener("click",()=>{
  if(tablerowcounter===0){
    tablerowcounter=tabledata.length-1;
    updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
  
   }
   else{
    tablerowcounter--;
    updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
  
   }

}
 )


tablerightbutton.addEventListener("click",()=>{
  if(tablerowcounter===tabledata.length-1){
    tablerowcounter=0;
    updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
   }
   else{
    tablerowcounter++;
    updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
   }
}
)



window.addEventListener("resize",()=>{
  updatetabledata(conversionRate, selectedCurrencySymbol,balancecheck);
})


// Table Section

// Compare Table Section

function comparetable(conversionRate, selectedCurrencySymbol){
  comparetablecolone.forEach((element,index)=>{
    const originalValue = accountcomparetable[index];
    if (typeof originalValue === 'number' ) {
      const convertedValue = originalValue * conversionRate * balancelistselected[0];
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else{
      element.textContent=originalValue;
    }
  })


  comparetablecoltwo.forEach((element,index)=>{
    const originalValue = accountcomparetable[index];
    if (typeof originalValue === 'number' ) {
      const convertedValue = originalValue * conversionRate * balancelistselected[1];
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else{
      element.textContent=originalValue;
    }
  })

  comparetablecolthree.forEach((element,index)=>{
    const originalValue = accountcomparetable[index];
    if (typeof originalValue === 'number' ) {
      const convertedValue = originalValue * conversionRate * balancelistselected[2];
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else{
      element.textContent=originalValue;
    }
  })


  comparetablecolfour.forEach((element,index)=>{
    const originalValue = accountcomparetable[index];
    if (typeof originalValue === 'number' ) {
      const convertedValue = originalValue * conversionRate * balancelistselected[3];
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else{
      element.textContent=originalValue;
    }
  })

  comparetablecolfive.forEach((element,index)=>{
    const originalValue = accountcomparetable[index];
    if (typeof originalValue === 'number' ) {
      const convertedValue = originalValue * conversionRate * balancelistselected[4];
      element.textContent = `${selectedCurrencySymbol} ${ convertedValue}`;
    } 
    else{
      element.textContent=originalValue;
    }
  })







}


comparebutton.addEventListener("click", () => {
  if (comparetablecontainer.style.display === 'none') {
    comparetablecontainer.style.display = 'grid';
    comparebutton.style.backgroundColor='white';
    comparebutton.style.color='black';
    
    selectedCurrency();
    tablecontainer.style.display = 'none';
  } else {
    tablecontainer.style.display = 'block';
    comparetablecontainer.style.display = 'none';
    comparebutton.style.backgroundColor='#0781fe';
    comparebutton.style.color='white';
  }
});


comparetable(conversionRate,currency);
balanceselected()
poundupdated()
selectedCurrency();
// Compare Table Section




//FTMO PROP SECTION
/*

const ftmopropcarousels=document.querySelectorAll('.propfirmscarousel');
const propfirmcontainer=document.getElementById('propfirmcontainer');
const ftmoproplist=document.querySelectorAll('#ftmoproplist li');
const ftmoprplisth1=document.querySelectorAll('#ftmoproplist li h1');
const ftmoprplistp=document.querySelectorAll('#ftmoproplist li p');
const propfirmsection=document.getElementById("propfirmsection");
let ftmopropcarouselcheck=0;
*/







function newftmopropcarouselheight(ind) {
  let initialContainerWidth;
  if (window.innerWidth >= 767.98) {
    if (ind || ind === 0) {
      /* Capture the initial width if not already stored
      if (!initialContainerWidth) {
        initialContainerWidth = propfirmcontainer.getBoundingClientRect().width + 'px';
      }
      propfirmcontainer.style.width = initialContainerWidth;
      console.log("width changed");
      // Access all properties and log them
      const styles = window.getComputedStyle(propfirmcontainer);

      const widthContainer = initialContainerWidth;
      */

      const width = window.innerWidth;

      if (width < 995 && width >= 767.98) {
        // Get the computed styles for max-width: 767px
        propfirmcontainer.style.width = '696px';
         initialContainerWidth=propfirmcontainer.style.width ;
         ftmopropcarousels.forEach((element)=>{
          element.style.width = initialContainerWidth;
    
        })


      } else if (width < 1196 && width >= 995 && width>= 767.98) {
  
        propfirmcontainer.style.width = '936px';
       
        initialContainerWidth=propfirmcontainer.style.width ;
        ftmopropcarousels.forEach((element)=>{
          element.style.width = initialContainerWidth;
    
        })

      } else if (width < 1380 && width >= 1196 && width>= 767.98) {
      
        propfirmcontainer.style.width = '1116px';
      
        initialContainerWidth=propfirmcontainer.style.width ;
        ftmopropcarousels.forEach((element)=>{
          element.style.width = initialContainerWidth;
    
        })
       

      } else if(width > 1380){
      
        propfirmcontainer.style.width = '1296px';
    
        initialContainerWidth=propfirmcontainer.style.width ;
        ftmopropcarousels.forEach((element)=>{
          element.style.width = initialContainerWidth;
    
        })
        
      }

    

  }
}


   else {
    if (window.innerWidth < 767.98) {
      const containwidth = window.innerWidth - 50 + 'px';
      propfirmcontainer.style.width = containwidth;

      ftmopropcarousels.forEach((element)=>{
      element.style.width = containwidth;

    })

    } 
   
  }
}






function carouselchangeftmoprop(index) {

  ftmopropcarousels.forEach((element) => {
    
    element.style.transform = `translateX(-${index * 100}%)`;
  });
}




function ftmopropcarouselistselect(selected){
  ftmoprplisth1.forEach((element)=>{
    element.style.color="#c6c6c6";
  })
  ftmoprplistp.forEach((element)=>{
    element.style.color="#c6c6c6";
    element.style.borderBottom = "none"; 
  })


  ftmoprplisth1[selected].style.color="#0781fe";
  ftmoprplistp[selected].style.color="#262729";
  ftmoprplistp[selected].style.borderBottom = "2px solid #0781fe";

}



function ftmopropselectedcarousel(){
  ftmoproplist.forEach((element,index)=>{
    element.addEventListener("click",()=>{
      ftmopropcarouselcheck=index;

      ftmopropcarouselistselect(ftmopropcarouselcheck);
      newftmopropcarouselheight(ftmopropcarouselcheck);
    carouselchangeftmoprop(ftmopropcarouselcheck);
    })

  }

  )
}






ftmopropselectedcarousel()
ftmopropcarouselistselect(ftmopropcarouselcheck);
newftmopropcarouselheight(ftmopropcarouselcheck);




window.addEventListener("resize",()=>{

  newftmopropcarouselheight(ftmopropcarouselcheck)
ftmopropselectedcarousel()


}
)



//FTMO PROP SECTION


//FTMO LAST Carousel SECTION

const ftmolastcarousel=document.getElementById("ftmolastcarousel");
const ftmolastcarouselcontainer=document.getElementById("lastmaincarouselftmo");
const ftmolastcarouselcontent=document.querySelectorAll(".carouselcontentftmolast");
const ftmooldarrowleft=document.getElementById("ftmolastleftarrow");
const ftmooldarrowright=document.getElementById("ftmolastrightarrow");
const ftmonewarrowleft=document.getElementById("ftmolastleftnewarrow");
const ftmonewarrowright=document.getElementById("ftmolastrightnewarrow");
const lastftmocarouselradiobuttons=document.querySelectorAll(".radiolastftmocheck");
let ftmolastchecked=0;

function ftmolastcarouselwidthupdated(){
  const width=window.innerWidth;
  if (width < 767.98) {
    const containerWidth = ftmolastcarousel.getBoundingClientRect().width + "px";
   ftmolastcarouselcontainer.style.width = "100%";
 
   ftmolastcarouselcontent.forEach((element) => {
      element.style.width = containerWidth;
    });
 
  }
  else {

    if(width <= 995 && width >= 767.98) {
      ftmolastcarouselcontainer.style.width = '320px';
     
      ftmolastcarouselcontent.forEach((element) => {
        const computedWidth = window.getComputedStyle(element).width;
        
        element.style.width = computedWidth;
      });

    }
    else if (width < 1196 && width > 995 && width>= 767.98) {
      ftmolastcarouselcontainer.style.width = '600px';
     
      ftmolastcarouselcontent.forEach((element) => {
        const computedWidth = window.getComputedStyle(element).width;
      
        element.style.width ="300px";
      });
    }
    else if (width < 1380 && width >= 1196 && width>= 767.98) {
      ftmolastcarouselcontainer.style.width = '800px';
     
      ftmolastcarouselcontent.forEach((element) => {
        const computedWidth = window.getComputedStyle(element).width;
     
        element.style.width = "270px";
      });
    }
    else if(width > 1380){
      ftmolastcarouselcontainer.style.width = '990px';
      
      ftmolastcarouselcontent.forEach((element) => {
        const computedWidth = window.getComputedStyle(element).width;
        
        element.style.width = "245px";
      });
    }

  }
 
}


function ftmolastcarouselindex(index){
  ftmolastcarouselcontent.forEach((element) => {
    
    element.style.transform = `translateX(-${index * 100}%)`;
  });
}



ftmooldarrowleft.addEventListener("click", () => {
  if(ftmolastchecked===0){
    ftmolastchecked=ftmolastcarouselcontent.length-1;
    ftmolastcarouselindex(ftmolastchecked);
    updateRadioButtonState()
  }
  else{
    ftmolastchecked = ftmolastchecked - 1 ;
    ftmolastcarouselindex(ftmolastchecked);
    updateRadioButtonState()
    }
    
});

ftmooldarrowright.addEventListener("click", () => {
  if(ftmolastchecked===ftmolastcarouselcontent.length-1){
    ftmolastchecked=0;
    ftmolastcarouselindex(ftmolastchecked);
    updateRadioButtonState()
  }else{
  ftmolastchecked = ftmolastchecked + 1;
  ftmolastcarouselindex(ftmolastchecked);
  updateRadioButtonState()
  }
  
});

ftmonewarrowleft.addEventListener("click", () => {
  if(ftmolastchecked===0){
    ftmolastchecked=ftmolastcarouselcontent.length-1;
    ftmolastcarouselindex(ftmolastchecked);
    updateRadioButtonState()
  }
  else{
  ftmolastchecked = ftmolastchecked - 1 ;
  ftmolastcarouselindex(ftmolastchecked);
  updateRadioButtonState()
  }
 
});

ftmonewarrowright.addEventListener("click", () => {
  if(ftmolastchecked===ftmolastcarouselcontent.length-1){
    ftmolastchecked=0;
    ftmolastcarouselindex(ftmolastchecked);
    updateRadioButtonState()
  }
  else{
  ftmolastchecked = ftmolastchecked + 1;
  ftmolastcarouselindex(ftmolastchecked);
  updateRadioButtonState()
  }
  
});





function radiobuttonsclickedlastftmocarousel() {

  lastftmocarouselradiobuttons.forEach((element, index) => {
    element.addEventListener("click", () => {
      lastftmocarouselradiobuttons.forEach((btn) => {
        btn.checked = false;
      });
      element.checked = true;
      ftmolastchecked=index;
      ftmolastcarouselindex(index);
    });
  });
}


function updateRadioButtonState() {
  lastftmocarouselradiobuttons.forEach((btn, index) => {
    btn.checked = index === ftmolastchecked;
  });
}

updateRadioButtonState()
radiobuttonsclickedlastftmocarousel();
ftmolastcarouselwidthupdated()


window.addEventListener("resize",()=>{
  ftmolastcarouselwidthupdated()
  ftmolastcarouselindex(ftmolastchecked);
  radiobuttonsclickedlastftmocarousel() ;
})


//FTMO LAST Carousel SECTION

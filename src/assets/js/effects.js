
// logo effect
function logoEffect(){
    var logos =[
        'effects/logo/Logo1x.png',
        'effects/logo/Logo1x-parte1.png',
        'effects/logo/Logo1x-parte2.png',
        'effects/logo/Logo1x-parte3.png',
        // 'effects/logo/Logo1x-parte4.png',
    ];
    var i = -1;
    setInterval(() => {
        if(i >= 3){
            i = -1;
        }

       i++
        document.getElementById('logo').src = logos[i];
    }, 350);
  }

  function slideCards() {
     let rowEvents =  document.getElementById('row-events')
     rowEvents.innerHTML =  '';
     
     let colsm4 = document.createElement('div');
     colsm4.setAttribute('class', 'col-sm-4 bg-light');

    for (let index = 0; index < 2; index++) {
        if(index == 0){
            rowEvents.appendChild(colsm4)
        }

        if(index == 1){
            let colsm4_spinner = document.createElement('div');
            colsm4_spinner.setAttribute('class', 'col-sm-4 bg-light');

            let spinner = document.createElement('div');
            spinner.setAttribute('class', 'spinner-border text-warning spinner')
            let ajustelement = document.createElement('p')
            ajustelement.setAttribute('class', 'text-center');
            ajustelement.appendChild(spinner)
        
            colsm4_spinner.appendChild(ajustelement);

            rowEvents.appendChild(colsm4_spinner)
        }

        if(index == 2){
            rowEvents.appendChild(colsm4)
        }
    }

    setTimeout(() => {
        rowEvents.innerHTML =  '';
    }, 5000);
    return true;
  }
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
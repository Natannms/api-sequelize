// request ajustes
var URL_BASE = "http://localhost:3000";

function validate(validationType) {
    switch (validationType) {
        case 'events':
            return Promise.resolve(true);
            break;
        case 'bands':
            return Promise.resolve(true);
            break;
        case 'bandsListForEvent':
            return Promise.resolve(true);
            break;

        default:
            break;
    }
}

function getBands(id) {
    let getBandsInEvent = fetch(`${URL_BASE}/bands/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
    });

    validate('bands').then((response) => {
        if (!response) {
            alert('Você não tem permissões para realizar tarefas em dashboard !')
        } else {
            getBandsInEvent.then((response) => {
                response.json().then((data) => {
                    // localStorage.setItem('bands', JSON.stringify(data));
                    return data;
                })
            })
        }
    })
}

function getBandsInEvent(arr) {
    let getBandsInEvent = fetch(`${URL_BASE}/bandsListForEvent`, {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify({ bands_id: arr })
    });

    validate('bandsListForEvent').then((response) => {
        if (!response) {
            alert('Você não tem permissões para realizar tarefas em dashboard !')
        } else {
            getBandsInEvent.then((response) => {
                response.json().then((data) => {
                    localStorage.setItem('bandsListForEvent', JSON.stringify(data));
                })
            })
        }
    })
}
//  getEvents();
//  let Bands = JSON.parse(localStorage.getItem('bandsListForEvent'))
//  console.log(Bands)




//  getBandsInEvent([1,2])
//  let Events = JSON.parse(localStorage.getItem('events'))
//  console.log(Events)

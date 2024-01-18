const authData = {
    email: "oscar.romero.7@hotmail.com",
    password: "Macorolo7"
};

const apiUrl = 'https://driedfruitsami.com/api-actionlab/public';

let authToken = '';
let userReservation = '';
async function authenticate() {
    try {
        let response = await fetch(`${apiUrl}/api/v1/user/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData)
        });

        let {data} = await response.json();
        console.log(data)
        authToken = data.token;

        let reservation = await fetchWithToken(`${apiUrl}/api/v1/user/client/reservations/user-reservation/3`, 'GET');
        userReservation = reservation.data[0].id;
        console.log('Reservación del usuario:', userReservation)
    } catch (error) {
        console.error('Error en autenticación:', error);
    }
}

async function fetchWithToken(url, method, body) {
    if (!authToken) {
        throw new Error('No hay token de autenticación disponible');
    }



    let response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}

var userData = {
    user_id: 3, 
    birthdate: "",
    gender: "",
    phone: "",
    entrepreneurshipTime: "",
    difficultAspect: "",
    interestArea: ""
};

async function submitData() {
    try {
        userData.birthdate = document.getElementById('birthdateInput').value;
        userData.gender = document.getElementById('genderInput').value;
        userData.phone = document.getElementById('phoneInput').value;
        userData.entrepreneurshipTime = document.getElementById('entrepreneurshipTimeInput').value;
        userData.difficultAspect = document.getElementById('difficultAspectInput').value;
        userData.interestArea = document.getElementById('interestAreaInput').value;
        if (!authToken) {
            await authenticate();
        }

        let profileData = await fetchWithToken(`${apiUrl}/api/v1/user/client/profiles`, 'POST', {
            user_id: userData.user_id,
            birthdate: userData.birthdate,
            gender: userData.gender,
            phone: userData.phone
        });
        console.log('Envío de perfil exitoso', profileData);

        async function sendAnswer(questionId, responseText) {
            return await fetchWithToken(`${apiUrl}/api/v1/user/client/answers`, 'POST', {
                user_id: 3,
                event_id: 2, 
                question_id: questionId,
                text_response: responseText
            });
        }

        let answerData1 = await sendAnswer(1, userData.entrepreneurshipTime);
        console.log('Answer to question 1 submitted', answerData1);

        let answerData2 = await sendAnswer(2, userData.difficultAspect);
        console.log('Answer to question 2 submitted', answerData2);

        let answerData3 = await sendAnswer(3, userData.interestArea);
        console.log('Answer to question 3 submitted', answerData3);

       let qr = await fetchWithToken(`${apiUrl}/api/v1/user/client/reservations/generate-qr/${userReservation}`, 'POST');
        console.log('QR generado', qr);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('submitBtn').addEventListener('click', submitData);

window.addEventListener('load', authenticate);
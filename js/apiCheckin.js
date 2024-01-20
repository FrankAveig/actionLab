
var userData = {
    user_id: '', 
    birthdate: "",
    gender: "",
    phone: "",
    entrepreneurshipTime: "",
    difficultAspect: "",
    interestArea: ""
};

// Datos de autenticación
const authData = {
    email: "", // Este valor se actualizará si hay un email en la URL
    password: "Actionlab.1" 
};

// URL de la API
const apiUrl = 'https://driedfruitsami.com/api-actionlab/public';

// Token de autenticación y reserva del usuario
let authToken = '';
let userReservation = '';

// Función para obtener el token
async function authenticate() {
    try {
        let response = await fetch(`${apiUrl}/api/v1/user/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData)
        });
        let {data} = await response.json();
        console.log('Respuesta de autenticación:', data);
        authToken = data.token;
        userData.user_id = data.user.id;

        let reservation = await fetchWithToken(`${apiUrl}/api/v1/user/client/reservations/user-reservation/${userData.user_id}`, 'GET');
        userReservation = reservation.data[0].id;
        console.log('Reserva del usuario:', reservation.data[0].user.id);
    } catch (error) {
        console.error('Error en autenticación:', error);
    }
}

// Función para hacer solicitudes con token
async function fetchWithToken(url, method, body = null) {
    if (!authToken) {
        throw new Error('No hay token de autenticación disponible');
    }

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
    };

    let fetchOptions = {
        method: method,
        headers: headers
    };

    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    let response = await fetch(url, fetchOptions);
    return await response.json();
}



async function submitData() {
    document.getElementById('loader').style.display = 'flex';

    try {
        userData.birthdate = document.getElementById('birthdateInput').value;
        userData.gender = document.getElementById('genderInput').value;
        userData.phone = document.getElementById('phoneInput').value;
        userData.entrepreneurshipTime = document.getElementById('entrepreneurshipTimeInput').value;
        userData.difficultAspect = document.getElementById('difficultAspectInput').value;
        userData.interestArea = document.getElementById('topicSelect').value;
        const button = document.getElementById('submitBtn');
        button.disabled = true;
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
                user_id: userData.user_id,
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
        document.getElementById('loader').style.display = 'none';

        Swal.fire({
            title: 'Check-in completo!',
            text: 'Tu registro ha sido exitoso.',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a www.actionlab.club
                window.location.href = 'https://www.actionlab.club';
            }
        });
    } catch (error) {
        document.getElementById('loader').style.display = 'none';

        Swal.fire({
            title: 'Check-in icompleto!',
            text: 'Ocurrio un error vuelve a intentar.',
            icon: 'error',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.isConfirmed) {
                const button = document.getElementById('submitBtn');
                button.disabled = false;
            }
        });
        console.error('Error:', error);
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Evento para cargar y autenticar
window.addEventListener('load', () => {
    const emailFromUrl = getQueryParam('email');
    if (emailFromUrl) {
        authData.email = emailFromUrl;
    }
    authenticate();
});

// Adjuntar la función submitData al botón de envío
document.getElementById('submitBtn').addEventListener('click', submitData);

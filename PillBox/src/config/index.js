export default {
    fullLayout: {
        height:100+'%',
        width:100+'%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    formLayout: {
        height:50,
        width:300,
        justifyContent:'center',
        // alignItems:'center'
        padding: 20,
        margin: 5,
        backgroundColor: 'white'
    },
    colors: {
        lightGreen: 'rgb(100, 255, 100)',
        darkGreen: 'rgb(1,135,26)',
        lightBlue: 'rgb(124,199,232)'
    },
    baseUrl: 'http://10.0.2.2:1234/',
    // baseUrl: 'https://yggdrasil.ddns.net/api/master/'
    user: {
        drugs: '',
        _id: '',
        name: '',
        email: '',
        username: '',
        __v: '',
        token: ''
    },
    weekdaysDate: [
        {
            title: 'Monday',
            value: 'M'
        },
        {
            title: 'Tuesday',
            value: 'Tu'
        },
        {
            title: 'Wednesday',
            value: 'W'
        },
        {
            title: 'Thursday',
            value: 'Th'
        },
        {
            title: 'Friday',
            value: 'F'
        },
        {
            title: 'Saturday',
            value: 'Sa'
        },
        {
            title: 'Sunday',
            value: 'Su'
        },
        {
            title: 'Everyday',
            value: 'MTuWThFSaSu'
        }
    ],
};
function getChartTypes(){
    const uppercase = document.querySelector('#inclue-uppercasse').checked;
    const lowercase = document.querySelector('#inclue-lowercase').checked;
    const number = document.querySelector('#number').checked;
    const specialCarater = document.querySelector('#caracteres_especial').checked;

    const charTypes = [];
    if(uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if(lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if(number) {
        charTypes.push('1234567890');
    }

    if(specialCarater) {
        charTypes.push('*!?@#$&:;_~');
    }
    
    return charTypes;
}

function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
   
    return  charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

document.querySelector('#generator').addEventListener('click', function () {
    console.log(randomCharType(getChartTypes()));
});
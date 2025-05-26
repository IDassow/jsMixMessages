console.log("Hello World");
document.getElementById("demo").innerHTML = "Hello World!";
function generate()
{
    let num = Math.floor(Math.random() * 3);
    let result;
    switch(num){
        case 0:
            result = jokes();
            break;
        case 1:
            result = inspiration();
            break;
        case 2:
            result = luckyNumber();
            break;
        default:
            result = 'mid joke';
            break;
    }

    document.getElementById("message").innerHTML = result;
}

function jokes()
{
    let num = Math.floor(Math.random() * 5);
    let result;
    switch(num){
        case 0:
            result = 'Parallel lines have so much in common.\nIt’s a shame they’ll never meet.';
            break;
        case 1:
            result = 'Why don’t skeletons fight each other? \nThey don’t have the guts.';
            break;
        case 2:
            result = 'I told my wife she should embrace her mistakes.\nShe gave me a hug.';
            break;
        case 3:
            result = 'What do you call a factory that makes okay products?\nA satisfactory.';
            break;
        case 4:
            result = 'Why did the scarecrow win an award?\nBecause he was outstanding in his field.';
            break;
        default:
            result = 'mid joke';
            break;
    }
    return result;
}
function inspiration()
{
    let num = Math.floor(Math.random() * 5);
    let result;
    switch(num){
        case 0:
            result = 'Do not wait for the perfect moment. Take the moment and make it perfect.';
            break;
        case 1:
            result = 'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill';
            break;
        case 2:
            result = 'Believe you can and you\'re halfway there. - Theodore Roosevelt';
            break;
        case 3:
            result = 'Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs';
            break;
        case 4:
            result = 'The best way to predict the future is to create it. - Peter Drucker';
            break;
        default:
            result = 'mid joke';
            break;
    }
    return result;
}
function luckyNumber()
{
    return "Your lucky Number is: "+(Math.floor(Math.random() * 100)+1);
}
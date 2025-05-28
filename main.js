console.log("Hello World");
document.getElementById("demo").innerHTML = "Hello World!";

const messages = [
    [
        'Parallel lines have so much in common.\nIt’s a shame they’ll never meet.',
        'Why don’t skeletons fight each other? \nThey don’t have the guts.',
        'I told my wife she should embrace her mistakes.\nShe gave me a hug.',
        'What do you call a factory that makes okay products?\rA satisfactory.', 
        'Why did the scarecrow win an award?\nBecause he was outstanding in his field.'
    ],
    [
        'Do not wait for the perfect moment. Take the moment and make it perfect.',
        'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
        'Believe you can and you\'re halfway there. - Theodore Roosevelt',
        'Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs',
        'The best way to predict the future is to create it. - Peter Drucker'
    ]

]

function generate()
{
    let num = Math.floor(Math.random() * 3);
    if(num !== 2){
        document.getElementById("message").innerHTML = messages[num][Math.floor(Math.random() * 5)];
    }else{
        document.getElementById("message").innerHTML = "Your lucky Number is: "+(Math.floor(Math.random() * 100)+1);
    }
    
}

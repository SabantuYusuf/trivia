console.log('connected')
console.log(jsonData)

// fetch('data.js')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


// let mainContainer = document.getElementById('myData');

// for (let i = 0; i <data.length; i++) {
//     // append each question to the page
//     let div = document.createElement('div');
//     div.innerHTML = 'Question' + data[i].question + ' ' + data[i].incorect;
//     mainContainer.appendChild(div)
// }

let i = 0;
let correctCoount = 0;
// Initialize the first Question
generate(0);
// Generate from json array Data with index
function generate(index) {
    document.getElementById('question').innerHTML = jsonData[index].question;
    document.getElementById('incorrect').innerHTML= jsonData[index].incorrect;
        for(let i = 0; i < incorrect.length; i++) {
            console.log(incorrect)
        }
    document.getElementById('correct').innerHTML = jsonData[index].correct;
}

function checkAnswer() {
    if(document.getElementById(incorrect).checked && jsonData[i].incorrect == jsonData[i].incorrect) {
        correctCoount++;
    }
    if(document.getElementById(correct).checked && jsonData[i].correct == jsonData[i].correct) {
        correctCoount = 0;
    }
    //increment i for next question
    i++;
    if(jsonData.length -1 < i) {
        document.write("Your score is: " + correctCoount)
    }
    // Call back to generate
    generate(i);
}
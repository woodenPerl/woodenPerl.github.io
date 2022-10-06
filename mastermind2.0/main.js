const pickOne = document.getElementById('pickOne');
const pickTwo = document.getElementById('pickTwo');
const pickThree = document.getElementById('pickThree');
const pickFour = document.getElementById('pickFour');


//set the first color
document.getElementById('pickOne') .onclick = function(){
    document.querySelector('.hide-one') .classList.toggle('unhide');

    document.getElementById('pickBlueOne') .onclick = function(){
        document.getElementById('pickOne') .style = 'background-color: blue';
        // document.getElementById('pickOne') .setAttribute('id', 'oB')
    }
    document.getElementById('pickRedOne') .onclick = function(){
        document.getElementById('pickOne') .style = 'background-color: red';
        // document.getElementById('pickOne') .setAttribute('id', 'oR')
    }
    document.getElementById('pickYellowOne') .onclick = function(){
        document.getElementById('pickOne') .style = 'background-color: yellow';
        // document.getElementById('pickOne') .setAttribute('id', 'oY')
    }
    document.getElementById('pickGreenOne') .onclick = function(){
        document.getElementById('pickOne') .style = 'background-color: green';
        // document.getElementById('pickOne') .setAttribute('id', 'oG')
    }
}

//set the second color
document.getElementById('pickTwo') .onclick = function(){
    document.querySelector('.hide-two') .classList.toggle('unhide');

    document.getElementById('pickBlueTwo') .onclick = function(){
        document.getElementById('pickTwo') .style = 'background-color: blue';
        // document.getElementById('pickTwo') .setAttribute('id', 'tB')
    }
    document.getElementById('pickRedTwo') .onclick = function(){
        document.getElementById('pickTwo') .style = 'background-color: red';
        // document.getElementById('pickTwo') .setAttribute('id', 'tR')
    }
    document.getElementById('pickYellowTwo') .onclick = function(){
        document.getElementById('pickTwo') .style = 'background-color: yellow';
        // document.getElementById('pickTwo') .setAttribute('id', 'tY')
    }
    document.getElementById('pickGreenTwo') .onclick = function(){
        document.getElementById('pickTwo') .style = 'background-color: green';
        // document.getElementById('pickTwo') .setAttribute('id', 'tG')
    }
}

//set the third color
document.getElementById('pickThree') .onclick = function(){
    document.querySelector('.hide-three') .classList.toggle('unhide');

    document.getElementById('pickBlueThree') .onclick = function(){
        document.getElementById('pickThree') .style = 'background-color: blue';
        // document.getElementById('pickThree') .setAttribute('id', 'thB')
    }
    document.getElementById('pickRedThree') .onclick = function(){
        document.getElementById('pickThree') .style = 'background-color: red';
        // document.getElementById('pickThree') .setAttribute('id', 'thR')
    }
    document.getElementById('pickYellowThree') .onclick = function(){
        document.getElementById('pickThree') .style = 'background-color: yellow';
        // document.getElementById('pickThree') .setAttribute('id', 'thY')
    }
    document.getElementById('pickGreenThree') .onclick = function(){
        document.getElementById('pickThree') .style = 'background-color: green';
        // document.getElementById('pickThree') .setAttribute('id', 'thG')
    }
}

//set the fourth color
document.getElementById('pickFour') .onclick = function(){
    document.querySelector('.hide-four') .classList.toggle('unhide');

    document.getElementById('pickBlueFour') .onclick = function(){
        document.getElementById('pickFour') .style = 'background-color: blue';
        // document.getElementById('pickfour') .setAttribute('id', 'fB')
    }

    document.getElementById('pickRedFour') .onclick = function(){
        document.getElementById('pickFour') .style = 'background-color: red';
        // document.getElementById('pickFour') .setAttribute('id', 'fR')
    }
    document.getElementById('pickYellowFour') .onclick = function(){
        document.getElementById('pickFour') .style = 'background-color: yellow';
        // document.getElementById('pickFour') .setAttribute('id', 'fY')
    }
    document.getElementById('pickGreenFour') .onclick = function(){
        document.getElementById('pickFour') .style = 'background-color: green';
        // document.getElementById('pickFour') .setAttribute('id', 'fG')
    }
}
document.getElementById('start-btn') .onclick = function(){
    
    //pick one
    if (pickOne.style.backgroundColor === 'blue'){
        const colorOne = 'blue';
        console.log(`color one: ${colorOne}`);
    } else if (pickOne.style.backgroundColor === 'red'){
        const colorOne = 'red';
        console.log(`color one: ${colorOne}`);
    } else if (pickOne.style.backgroundColor === 'yellow'){
        const colorOne = 'yellow';
        console.log(`color one: ${colorOne}`);
    } else if (pickOne.style.backgroundColor === 'green'){
        const colorOne = 'green';
        console.log(`color one: ${colorOne}`);
    }

    //pick two
    if (pickTwo.style.backgroundColor === 'blue'){
        const colorTwo = 'blue';
        console.log(`color two: ${colorTwo}`);
    } else if (pickTwo.style.backgroundColor === 'red'){
        const colorTwo = 'red';
        console.log(`color two: ${colorTwo}`);
    } else if (pickTwo.style.backgroundColor === 'yellow'){
        const colorTwo = 'yellow';
        console.log(`color two: ${colorTwo}`);
    } else if (pickTwo.style.backgroundColor === 'green'){
        const colorTwo = 'green';
        console.log(`color two: ${colorTwo}`);
    }

    //pick three
    if (pickThree.style.backgroundColor === 'blue'){
        const colorThree = 'blue'
        console.log(`color three: ${colorThree}`);
    } else if (pickThree.style.backgroundColor === 'red'){
        const colorThree = 'red'
        console.log(`color three: ${colorThree}`);
    } else if (pickThree.style.backgroundColor === 'yellow'){
        const colorThree = 'yellow'
        console.log(`color three: ${colorThree}`);
    } else if (pickThree.style.backgroundColor === 'green'){
        const colorThree = 'green'
        console.log(`color three: ${colorThree}`);
    }

    //pick four
    if (pickFour.style.backgroundColor === 'blue'){
        const colorFour = 'blue'
        console.log(`color four: ${colorFour}`);
    } else if (pickFour.style.backgroundColor === 'red'){
        const colorFour = 'red'
        console.log(`color four: ${colorFour}`);
    } else if (pickFour.style.backgroundColor === 'yellow'){
        const colorFour = 'yellow'
        console.log(`color four: ${colorFour}`);
    } else if (pickFour.style.backgroundColor === 'green'){
        const colorFour = 'green'
        console.log(`color four: ${colorFour}`);
    }

    document.querySelector('.set-code') .style.display = 'none';
};
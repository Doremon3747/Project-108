function start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/t30pthKM0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r+ "," + random_number_g+ ","+ random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+ "," + random_number_g+ ","+ random_number_b+ ")";

        img1 = document.getElementById('Bear');
        img2 = document.getElementById('Cat');
        img3  = document.getElementById('Cow');
        img4 = document.getElementById('Dog');
        img5 = document.getElementById('Duck');
        img6 = document.getElementById('Elephant');
        img7 = document.getElementById('Frog');
        img8 = document.getElementById('Horse');
        img9 = document.getElementById('Hen and cock');
        img10 = document.getElementById('Insects');
        img11 = document.getElementById('Lion');
        img12 = document.getElementById('Owls');
        img13 = document.getElementById('Pig');
        img14 = document.getElementById('Sheep and goat');
        img15 = document.getElementById('Snake');

        if(results[0].label == "Barking") {
            img1.src = "dog-dribble.gif";
            img2.src = "Cat.png";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }
        else if (results[0].label == "Meowing") {
            img1.src = "Dog.webp";
            img2.src = "Cat.gif";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }
        else if (results[0].label == "Mooing")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.gif";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Quauking")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.gif";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Trumpeting")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.gif";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Croaking")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.gif";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Neighing")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "neight-horse.gif";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Clucking")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "cock_s-walk.gif";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Roaring")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.gif";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Hooting")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.gif";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Oinking")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "pig-88.gif";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.jpg";
        }

        else if (results[0].label == "Bleating")  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep.gif";
            img13.src = "Snake.jpg";
        }

        
        

        else  {
            img1.src = "Dog.webp";
            img2.src = "Cat.jpg";
            img3.src = "Cow.webp";
            img4.src = "Duck.jpg";
            img5.src = "Elephant.jpg";
            img6.src = "Frog.jpg";
            img7.src = "Hen and cock.jpg";
            img8.src = "Horse.jpg";
            img9.src = "Lion.jpg";
            img10.src = "Owls.jpg";
            img11.src = "Pig.jpg";
            img12.src = "Sheep and goat.jpg";
            img13.src = "Snake.gif";

        }
        
    }
}




    


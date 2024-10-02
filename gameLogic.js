const memeQuiz =  {
    "1": {
        "text": "You wake up on a floating bed, drifting through a cloud of memes. The sky rains doge faces. You realize you're not in your room anymore. What’s your first move?",
        "image": "smaller_images/wake_up_memeland.png",
        "choices": {
            "Panic! How did I get here?!": [2, ["Surprised Pikachu"]],
            "Shrug it off. Weird, but let’s roll with it.": [2, ["Roll Safe"]],
            "Start collecting Doge rain in a jar. This might be worth something.": [2, ["Expanding Brain"]],
            "Lie back down. If I ignore it, maybe it’ll go away.": [2, ["This is Fine"]]
        }
    },
    "2": {
        "text": "As you float along, a portal opens. A talking Shiba Inu (wearing sunglasses) pops out and offers you two choices: Red Meme or Blue Meme. Which do you choose?",
        "image": "smaller_images/shiba_inu.png",
        "choices": {
            "Red Meme. I live for adventure!": [3, ["Distracted Boyfriend"]],
            "Blue Meme. Safe choices are smart choices.": [3, ["Drake"]],
            "Can I pick both? I'm indecisive.": [3, ["Squinting Woman"]],
            "Ignore the dog and continue floating. I don’t trust dogs in sunglasses.": [3, ["Futurama Fry"]]
        }
    },
    "3": {
        "text": "The dog is impressed with your choice. He leads you to a Meme Marketplace. Every vendor is selling something weird: troll faces, 'Just Do It' posters, and spinners. What’s the first thing you buy?",
        "image": "smaller_images/meme_market.png",
        "choices": {
            "A 'Just Do It' motivational poster.": [4, ["Drake"]],
            "A jar labeled 'Essence of Dankness.' Seems mysterious.": [4, ["Expanding Brain"]],
            "Something shiny! I’m sure it’s important.": [4, ["Distracted Boyfriend"]],
            "Leave without buying anything. I’m saving for something better.": [4, ["Roll Safe"]]
        }
    },
    "4": {
        "text": "After shopping, you’re suddenly surrounded by a crowd chanting 'One of us! One of us!' They’re trying to make you join a meme cult. What do you do?",
        "image": "smaller_images/meme_cult.png",
        "choices": {
            "Run. I’m not falling for that again.": [5, ["Surprised Pikachu"]],
            "Join them. I’ve always wanted to be part of something… weird.": [5, ["Change My Mind"]],
            "Convince them to follow you instead. I’m the leader now.": [5, ["Roll Safe"]],
            "Pretend you’re already a member. No one will notice.": [5, ["Squinting Woman"]]
        }
    },
    "5": {
        "text": "You escape the crowd (or maybe not). Suddenly, you’re faced with a giant meme wall. It’s blocking your way to… the ultimate meme treasure. How do you get through?",
        "image": "smaller_images/meme_wall.png",
        "choices": {
            "Climb it. I’ve trained for this moment my whole life.": [6, ["Surprised Pikachu"]],
            "Bribe it with more memes.": [6, ["Expanding Brain"]],
            "Convince it to move with clever reasoning.": [6, ["Futurama Fry"]],
            "Take a nap. Maybe it’ll be gone when I wake up.": [6, ["This is Fine"]]
        }
    },
    "6": {
        "text": "You reach the treasure chest and open it. Inside, you find… a meme generator. You can create any meme you want, but it will instantly go viral. What’s your meme?",
        "image": "smaller_images/meme_generator.png",
        "choices": {
            "A meme about how adulting is a trap.": [7, ["Expanding Brain"]],
            "Something random. The internet loves chaos.": [7, ["Distracted Boyfriend"]],
            "An inspirational meme about seizing the day.": [7, ["Drake"]],
            "I create nothing. Memes are sacred, not to be used lightly.": [7, ["Roll Safe"]]
        }
    },
    "7": {
        "text": "The meme you created goes viral, and suddenly you’re a meme celebrity. Everyone’s talking about you. What do you do with your newfound fame?",
        "image": "smaller_images/meme_fame.png",
        "choices": {
            "Start selling branded merchandise. Stonks!": [8, ["Expanding Brain"]],
            "Disappear from the spotlight. Fame’s not for me.": [8, ["Squinting Woman"]],
            "Embrace the chaos. Meme fame is the new royalty.": [8, ["Surprised Pikachu"]],
            "Start a meme-based self-help course.": [8, ["Change My Mind"]]
        }
    },
    "8": {
        "text": "Now that you're a meme legend, what’s your next move in life?",
        "image": "smaller_images/next_move.png",
        "choices": {
            "I retire and live peacefully with my memes.": [9, ["This is Fine"]],
            "I use my fame to make real changes in the world.": [9, ["Change My Mind"]],
            "I create even more chaotic memes. Let the world burn.": [9, ["Distracted Boyfriend"]],
            "I go back to my normal life, pretending this never happened.": [9, ["Futurama Fry"]]
        }
    },
    "9": {
        "text": "As the day ends, you reflect on your meme journey. What’s the one thing you learned about yourself today?",
        "image": "smaller_images/reflection.png",
        "choices": {
            "Memes are life. I am a meme.": [10, []],
            "Life is a series of weird choices, and I’m okay with that.": [10, []],
            "Memes are temporary. The internet forgets too quickly.": [10, []],
            "I should probably stop spending so much time on the internet.": [10, []]
        }
    },
    "10": {
        "text": "You’ve completed your meme odyssey! Based on your choices, you are…",
        "image": "smaller_images/meme_result.png",
        "choices": {
            "View your result!": [0, []]  
        }
    }
}


const personalities = { 
    "Surprised Pikachu": 0,
    "Distracted Boyfriend": 0,
    "Expanding Brain": 0,
    "Change My Mind": 0,
    "Drake": 0,
    "Is This a...?": 0,
    "Futurama Fry": 0,
    "This is Fine": 0,
    "Squinting Woman": 0,
    "Roll Safe": 0
};

// Mapping for meme characteristics images
const memeCharacteristicsImageFiles = {
    "Surprised Pikachu": "surprised_pikachu_characteristics.png",
    "Distracted Boyfriend": "distracted_boyfriend_characteristics.png",
    "Expanding Brain": "expanding_brain_characteristics.png",
    "Change My Mind": "change_my_mind_characteristics.png",
    "Drake": "drake_characteristics.png",
    "Is This a...?": "is_this_a_characteristics.png",
    "Futurama Fry": "futurama_fry_characteristics.png",
    "This is Fine": "this_is_fine_characteristics.png",
    "Squinting Woman": "squinting_woman_characteristics.png",
    "Roll Safe": "roll_safe_characteristics.png"
};

let currentState = 1;
let finalMeme = ''; // Declare globally to access in multiple functions

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    // Handle the final state (state 10)
    if (state == 10) {
        // Calculate the top meme
        let maxCount = 0;
        let topMemes = [];

        for (const [meme, count] of Object.entries(personalities)) {
            if (count > maxCount) {
                maxCount = count;
                topMemes = [meme];
            } else if (count === maxCount) {
                topMemes.push(meme);
            }
        }

        // Handle ties by selecting one at random
        finalMeme = topMemes[Math.floor(Math.random() * topMemes.length)];

        // Get the meme characteristics image file name
        const memeCharImageFile = memeCharacteristicsImageFiles[finalMeme];
        const memeCharImagePath = `smaller_images/meme_characteristics/${memeCharImageFile}`;

        // Set the image source to the meme characteristics image
        storyImage.src = memeCharImagePath;
        storyImage.className = 'responsive-image';

        // Handle image load errors
        storyImage.onerror = () => {
            console.error(`Failed to load image: ${memeCharImagePath}`);
            storyImage.src = 'smaller_images/placeholder.png'; // Use a default or placeholder image
        };

        // Update the story text with the desired message
        storyText.textContent = "Drumroll... here is your Meme ID! Don't lose it! (Right click or hold the image to save)";

        // Hide the choices container
        choicesContainer.style.display = 'none';

        // Create the share button
        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share the game with friends!';
        shareButton.className = 'choice-button';

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `I just found out I'm ${finalMeme}! Discover your meme persona at [Your Game Link]`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Share message copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy message. Please try again.');
            });
        };

        // Append the share button to the story text or a suitable container
        storyText.appendChild(document.createElement('br')); // Add a line break for spacing
        storyText.appendChild(shareButton);

        return; // Exit the function
    }

    // For all other states, proceed as normal
    storyText.textContent = memeQuiz[state].text;
    choicesContainer.innerHTML = '';

    // Set the image source
    storyImage.src = memeQuiz[state].image;

    // Handle image load errors
    storyImage.onerror = () => {
        console.error(`Failed to load image: ${memeQuiz[state].image}`);
        storyImage.src = 'smaller_images/placeholder.png'; // Use a default or placeholder image
    };

    // Create choice buttons
    for (const [choice, info] of Object.entries(memeQuiz[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]);
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) {
    // Update personalities based on selections
    selectedPersonalities.forEach(personality => {
        if (personality) {
            personalities[personality]++;
        }
    });

    currentState = newState;

    // Render the new state
    renderState(currentState);
}

function startGame() {
    // Hide the title, homescreen image, and start button
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // **Add this code to hide the reviews section**
    var reviewsSection = document.getElementById('reviews-section');
    if (reviewsSection) {
        reviewsSection.style.display = 'none';
    } else {
        console.error('Reviews section not found.');
    }

    renderState(currentState);
}

window.onload = () => {
    // Optionally hide the game container on load
    document.getElementById('game-container').style.display = 'none';
};
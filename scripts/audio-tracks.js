function () {
    // Playlist array
    let files = [

        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jan09.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jan23.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jan30.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Apr03.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Apr10.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Apr17.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Apr24.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/May08.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/May15.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/May22.mp3"
        },
                {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jul08.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jul19.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Jul22.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Oct17.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Oct24.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Oct31.mp3"
        },
        {
            title: "",
            date: ,
            length: ,
            src: "../styles/media/Nov07.mp3"
        },
    ];

    // Current index of the files array
    let i = 0;

    // Get the audio element
    let audio_player = document.querySelector("#audio_list audio");

    // function for moving to next audio file
    function next() {
        // Check for last audio file in the playlist
        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Change the audio element source
        audio_player.src = files[i];
    }

    // Check if the player is selected
    if (audio_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        audio_player.src = files[i];

        // Listen for the audio ended event, to play the next audio file
        audio_player.addEventListener('ended', next, false)
    }

})();
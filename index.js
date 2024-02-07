import dotenv from 'dotenv';
dotenv.config();



const btn = document.querySelector("#btn")
const input = document.querySelector(`#input`)

OPEN_API_KEY = dotenv.OPEN_API_KEY
btn.addEventListener(`click`, async () => {
  
    console.log(input.value);
    if (input.value === "") {
        alert("Please enter a prompt")
        return;  }
    try {
        const res = await fetch(`https://api.openai.com/v1/images/generations`, {
            method: "POST",
            body: JSON.stringify({
                "prompt": input.value,
                "n": 1,
                "size": "1024x1024"
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPEN_API_KEY}`
            }
        });

        const data = await res.json();

        console.log(data.data[0].url);

    } catch (error) {
        console.error(error);
    }
});

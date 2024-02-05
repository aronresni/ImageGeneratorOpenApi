import 'dotenv/config'
const btn = document.querySelector("#btn")
const input = document.querySelector(`#input`)

btn.addEventListener(`click`, async () => {
    console.log(input.value);

    try {
        const res = await fetch(`https://api.openai.com/v1/images/generations`, {
            method: "POST",
            body: JSON.stringify({
                "prompt": "un perro programando",
                "n": 1,
                "size": "1024x1024"
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPEN_API_KEY}`
            }
        });

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
});

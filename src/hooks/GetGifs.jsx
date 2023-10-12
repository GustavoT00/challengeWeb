const GetGifs = async ({ category }) => {
    const apiKey = 'eaVRbRrjod8tAnB8OAxfLPntPREj0HDC';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5&offset=0&rating=g&lang=en`;

    try {
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            };
        });

        return gifs;
    } catch (error) {
        console.error('Error fetching gifs:', error);
        return [];
    }
};

export default GetGifs;

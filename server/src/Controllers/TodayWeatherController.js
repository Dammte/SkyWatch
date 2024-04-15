import axios from 'axios';

const apiKey = '5d83f0cd3306142513ccc3dc14d1583d';

export const getTodayWeather = async (req, res) => {
    try {
        let city;
        if (req.query.city) {
            city = req.query.city;
        } else {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
        res.status(500).json({ error: 'Error al obtener datos del clima' });
    }
};

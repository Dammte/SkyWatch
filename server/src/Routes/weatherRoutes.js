import express from 'express';
import { getTodayWeather} from '../Controllers/TodayWeatherController.js';
import { getWeekWeather} from '../Controllers/WeekWeatherController.js';

const router = express.Router();

router.get('/today', getTodayWeather);

router.get('/week', getWeekWeather);

export default router;

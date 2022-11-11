const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

// Requer o plugin utc
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

class Time {
	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	timeNow (req, res) {
		const results = {};
		const now = dayjs();

		const timezones = Intl.supportedValuesOf("timeZone");
		if (!req.query.tz) {
			for (const tz of timezones)
				results[tz] = now.tz(tz).format("YYYY-MM-DD HH:mm:ss");
		} else if (timezones.includes(req.query.tz)) {
			results[req.query.tz] = now.tz(req.query.tz).format("YYYY-MM-DD HH:mm:ss");
		} else {
			return res.status(400).json({ message: `Time zone "${req.query.tz}" is not supported.` });
		}

		res.status(200).json(results);
	}

	/**
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	listTimezones (req, res) {
		const timezones = Intl.supportedValuesOf("timeZone");
		res.status(200).json({ timezones });
	}
}

module.exports = new Time();

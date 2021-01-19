(function app() {
	const countdownTimerValue = {
		days: 8,
		hours: 23,
		minutes: 55,
		seconds: 41,
	};

	const target = {
		days: document.getElementById('days'),
		hours: document.getElementById('hours'),
		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
		end: document.getElementById('end'),
	};

	// let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	// let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	// let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

	function countdown() {
		let seconds;
		let minutes;
		let hours;
		let days;

		if (countdownTimerValue.seconds > 0) {
			countdownTimerValue.seconds -= 1;
			seconds =
				countdownTimerValue.seconds < 10
					? `0${countdownTimerValue.seconds}`
					: `${countdownTimerValue.seconds}`;
			target.seconds.querySelector('.card__back').textContent = seconds;
			target.seconds.dataset.after = seconds;
			target.seconds.querySelector('.card').classList.add('flip');
			target.seconds
				.querySelector('.card')
				.addEventListener('animationend', (event) => {
					if (event.animationName === 'flip') {
						target.seconds.querySelector('.card__front').textContent = seconds;
						target.seconds.dataset.before = seconds;
						target.seconds.querySelector('.card').classList.remove('flip');
					}
				});
		} else {
			countdownTimerValue.seconds = 59;
		}
	}

	let run = setInterval(() => {
		if (
			countdownTimerValue.days > 0 ||
			countdownTimerValue.hours > 0 ||
			countdownTimerValue.minutes > 0 ||
			countdownTimerValue.seconds > 0
		) {
			countdown();
		} else {
			clearInterval(run);
			target.end.innerHTML = 'Times UP!';
		}
	}, 1000);
})();

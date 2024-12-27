document
.getElementById('toggle-dark-mode')
.addEventListener('click', function () {
	document.body.classList.toggle('dark-mode');
	document.body.classList.toggle('light-mode');
}
);

const userPrefersDarkMode = localStorage.getItem('dark-mode') === 'true';
if (userPrefersDarkMode) {
	document.body.classList.add('dark-mode');
} 
else
{
	document.body.classList.add('light-mode');
}

document
.getElementById('toggle-dark-mode')
.addEventListener('click', function () {
	const darkModeEnabled = document.body.classList.toggle('dark-mode');
	localStorage.setItem('dark-mode', darkModeEnabled);
}
);

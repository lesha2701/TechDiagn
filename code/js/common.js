var swiper = new Swiper('.mySwiper', {
	slidesPerView: checkScreenSize(),
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

function checkScreenSize() {
	if (window.matchMedia('(max-width: 576px)').matches) {
		return 1.6
	} else if (window.matchMedia('(max-width: 769px)').matches) {
		return 3.5
	} else if (window.matchMedia('(max-width: 1000px)').matches) {
		return 4
	} else if (window.matchMedia('(max-width: 1200px)').matches) {
		return 5
	} else {
		return 6 // Значение по умолчанию
	}
}

window.addEventListener('resize', function () {
	swiper.params.slidesPerView = checkScreenSize()
	swiper.update()
})

const logoImage = document.querySelector('.header__logo')
const aboutImage = document.querySelector('.about__img')
const objectsImage = document.querySelector('.objects__img')
const screenWidth = window.innerWidth

if (screenWidth > 940) {
	logoImage.src = 'images/logo.png'
} else {
	logoImage.src = 'images/logo1.png'
}

// Проверяем ширину экрана и меняем src изображения
if (screenWidth > 768) {
	aboutImage.src = './images/about.jpg'
	objectsImage.src = './images/objects.png'
} else {
	aboutImage.src = './images/about1.png'
	objectsImage.src = './images/objects1.png'
}

const navList = document.querySelector('.header__nav-list')
const navItems = document.querySelectorAll('.header__nav-item')
const navButton = document.createElement('img')
navButton.src = 'images/icon.png'
navButton.classList.add('menu-button')

// Добавляем кнопку перед списком навигации
navList.before(navButton)

navButton.addEventListener('click', function () {
	navList.classList.toggle('header__nav-list--visible')
})

navItems.forEach(function (item) {
	item.addEventListener('click', function () {
		navList.classList.remove('header__nav-list--visible')
	})
})

const licencesInner = document.querySelector('.licences__inner')
// Находим кнопки swiper-button-prev и swiper-button-next
const prevButton = document.querySelector('.swiper-button-prev')
const nextButton = document.querySelector('.swiper-button-next')

if (screenWidth >= 768) {
	licencesInner.addEventListener('mouseover', function () {
		// Показываем кнопки
		prevButton.style.display = 'flex'
		nextButton.style.display = 'flex'
	})

	// Добавляем обработчик события при уходе курсора с блока
	licencesInner.addEventListener('mouseleave', function () {
		// Скрываем кнопки
		prevButton.style.display = 'none'
		nextButton.style.display = 'none'
	})
}
// Добавляем обработчик события при наведении на бло

const partnersInner = document.querySelector('.partners__inner')
const prevButtonPartners = document.querySelector('.button-partners-prev')
const nextButtonPartners = document.querySelector('.button-partners-next')
// Находим кнопки swiper-button-prev и swiper-button-next

if (screenWidth >= 768) {
	partnersInner.addEventListener('mouseover', function () {
		// Показываем кнопки
		prevButtonPartners.style.display = 'flex'
		nextButtonPartners.style.display = 'flex'
	})

	// Добавляем обработчик события при уходе курсора с блока
	partnersInner.addEventListener('mouseleave', function () {
		// Скрываем кнопки
		prevButtonPartners.style.display = 'none'
		nextButtonPartners.style.display = 'none'
	})
}
// Добавляем обработчик события при наведении на блок

const images = document.querySelectorAll('.licences__img')
const modal = document.getElementById('myModal')
const modalImg = document.getElementById('img01')

if (screenWidth >= 768) {
	images.forEach(function (img) {
		img.addEventListener('click', function () {
			modal.style.display = 'block'
			modalImg.src = this.src
		})
	})

	// При клике на крестик закрыть модальное окно
	const closeBtn = document.getElementsByClassName('close')[0]
	closeBtn.addEventListener('click', function () {
		modal.style.display = 'none'
	})
}
// При клике на фотографию показать модальное окно с изображение

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const target = document.querySelector(this.getAttribute('href'))
		const offset = 180 // Вы можете настроить этот параметр согласно вашим предпочтениям

		window.scrollTo({
			top: target.offsetTop - offset,
			behavior: 'smooth',
		})
	})
})

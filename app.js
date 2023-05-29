class Component {
	constructor(template, displayParams, modifiers, textValues, events) {
		this.template = template;
		this.displayParams = displayParams;
		this.modifiers = modifiers;
		this.textValues = textValues;
		this.events = events;
	}

	generate() {
		const element = document.createElement(this.template);

		// Применяем параметры отображения
		for (const [key, value] of Object.entries(this.displayParams)) {
			element.style[key] = value;
		}

		// Применяем модификаторы
		for (const modifier of this.modifiers) {
			element.classList.add(modifier);
		}

		// Добавляем текстовые значения
		for (const [_, value] of Object.entries(this.textValues)) {
			if (element) {
				element.innerHTML = value;
			}
		}

		// Добавляем события
		for (const [key, value] of Object.entries(this.events)) {
			element.addEventListener(key, value);
		}

		return element;
	}
}

// Использование класса для создания кнопки
const button1 = new Component("button", {
	width: '100px',
	height: '50px',
	backgroundColor: 'blue',
	color: 'white',
}, ['rounded'], {
	label: 'Click me!',
}, {
	click: () => {
		alert('Кнопка нажата!');
	},
});

const button2 = new Component("button", {
	width: '100px',
	height: '50px',
	backgroundColor: 'red',
	color: 'white',
}, ['rounded'], {
	label: 'Click me 2!',
}, {
	click: () => {
		alert('Кнопка нажата 2!');
	},
});

const buttonElement1 = button1.generate();
const buttonElement2 = button2.generate();

document.body.appendChild(buttonElement1);
document.body.appendChild(buttonElement2);

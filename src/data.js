import Ciencia from './assets/ciencia.png';
import Historia from './assets/historia.png';
import Tecnologia from './assets/tecnologia.png';

export const imgs = [
	Ciencia,
	Historia,
	Tecnologia,
];

export const categories = {
	historia: 'Historia', 
	ciencia: 'Ciencia',
	tecnologia: 'Tecnología',
};

const {
	historia,
	tecnologia,
	ciencia,
} = categories;

export const questions = [
	
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué evento inició la Primera Guerra Mundial?',
		category: historia,
		correct_answer:
			'El asesinato del Archiduque Franz Ferdinand de Austria',
		incorrect_answers: [
			'El hundimiento del Titanic',
			'La invasión de Polonia por Alemania',
			'La Revolución Francesa',
		],
	},
	{
		id: 2,
		difficulty: 'Medio',
		question:
			"¿Qué sustancia es conocida como la 'molécula de la vida'?",
		category: ciencia,
		correct_answer: 'El ADN',
		incorrect_answers: ['La glucosa', 'La insulina', 'La proteína'],
	},
	{
		id: 3,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: tecnologia,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 4,
		difficulty: 'Medio',
		question: '¿Qué es lo que se mide con la escala de Richter?',
		category: ciencia,
		correct_answer: 'La magnitud de los terremotos',
		incorrect_answers: [
			'La velocidad del sonido',
			'La intensidad de los huracanes',
			'La temperatura en grados Fahrenheit',
		],
	},
	{
		id: 5,
		difficulty: 'Medio',
		question: '¿Qué es el efecto invernadero?',
		category: ciencia,
		correct_answer:
			'Un fenómeno atmosférico que retiene el calor en la Tierra',
		incorrect_answers: [
			'Un tipo de casa de vidrio para plantas',
			'Un proceso químico para conservar alimentos',
			'Un tipo de sistema de calefacción para edificios',
		],
	},
	{
		id: 6,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más grande del sistema solar?',
		category: ciencia,
		correct_answer: 'Júpiter',
		incorrect_answers: ['Saturno', 'Neptuno', 'Urano'],
	},
	{
		id: 7,
		difficulty: 'Medio',
		question:
			'¿Cuál es el elemento químico más abundante en la Tierra?',
		category: ciencia,
		correct_answer: 'Oxígeno',
		incorrect_answers: ['Nitrógeno', 'Hierro', 'Silicio'],
	},
	{
		id: 8,
		difficulty: 'Difícil',
		question: '¿Qué científico propuso la teoría del Big Bang?',
		category: ciencia,
		correct_answer: 'Georges Lemaître',
		incorrect_answers: [
			'Albert Einstein',
			'Stephen Hawking',
			'Isaac Newton',
		],
	},
	{
		id: 9,
		difficulty: 'Fácil',
		question: '¿Cuál es el órgano más grande del cuerpo humano?',
		category: ciencia,
		correct_answer: 'La piel',
		incorrect_answers: ['El hígado', 'El corazón', 'Los pulmones'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: tecnologia,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 11,
		difficulty: 'Medio',
		question: '¿En qué año terminó la Segunda Guerra Mundial?',
		category: historia,
		correct_answer: '1945',
		incorrect_answers: ['1939', '1941', '1943'],
	},
	{
		id: 12,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más cercano al Sol?',
		category: ciencia,
		correct_answer: 'Mercurio',
		incorrect_answers: ['Venus', 'Marte', 'Júpiter'],
	},
	{
		id: 13,
		difficulty: 'Fácil',
		question: '¿Qué elemento químico tiene el símbolo H?',
		category: ciencia,
		correct_answer: 'Hidrógeno',
		incorrect_answers: ['Helio', 'Hierro', 'Hormigón'],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: '¿En qué año ocurrió la Revolución Francesa?',
		category: historia,
		correct_answer: '1789',
		incorrect_answers: ['1848', '1917', '1492'],
	},
	// -------------------
	{
		id: 15,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 16,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 17,
		difficulty: 'Fácil',
		category: tecnologia,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 19,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 20,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 21,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 22,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 23,
		difficulty: 'Difícil',
		question: '¿En qué año se produjo la Guerra de los Cien Años?',
		category: historia,
		correct_answer: '1337',
		incorrect_answers: ['1066', '1415', '1642'],
	},
	{
		id: 24,
		difficulty: 'Fácil',
		question: '¿En qué año se produjo el ataque a Pearl Harbor?',
		category: historia,
		correct_answer: '1941',
		incorrect_answers: ['1939', '1942', '1945'],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: historia,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 24,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: historia,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 25,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: historia,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 26,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: historia,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 27,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: historia,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: historia,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: historia,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 30,
		difficulty: 'Difícil',
		question: '¿Cuál es la partícula subatómica más pesada?',
		category: ciencia,
		correct_answer: 'Quark top',
		incorrect_answers: ['Electrón', 'Protón', 'Neutrón'],
	},
	{
		id: 31,
		category: ciencia,
		difficulty: 'Medio',
		question: '¿Qué es la capa de ozono?',
		correct_answer:
			'Una capa de gas que protege la Tierra de la radiación ultravioleta del sol',
		incorrect_answers: [
			'Una capa de nubes en la atmósfera',
			'La capa más externa de la Tierra',
			'Una capa de gases que produce el efecto invernadero',
		],
	},
	{
		id: 32,
		category: ciencia,
		difficulty: 'Difícil',
		question: '¿Qué es la antimateria?',
		correct_answer:
			'Una forma de materia que tiene propiedades opuestas a la materia ordinaria',
		incorrect_answers: [
			'Una forma de materia que no tiene carga eléctrica',
			'Una forma de materia que no tiene masa',
			'Una forma de energía que tiene la capacidad de desintegrar la materia',
		],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: tecnologia,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 34,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: tecnologia,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
];

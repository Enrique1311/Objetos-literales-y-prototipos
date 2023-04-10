// // Objetos literales
// const carolina = {
// 	name: "Carolina",
// 	age: 20,
// 	cursosAprobados: [
// 		"Curso Definitivo de HTML y CSS",
// 		"Curso Práctico de HTML y CSS",
// 	],
// 	aprobarCurso(nuevoCurso) {
// 		this.cursosAprobados.push(nuevoCurso);
// 	},
// };

// // Prototipos
// function Student(name, age, cursosAprobados) {
// 	this.name = name;
// 	this.age = age;
// 	this.cursosAprobados = cursosAprobados;
// }
// Student.prototype.aprobarCurso = function (nuevoCurso) {
// 	this.cursosAprobados.push(nuevoCursito);
// };

// const martina = new Student("Martina", 15, [
// 	"Curso de Introducción a la Producción de Videojuegos",
// 	"Curso de Creación de Personajes",
// ]);

// // Prototipos con la sintaxis de clases
// class Student2 {
// 	constructor({ name, cursosAprobados = [], age, email }) {
// 		this.name = name;
// 		this.email = email;
// 		this.age = age;
// 		this.cursosAprobados = cursosAprobados;
// 	}

// 	aprobarCurso(nuevoCurso) {
// 		this.cursosAprobados.push(nuevoCurso);
// 	}
// }

// const santu = new Student2({
// 	name: "Santiago",
// 	age: 28,
// 	email: "santu@sp.com",
// });

class Course {
	constructor({ name, classes = [] }) {
		this._name = name;
		this.classes = classes;
	}

	get name() {
		return this._name;
	}

	set name(nuevoNombrecito) {
		if (nuevoNombrecito === "Curso Malito de Programación Básica") {
			console.error("Web... no");
		} else {
			this._name = nuevoNombrecito;
		}
	}
}

const cursoProgBasica = new Course({
	name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
	name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
	name: "Curso Practico de HTML y CSS",
});

class LearningPath {
	constructor({ name, courses = [] }) {
		this.name = name;
		this.courses = courses;
	}
}

const escuelaWeb = new LearningPath({
	name: "Escuela de Desarrollo Web",
	courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
	name: "Escuela de Data Science",
	courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
	name: "Escuela de Vidweojuegos",
	courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});

class Student {
	constructor({
		name,
		email,
		username,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
		approvedCourses = [],
		learningPaths = [],
	}) {
		this.name = name;
		this.email = email;
		this.username = username;
		this.socialMedia = {
			twitter,
			instagram,
			facebook,
		};
		this.approvedCourses = approvedCourses;
		this.learningPaths = learningPaths;
	}
}

const juan2 = new Student({
	name: "JuanDC",
	username: "juandc",
	email: "juanito@juanito.com",
	twitter: "fjuandc",
	learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Student({
	name: "Miguelito",
	username: "migelitofeliz",
	email: "miguelito@juanito.com",
	instagram: "migelito_feliz",
	learningPaths: [escuelaWeb, escuelaData],
});
